import React, { useState, useEffect } from 'react';
import ProductApi from '../api/productAPI';
import BlogApi from '../api/blogAPI';
import { Link } from 'react-router-dom';
import { API } from '../config'
const Blog = () => {
  window.scrollTo(0, 0);
  const [products, setproducts] = useState([]);
  const [blogs, setblog] = useState([]);

  useEffect(() => {
    const listtodo = async () => {
      try {

        let { data: product } = await ProductApi.getproductblog();
        let { data: blog } = await BlogApi.getAll();
        setproducts(product.data);
        setblog(blog.data);
      } catch (error) {
        console.log(error)

      }
    }
    listtodo()
  }, [])
  return (
    <div id="main-content" className="pt-32">
      <section className="container mx-auto"><div className="ml-6">Home &gt; Blog</div>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-9">

            {blogs.map((blog, index) => {
              let url = 'http://localhost:4000/api/blogList/image/' + blog._id;
              return (
                <div key={index} className="bg-yellow-50 p-4 m-4">
                  <Link to={`/blog/${blog._id}`}>
                    <h2 className="text-3xl font-medium">{blog.title}</h2>
                  </Link>
                  <h3 className="text-sm font-light">{blog.createdAt}</h3>
                  <div className=" grid grid-cols-12 gap-10">
                    <div className="col-span-6">
                      <Link to={`/blog/${blog._id}`}><img className="py-10 w-full object-cover" style={{ height: "400px" }} src={url} /></Link>
                    </div>
                    <div className="col-span-6 py-10">
                      <h3>
                        <span className="text-sm font-medium"> {blog.description}</span>
                      </h3>
                    </div>
                  </div>
                </div>
              )
            })}

          </div>
          <div className="col-span-3 p-4">
            <h2 className="text-3xl font-medium">new product</h2>
            <div className>
              {products.map((pr, index) => {
                let url = 'http://localhost:4000/api/productList/image/' + pr._id;
                return (
                  <div key={index} className=" grid grid-cols-12 gap-2 py-4">
                    <div className="col-span-6">
                      <Link to={`/product/${pr._id}`}><img className="object-cover h-16 w-full" src={url} alt="" /></Link>
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
                <Link className="hover:text-red-600" href="#">new product Mangoes </Link><br />
                <Link className="hover:text-red-600" href="#">new product Mangoes</Link><br />
                <Link className="hover:text-red-600" href="#">new product Mangoes</Link><br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
