import React from 'react';
import { NavLink } from 'react-router-dom';



const LayOutAdmin = (props) => {
  if (!localStorage.getItem('token')) {
    return (
      <div className="bg-white mx-auto">
        <h1 className="bottom-22 left-1/3 font-extrabold text-3xl text-blue-800 bg-white absolute">  Error 404. Not Found Page</h1>
        <img className="opacity-30 left-10 absolute w-28 mt-16" src="https://cdn.pixabay.com/photo/2012/04/01/19/42/gears-24272_640.png" />
        <img className=" opacity-30 absolute right-11 w-32 mt-16" src="https://cdn.pixabay.com/photo/2012/04/01/19/42/gears-24272_640.png" />
        <img className="mx-auto opacity-30 w-2/12 top-1/3 mt-16" src="https://cdn.pixabay.com/photo/2012/04/01/19/42/gears-24272_640.png" />


      </div >
    )
  } else {
    const { user } = JSON.parse(localStorage.getItem('token'))
    if (user.role !== 1) {
      return (
        <div className="bg-white mx-auto">
          <h1 className="bottom-22 left-1/3 font-extrabold text-3xl text-blue-800 bg-white absolute">  Error 404. Not Found Page</h1>
          <img className="opacity-30 left-10 absolute w-28 mt-16" src="https://cdn.pixabay.com/photo/2012/04/01/19/42/gears-24272_640.png" />
          <img className=" opacity-30 absolute right-11 w-32 mt-16" src="https://cdn.pixabay.com/photo/2012/04/01/19/42/gears-24272_640.png" />
          <img className="mx-auto opacity-30 w-2/12 top-1/3 mt-16" src="https://cdn.pixabay.com/photo/2012/04/01/19/42/gears-24272_640.png" />
        </div >
      )

    } else {
      return (
        <>
          <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">

                    <NavLink to="/" className="hover:bg-green-400 bg-green-500 text-white px-3 py-2 rounded-md text-sm font-medium" >Clothes Shop</NavLink>

                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">

                      <NavLink to="/admin/dashboard" className="hover:bg-blue-400 bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="/admin/dashboard">Dashboard</NavLink>

                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                  <div className="ml-3 relative">
                    <div>
                      <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full object-cover" src="https://static1.ohman.vn/YanNews/2167221/201903/cap-doi-chia-tay-vi-bieu-tuong-mat-cuoi-khien-cdm-ngac-nhien-20190329-112635.jpg" alt="" />
                      </button>
                    </div>


                  </div>
                </div>
              </div>
            </div>

          </nav>
          {props.children}

        </>
      )
    }

  }

}

export default LayOutAdmin
