import ProductApi from '../api/productAPI';
import CategoryAPI from '../api/categoryAPI';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../config'

const ProductPage = () => {
  window.scrollTo(0, 0);

  const [products, setproducts] = useState([]);
  const [categorys, setcategory] = useState([]);
  useEffect(() => {
    const listtodo = async () => {
      try {
        let { data: category } = await CategoryAPI.getAll();
        let { data: product } = await ProductApi.getAll();
        setproducts(product.data);
        setcategory(category.data);
      } catch (error) {
        console.log(error)

      }
    }
    listtodo()
  }, []);
  const listPage = () => {
    return (
      <div id="main-content" className="pt-32">
        <section className="container mx-auto">
          <div className="ml-6">Home &gt; Products</div>
          <div className="md:grid grid-cols-7 gap-20 py-2 ">
            <div className="col-span-2 mx-auto">
              <div className=" col-span-3  lg:xl xl:text-2xl lg:py-4 ">
                <ul className>
                  <li> <Link className=" block font-bold border-b-2 border-gray-400 p-2 bg-black text-white pl-8 pr-8" to="/productPage">Category</Link></li>
                  {categorys.map((cate, index) => {

                    return (
                      <li key={index}> <Link className="block font-medium border-b-2 border-gray-400 p-2 bg-gray-200 hover:text-white hover:bg-yellow-500 transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 pl-8 pr-8 " to={`/catePage/${cate._id}`}>
                        {cate.name} </Link></li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="md:col-span-5 ">
              <div className="mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto ">
                  {products.map((pr, index) => {
                    let url = `${API}/productList/image/${pr._id}`
                    return (
                      <div key={index} className=" text-center mx-auto hover:text-black hover:no-underline  hover:bg-yellow-100 hover:shadow-2xl border-b-2  hover:border-green-300 pb-6">
                        <Link to={`/product/${pr._id}`} className>
                          <img className="transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300  mx-auto w-10/12 py-8 h-64 w-64 object-cover " src={url} alt="${product.name}" />
                        </Link><Link to={`/product/${pr._id}`} className="text-xl font-medium hover:text-blue-500 hover:font-black">{pr.name}</Link>
                        <p className="text-red-500">$ {pr.price}</p>
                      </div>
                    )
                  })}
                </div>
                <div className="text-center">
                  <button id="btn-xemthem" className="transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 hover:text-blue-700 hover:font-black text-xl font-bold border-b-2 border-black ">Xem
                  thêm</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
  return (
    <>
      {listPage()}
    </>
  )
}

export default ProductPage
