import React, { useState, useEffect } from 'react';
import ProductApi from '../api/productAPI';
import Sidebe from './Sidebe';
import { Link } from 'react-router-dom'
import swal from "sweetalert";
import { API } from '../config'


const Listproduct = () => {
  window.scrollTo(0, 0);
  // window.location.reload()// :) phương pháp tạm thời
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const listtodo = async () => {
      try {
        let { data: product } = await ProductApi.getAll();
        setproducts(product.data);
      } catch (error) {
        console.log(error)

      }
    }
    listtodo()
  }, []);
  const onRemoveSubmit = async (id) => {
    try {

      swal({
        title: "bạn có chắc chắn muốn xóa?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        buttons: ["cancel", "delete"],
      })
        .then(async (willDelete) => {
          if (willDelete) {
            await ProductApi.remove(id)
            let newProducts = products.filter(item => item._id !== id)
            setproducts(newProducts)
            swal("bạn đã xóa thành công!", {
              icon: "success",
            });
          }


        });
    } catch (error) {
      console.log(error)

    }
  }
  const listPr = () => {
    return (
      <div id="main-content" className="pt-3">
        <div className=" grid grid-cols-5 gap-4">
          <Sidebe />
          <div class="col-span-4" id="list-products">
            <div className="bg-green-200 p-4">
              <Link className="ml-16 bg-blue-300 p-2 pl-3 pr-3 rounded hover:bg-blue-500 hover:text-blue-100" to="/admin/addProduct">Add New Poruct</Link>
            </div>

            <table className="mx-auto border-l-2 border-r-2 mt-3">
              <thead>
                <tr className="border-b-2">
                  <th className="border-2 pr-2 pl-2 bg-blue-300">#</th>
                  <th className="pl-20 pr-20 border-2 bg-blue-200">Name</th>
                  <th className="pl-20 pr-20 border-2 bg-blue-300">Image</th>
                  <th className="pl-20 pr-20 border-2 bg-blue-200">Price</th>
                  <th className="pl-20 pr-20 border-2 bg-blue-300">Description</th>
                  <th className="pl-20 pr-20 border-2 bg-blue-200">Action</th>
                </tr>
              </thead>
              <tbody id="show-content">
                {
                  products.map((pr, index) => {
                    let url = `${API}/productList/image/${pr._id}`
                    return (
                      <tr key={index} className="border-b-2">
                        <td className="border-r-2 text-center">{index + 1}</td>
                        <td className="text-center">{pr.name}</td>
                        <td className="h-40 w-40"><img className="w-64 h-32 object-cover" src={url} alt="" /></td>
                        <td className="text-center text-red-600">$ {pr.price}</td>
                        <td className="text-center">{pr.description}</td>
                        <td className="text-center">
                          <Link to={`/admin/productUpdate/${pr._id}`} className="p-2 bg-blue-300 hover:bg-blue-400 hover:text-white rounded-lg mr-2">update</Link>
                          <button onClick={() => onRemoveSubmit(pr._id)} className="btn p-2  bg-red-300 hover:bg-red-500 hover:text-white  rounded-lg mr-2" >delete</button>
                        </td>
                      </tr>
                    )
                  })
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      {listPr()}
    </>
  )
}

export default Listproduct