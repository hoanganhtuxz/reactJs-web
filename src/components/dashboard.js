import Sidebe from './Sidebe';
import { Link } from 'react-router-dom';
import CategoryAPI from '../api/categoryAPI';
import ContactAPI from '../api/contactPAI';
import ProductApi from '../api/productAPI';
import BlogApi from '../api/blogAPI';
import React, { useState, useEffect } from 'react';
const Dashboard = () => {
    const [product, setProducts] = useState('');
    const [category, setCategorys] = useState('');
    const [blog, setBlogs] = useState('');
    const [contact, setContact] = useState('');
    useEffect(() => {
        const listtodo = async () => {
            try {
                let { data: products } = await ProductApi.getAll();
                let { data: categorys } = await CategoryAPI.getAll();
                let { data: contacts } = await ContactAPI.getAll();
                let { data: blogs } = await BlogApi.getAll();
                setBlogs(blogs.data);
                setCategorys(categorys.data);
                setContact(contacts.data);
                setProducts(products.data);
            }
            catch (error) {
                console.log(error)
            }
        }
        listtodo()
    }, [])
    // console.log(category.length)

    return (
        <div className="pt-3">
            <div className=" grid grid-cols-5 gap-4">
                <Sidebe />
                <div class="col-span-4" id="list-products">
                    <div className="">
                        <div className="grid grid-cols-8">
                            <div className="col-span-2 shadow-2xl hover:shadow-lg rounded-lg hover:bg-green-500 text-center border-2 bg-green-400 w-9/12 mx-auto rounded-tl-full rounded-br-full">

                                <div className=" shadow-2xl hover:shadow-lg rounded-lg hover:bg-green-500 text-center border-2 bg-green-400 w-9/12 mx-auto rounded-tl-full rounded-br-full">
                                    <Link to="/admin/listCategory">
                                        <div className="pb-5 pt-5 ">
                                            <h3 className="font-medium">Danh mục</h3>
                                            <p className="text-5xl text-white">{category.length}</p>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                            <div className="col-span-2 shadow-2xl hover:shadow-lg rounded-lg hover:bg-red-500 text-center border-2 bg-red-400 w-9/12 mx-auto rounded-tl-full rounded-br-full">

                                <div className="shadow-2xl hover:shadow-lg rounded-lg hover:bg-red-500 text-center border-2 bg-red-400 w-9/12 mx-auto rounded-tl-full rounded-br-full">
                                    <Link to="/admin/listProduct">
                                        <div className="pb-5 pt-5">
                                            <h3 className="font-medium">Sản phẩm</h3>
                                            <p className="text-5xl text-white">{product.length}</p>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                            <div className="col-span-2 hover:shadow-lg rounded-lg shadow-2xl text-center hover:bg-blue-500 border-2 bg-blue-400 w-9/12 mx-auto rounded-tl-full rounded-br-full">

                                <div className=" hover:shadow-lg rounded-lg shadow-2xl text-center hover:bg-blue-500 border-2 bg-blue-400 w-9/12 mx-auto rounded-tl-full rounded-br-full">
                                    <Link to="/admin/listBlog">
                                        <div className="pb-5 pt-5">
                                            <h3 className="font-medium">Tin tức</h3>
                                            <p className="text-5xl text-white">{blog.length}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-span-2 hover:shadow-lg rounded-lg shadow-2xl text-center hover:bg-yellow-500 border-2 bg-yellow-400 w-9/12 mx-auto rounded-tl-full rounded-br-full">

                                <div className=" hover:shadow-lg rounded-lg shadow-2xl text-center hover:bg-yellow-500 border-2 bg-yellow-400 w-9/12 mx-auto rounded-tl-full rounded-br-full">
                                    <Link to="/admin/listContact">
                                        <div className="pb-5 pt-5">
                                            <h3 className="font-medium">Liên hệ</h3>
                                            <p className="text-5xl text-white">{contact.length}</p>

                                        </div>
                                    </Link>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Dashboard
