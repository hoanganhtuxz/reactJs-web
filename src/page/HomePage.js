import React, { useState, useEffect } from 'react';
import ProductApi from '../api/productAPI';
import BlogApi from '../api/blogAPI';
import CategoryAPI from '../api/categoryAPI';
import { Link } from 'react-router-dom';
import { API } from '../config'
const HomePage = () => {
  window.scrollTo(0, 0);
  const [products, setproducts] = useState([]);
  const [blogs, setblog] = useState([]);
  const [categorys, setcategory] = useState([]);
  useEffect(() => {
    const listtodo = async () => {
      try {
        let { data: category } = await CategoryAPI.getCate();
        let { data: product } = await ProductApi.ptHome();
        let { data: blog } = await BlogApi.blogHome();
        setproducts(product.data);
        setblog(blog.data);
        setcategory(category.data)
      } catch (error) {
        console.log(error)

      }
    }
    listtodo()
  }, [])
  // console.log(categorys)
  return (
    <div id="main-content" className="pt-32">
      <section className="mx-auto">
        <div className="relative">
          <img name="image" src="banner1.jpg" alt="" className="object-cover" width="100%" style={{ height: '550px' }} />
          <div className="absolute inset-0 lg:m-20 lg:py-8 m-8 ml-48">
            <h2 className=" font-bold text-red-700 lg:text-xl ">Clothes Shop</h2>
            <h3 className="lg:py-4 lg:text-4xl font-bold hidden lg:block ">Sale - 70%<br /> 29/01/2021</h3>
            <p className="py-4 hidden lg:block">A specialist label creating luxury essentials.<br /> Ethically crafted with an unwavering commitment to exceptional quality.</p>
            <button className="my-5 lg:py-4 bg-black text-white lg:px-10  px-3">SHOP NOW</button>
          </div>
        </div>

      </section>
      <section className="container mx-auto">
        <div>
          <div className="text-center p-2 lg:p-10 lg:text-2xl grid grid-cols-4 gap-4">
            {categorys.map((cate, index) => {
              return (
                <Link to={`/catePage/${cate._id}`} key={index} className=" content-center font-black hover:bg-yellow-200 hover:border-black">{cate.name}
                </Link>
              )
            })

            }


          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <h2 className="text-3xl font-bold text-red-600 text-center">Sản Phẩm</h2>
        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {products.map((pr, index) => {
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
      <section className="container mx-auto">
        <div className>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-600">Instagram</h2>
            <p className="p-5">Bài viết hướng dẫn bạn cách lưu giữ mọi bức ảnh trên Instagram mà bạn yêu thích về điện thoại có Video hướng dẫn chi tiết. Hãy click vào xem ngay nhé!</p>
          </div>
          <div className="  gap-20 lg:flex flex-row py-10 md:grid md:grid-cols-2">
            <img className="transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 w-64  mx-auto py-10 object-cover" src="https://media.phunutoday.vn/files/content/2021/04/09/xu-huong-mua-he-1-1209.jpg" alt="" />
            <img className="transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 w-64  mx-auto py-10 object-cover" src="https://cf.shopee.ph/file/5ace989231c073487a55e724c74f7740" alt="" />
            <img className="transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 w-64  mx-auto py-10 object-cover" src="https://i.pinimg.com/736x/68/c9/cb/68c9cbb38c96ba519056a7d5c7b15c67.jpg" alt="" />
            <img className="transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 w-64  mx-auto py-10 object-cover" src="https://www.elleman.vn/wp-content/uploads/2018/07/20/bi-quyet-phoi-do-nam-elleman-1.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className="bg-yellow-50 py-8">
        <div className="text-center py-10">
          <h2 className="text-xl text-red-600 font-medium">Phần Tin Tức</h2>
          <h3 className="text-4xl font-bold"> Được cập nhật gần đây</h3>
        </div>
        <div className="container mx-auto">
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
            {blogs.map((blog, index) => {
              let url = `${API}/blogList/image/${blog._id}`
              return (
                <div className="mx-auto" key={index}>
                  <Link to={`/blog/${blog._id}`}>
                  </Link><div><Link to={`/blog/${blog._id}`}>
                    <div className>
                      <img className="mx-auto border-0 object-cover transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-300 w-64 lg:w-11/12 lg:h-64  " src={url} alt="" />
                    </div>
                  </Link><div className="p-4"><Link to={`/blog/${blog._id}`}>
                  </Link><Link to={`/blog/${blog._id}`}>{blog.createdAt}</Link><br />
                      <Link className="font-bold text-xl " to={`/blog/${blog._id}`}>{blog.title}</Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}

export default HomePage;
