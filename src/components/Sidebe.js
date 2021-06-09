import React from 'react'
import { Link } from 'react-router-dom'
const Sidebe = () => {
  return (
    <div id="main-content">
      <div className=" mx-auto">
        <ul className="border-r-2">
          <li className=" py-5 font-medium text-white text-2xl bg-blue-400 pl-20">
            Dashboard
            </li>
          <Link to="/admin/listCategory">
            <li className="pl-20 py-5 font-medium border-b border-gray-300 hover:bg-gray-200">
              CATEGORY
              </li>
          </Link>
          <Link to="/admin/listProduct">
            <li className="pl-20 py-5 font-medium border-b border-gray-300 hover:bg-gray-200">
              PRODUCT
              </li>
          </Link>
          <Link to="/admin/listBlog">
            <li className="pl-20 py-5 font-medium border-b border-gray-300 hover:bg-gray-200">
              BLOG
              </li>
          </Link>
          <Link to="/admin/listContact">
            <li className="pl-20 py-5 font-medium border-b border-gray-300 hover:bg-gray-200">
              CONTACT
              </li>
          </Link>
          <Link to="/admin/listUser">
            <li className="pl-20 py-5 font-medium border-b border-gray-300 hover:bg-gray-200">
              USER
              </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Sidebe
