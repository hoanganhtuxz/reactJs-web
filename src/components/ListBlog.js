import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebe from './Sidebe';
import BlogApi from '../api/blogAPI';
import swal from 'sweetalert';
import { API } from '../config'

const ListBlog = () => {
  window.scrollTo(0, 0);
  const [blogs, setblog] = useState([]);
  useEffect(() => {
    const listtodo = async () => {
      try {
        let { data: blog } = await BlogApi.getAll();
        setblog(blog.data);
      }
      catch (error) {
        console.log(error)
      }
    }
    listtodo()
  }, [])
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
            await BlogApi.remove(id)
            let newBlog = blogs.filter(item => item._id !== id)
            setblog(newBlog)
            swal("bạn đã xóa thành công!", {
              icon: "success",
            });
          }
        });
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="pt-3">
      <div className=" grid grid-cols-5 gap-4" id="list-blog">
        <Sidebe />
        <div className="col-span-4">
          <div className="bg-green-200 p-4">
            <Link className="ml-16 bg-blue-300 p-2 pl-3 pr-3 rounded hover:bg-blue-500 hover:text-blue-100" to="/admin/addBlog">Add New blog</Link>
          </div>

          <table className=" mx-auto border-l-2 border-r-2 mt-3">
            <thead>
              <tr className="border-b-2">
                <th className="border-2 pr-2 pl-2 bg-blue-300">#</th>
                <th className="pl-20 pr-20 border-2 bg-blue-200">Title</th>
                <th className="pl-20 pr-20 border-2 bg-blue-300">Image</th>
                <th className="pl-20 pr-20 border-2 bg-blue-200">description</th>
                <th className="pl-20 pr-20 border-2 bg-blue-300">DateTime</th>
                <th className="pl-20 pr-20 border-2 bg-blue-200">Action</th>
              </tr>
            </thead>
            <tbody id="show-content">
              {
                blogs.map((blog, index) => {
                  let url = `${API}/blogList/image/${blog._id}`
                  return (
                    <tr key={index} className="border-b-2">
                      <td className="border-r-2 text-center">{index + 1}</td>
                      <td className="text-center">{blog.title}</td>
                      <td className="h-40 w-40"><img className="w-64 h-32 object-cover" src={url} alt="" /></td>
                      <td className="text-center ">{blog.description}</td>
                      <td className="text-center">{blog.createdAt}</td>
                      <td className="text-center">
                        <Link to={`/admin/blogUpdate/${blog._id}`} className="p-2 bg-blue-300 hover:bg-blue-400 hover:text-white rounded-lg mr-2">update</Link>
                        <button onClick={() => onRemoveSubmit(blog._id)} className="btn p-2  bg-red-300 hover:bg-red-500 hover:text-white  rounded-lg mr-2" data-id="${blogs.id}">delete</button>
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

export default ListBlog
