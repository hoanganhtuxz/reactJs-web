import React, { useState, useEffect } from 'react';
import Sidebe from './Sidebe';
import CategoryAPI from '../api/categoryAPI';
import { Link } from 'react-router-dom';
import swal from 'sweetalert'
const ListCategory = () => {

  const [categorys, setcategory] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    const listtodo = async () => {
      try {
        let { data: category } = await CategoryAPI.getAll();
        setcategory(category.data);
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
            await CategoryAPI.remove(id)
            let newCategorys = categorys.filter(item => item._id !== id)
            setcategory(newCategorys)
            swal("bạn đã xóa thành công!", {
              icon: "success",
            });
          }


        });
    } catch (error) {
      console.log(error)

    }

  }
  const listCate = () => {
    return (
      <div className="pt-3">
        <div className=" grid grid-cols-5 gap-4" id="list-category">
          <Sidebe />
          <div className="col-span-4">
            <div className="bg-green-200 p-4">
              <Link className="ml-16 bg-blue-300 p-2 pl-3 pr-3 rounded hover:bg-blue-500 hover:text-blue-100" to="/admin/addCategory">Add New Category</Link>
            </div>

            <table className=" border-l-2 border-r-2 mt-3">
              <thead>
                <tr className="border-b-2">
                  <th className="border-2 pr-2 pl-2 bg-blue-300">#</th>
                  <th className="pl-20 pr-20 border-2 bg-blue-300">Name</th>
                  <th className="pl-20 pr-20 border-2 bg-blue-200">Action</th>
                </tr>
              </thead>
              <tbody id="show-content">
                {categorys.map((cate, index) => {
                  return (
                    <tr className="border-b-2">
                      <td className="border-r-2 text-center">{index + 1}</td>
                      <td className="text-center">{cate.name}</td>
                      <td className="text-center">
                        <Link to={`/admin/cateUpdate/${cate._id}`} className="p-2 bg-blue-300 hover:bg-blue-400 hover:text-white rounded-lg mr-2">update</Link>
                        <button onClick={() => onRemoveSubmit(cate._id)} className="btn p-2 bg-red-300 hover:bg-red-500 hover:text-white  rounded-lg mr-2" >delee</button>
                      </td>
                    </tr>
                  )
                })}


              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      {listCate()}
    </>
  )
}

export default ListCategory
