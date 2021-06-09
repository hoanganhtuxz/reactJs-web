import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Logo from '../Clothes.png';
import UserApi from '../api/userAPI';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
const Header = (props) => {
    let history = useHistory();
    const [html, setHtml] = useState([]);
    const [admin, setAdmin] = useState([])
    let whoUser = JSON.parse(localStorage.getItem('token'))
    useEffect(() => {
        if (whoUser) {
            // console.log("1")
            if (whoUser.user.role == 0) {
                setAdmin('')
                setHtml(
                    <li className="col-span-2">
                        <Link onClick={() => onSignOut()} className="bg-red-400 hover:bg-red-500 mx-4 border-2 text-xl p-2 bg-white hover:bg-orange-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-full py-1 px-5 "  >Đăng Xuất</Link>
                    </li>
                )
            } else {
                setAdmin(
                    <Link to="/admin/dashboard" className="text-blue-500 hover:text-red-500" >Quản trị</Link>
                )
                setHtml(
                    <li className="col-span-2">
                        <Link onClick={() => onSignOut()} className="bg-red-400 hover:bg-red-500 mx-4 border-2 text-xl p-2 bg-white hover:bg-orange-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-full py-1 px-5 "  >Đăng Xuất</Link>
                    </li>
                )
            }
        } else {
            // console.log("22")
            setAdmin('')
            setHtml(
                <li className="col-span-2">
                    <Link className="bg-yellow-100 hover:bg-yellow-200 mx-4 border-2 border-gray text-xl p-2 bg-white hover:bg-orange-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-full py-1 px-5 " id="login" to="/signin">Đăng Nhập</Link>
                </li>
            )
        }
    }, [props.token]);
    const onSignOut = () => {
        swal({
            title: "bạn có đăng xuất không?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            buttons: ["cancel", "ok"],
        })
            .then(async (willDelete) => {
                if (willDelete) {
                    localStorage.removeItem('token');
                    UserApi.signOut()
                    props.sigIn("")
                    swal("đăng xuất thành công!", {
                        icon: "success",
                    });
                    history.push('/')
                }


            });
        // let confirm = window.confirm("Are you sure to sign out???");

        // if (confirm) {
        //     localStorage.removeItem('token');
        //     UserApi.signOut()
        //     props.sigIn("")
        // }
    }
    return (
        <>
            <header className="  mx-auto p-5  border-b-2 border-gray-300 bg-white fixed z-10 w-full" id="header" >
                <div className="grid grid-cols-12 gap-2  ">
                    <div className="col-span-2">
                        <Link to="/" className><img className="w-full h-16 object-cover" src={Logo} alt="" /></Link>
                    </div>
                    <div className="col-span-3 mx-18 mt-3">
                        <div className>
                            <input className="w-10/12 h-10 border-2 inline-block no-underline px-5 rounded-lg" type="text" id="search" placeholder="search..." />
                            <button id="btnSearch" className="absolute p-2">
                                <svg className=" w-6  mx-2   " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="col-span-7 mt-3">
                        <div className=" text-xl">
                            <ul className="flex mx-4 ">
                                <li className="hover:text-yellow-700"  ><Link to="/">Trang Chủ</Link></li>
                                <li className="hover:block mx-4">
                                    <Link className="hover:text-yellow-700" to="/productPage">Sản Phẩm</Link>
                                </li>
                                <li className="mx-4 hover:text-yellow-700"><Link to="/blogPage" >Tin Tức</Link></li>
                                <li className="mx-4 hover:text-yellow-700"><Link to="/contact" >Liên Hệ</Link></li>
                                <li className="mx-4 hover:text-yellow-700">
                                    {admin}
                                </li>
                                <li className="mx-4 hover:text-yellow-700" />
                                <li className="hover:text-yellow-700 ">
                                    <a to="/showcard"><span id="total-cart-product" className="bg-blue-200 rounded-full  text-base absolute -m-2 px-1 ml-16 text-red-600 pr-2 pl-2">0</span>
                                        <svg className="mx-8 w-8 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </a>
                                </li>
                                {html}
                            </ul>
                        </div>
                    </div>
                </div>
            </header >
        </>

    )
}

export default Header