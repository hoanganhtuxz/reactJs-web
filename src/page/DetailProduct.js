import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductApi from '../api/productAPI';
import { ParseURL } from '../utils'
import swal from 'sweetalert';
import CategoryAPI from '../api/categoryAPI';
import { API } from '../config';
const DetailProduct = () => {
    window.scrollTo(0, 0);
    const id = ParseURL()
    const [products, setProductDetail] = useState([]);
    const [product, setProduct] = useState([]);
    const [category, setCate] = useState([]);
    useEffect(() => {
        const listdetail = async () => {

            try {
                let { data: products } = await ProductApi.getAll();
                let { data: product } = await ProductApi.get(id);
                setProductDetail(product);
                setProduct(products.data)
                setCate(product.category)
            } catch (error) {
                console.log(error)

            }
        }
        listdetail()
    }, [id]);
    const checkProduct = product.filter(pr => {
        if (pr._id == id) {
            return ""
        } else {
            return pr.category == category
        }
    })
    // console.log(products.name)
    return (
        <div id="main-content" className="pt-32">
            <section className="container mx-auto  py-2">
                <div className="ml-6">Home &gt; Product Detail &gt; {products.name} </div>
                <div className="grid grid-cols-12 gap-10 py-10 bg-yellow-50 mt-3">
                    <div className="col-span-6   ">
                        <div>
                            <Link to="/productPage"><img style={{ height: "400px" }} className=" object-cover mx-20 transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 w-10/12" src={`http://localhost:4000/api/productList/image/${products._id}`} alt="" /></Link>
                        </div>
                    </div>
                    <div className="col-span-6 border-l-2 border-black">
                        <div className=" mx-10">
                            <h3 className="text-4xl text-black font-bold">{products.name}</h3>
                        </div>
                        <div>
                            <div className="mx-10 mt-5">
                                <p><span className="text-3xl pr-4 pl-4 bg-white  text-red-500 font-bold">
                                    ${products.price}</span></p>
                            </div>
                            <div className="mx-10">
                                <p className="my-4"><span className="text-sm font-bold">
                                    Description : </span></p><p> {products.description}</p>

                                <p><span className="text-sm font-bold my-4"> FREE : </span> <span className="mx-2 px-2 text-sm  font-medium text-center bg-gray-300">SHIP
                    </span>
                                </p>
                                <p>Quantity  :
                    <input className=" my-4 mx-2 w-10" type="number" name id min={1} max={100} defaultValue={1} />
                                </p>
                                <button data-id="${product.id}" id="addCard" className=" my-4 text-xl font-bold text-white bg-black py-2 pl-5 pr-5 hover:bg-gray-800 rounded-2xl border-2 border-orange-400 hover:border-green-300">Add to cart</button>
                                <button className="my-4 text-xl font-bold text-white py-2 pl-5 pr-5 bg-blue-400 rounded-2xl hover:bg-blue-600 border-2 border-orange-400 hover:border-green-300">
                                    Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto py-8 ">
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-9">
                        <p className="text-2xl text-red-600 font-bold">
                            Dscription</p>
                        <p>
                            {products.description}
                            {products.description}
                        </p>
                        <form className="mt-5">
                            <textarea id="content" cols={30} rows={5} placeholder="comment"
                                className="px-5 w-full border-solid border-2  border-black"
                                name="message" required defaultValue={""} />
                            <button className="p-2 bg-blue-200 rounded hover:bg-blue-500 pl-4 pr-4">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
            <section className="container mx-auto">
                <h2 className="text-3xl font-bold text-red-600 text-center">Sản Phẩm Liên Quan</h2>
                <div className="py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
                        {checkProduct.map((pr, index) => {
                            let url = `${API}/productList/image/${pr._id}`

                            return (
                                <div key={index} className="group mx-auto text-center border-0  overflow-hidden hover:bg-yellow-100 p-3  hover:shadow-2xl hover:text-black hover:no-underline border-b-2 hover:border-green-300 ">
                                    <div>
                                        <Link to={`/product/${pr._id}`}><img className="transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-300 lg:w-full h-64 w-56 object-cover" src={url} alt="" /></Link>
                                    </div><br />
                                    <Link to={`/product/${pr._id}`} className="text-xl font-medium">{pr.name}</Link>
                                    <p className="text-red-700 text-2xl">${pr.price}</p>
                                    <div className="transform duration-500 ease-in-out transform translate-y-32 group-hover:translate-y-0">
                                        <Link to={`/product/${pr._id}`}><button className="block w-full border border-blue-200 bg-blue-200 py-2 ">Show Prodcut</button></Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section>
                <div className="  sale-up  bg-auto xl:py-10 bg-bottom bg-center bg-fixed  mx-auto ">
                    <div className="container mx-auto ml-48">
                        <div className="lg:w-1/3  ">
                            <h2 className="text-3xl font-bold">End of Season Clearance</h2>
                            <h2 className="text-3xl font-bold">Sale upto 30%</h2>
                            <h2>Stock is limited. Order now to avoid</h2>
                            <h2>disappointment.</h2>
                            <button className="bg-white text-black my-20 p-4">SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DetailProduct
