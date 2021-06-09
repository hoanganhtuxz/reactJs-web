import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductApi from '../api/productAPI';
import { ParseURL } from '../utils'
import BlogApi from '../api/blogAPI'
const DetailBlog = () => {

    const id = ParseURL()
    const [blogs, setblog] = useState([]);
    const [product, setproduct] = useState([]);
    useEffect(() => {
        const list = async (id) => {
            try {
                let { data: products } = await ProductApi.getproductblog();
                let { data: blog } = await BlogApi.get(id);
                setblog(blog)
                setproduct(products.data)
            } catch (error) {
                console.log(error)
            }
        }
        list(id)
    })
    return (
        <div className="pt-32">
            <section className="container mx-auto"><div className="ml-6">Blog &gt; {blogs.title}</div>
                <div className=" grid grid-cols-12 gap-10 mt-3">
                    <div className="col-span-9 bg-green-50">

                        <div className="m-4 p-4">
                            <h3 className="text-3xl font-black mb-10">{blogs.title}</h3>
                            <p className="mb-5">{blogs.description}</p>
                            <div className="grid grid-flow-col grid-cols-3 gap-4">
                                <img className="col-span-1 object-cover w-full" style={{ height: "350px" }} src={`http://localhost:4000/api//blogList/image/${blogs._id}`} />
                                <img className="col-span-1 object-cover w-full" style={{ height: "350px" }} src={`http://localhost:4000/api//blogList/image/${blogs._id}`} />
                                <img className="col-span-1 object-cover w-full" style={{ height: "350px" }} src={`http://localhost:4000/api//blogList/image/${blogs._id}`} />



                            </div>

                            <p className="mt-5">{blogs.description}</p>
                            <p>{blogs.description}</p>
                            <p className="mb-5">{blogs.description}</p>
                            <form> <textarea id="content" cols={30} rows={5} placeholder="comment" className="px-5 w-full border-solid border-2  border-black" name="message" defaultValue={""} />
                                <button className="p-2 bg-blue-500 rounded hover:bg-blue-300">Submit</button>
                            </form>
                        </div>

                    </div>
                    <div className="col-span-3 p-4">
                        <h2 className="text-3xl font-medium">new product</h2>
                        <div className>
                            {product.map((pr, index) => {
                                return (
                                    <div className=" grid grid-cols-12 gap-2 py-4">
                                        <div className="col-span-6">
                                            <Link to={`product/${pr._id}`}><img className="h-20 w-full object-cover" src={`http://localhost:4000/api/productList/image/${pr._id}`} /></Link>
                                        </div>
                                        <div className="col-span-6 ">
                                            <h3>
                                                <span className="text-sm font-medium "> <span className="hover:text-red-600 text-blue-600"> {pr.name} </span><br /> $ {pr.price}
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                )
                            })}
                            <h2 className="text-3xl font-medium">new news</h2>
                            <div className="font-mono text-blue-600 ">
                                <a className="hover:text-red-600" href="#">new product Mangoes </a><br />
                                <a className="hover:text-red-600" href="#">new product Mangoes</a><br />
                                <a className="hover:text-red-600" href="#">new product Mangoes</a><br />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DetailBlog
