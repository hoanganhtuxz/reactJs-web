import React from 'react'

const NotFound = () => {
    window.scrollTo(0, 0);
    return (
        <div className="pt-32">
            <div className="bg-white mx-auto">
                <h1 className="bottom-22 left-1/3 font-extrabold text-3xl text-blue-800 bg-white absolute">  Error 404. Not Found Page</h1>
                <img className="opacity-30 left-10 absolute w-28 mt-16" src="https://cdn.pixabay.com/photo/2012/04/01/19/42/gears-24272_640.png" />
                <img className=" opacity-30 absolute right-11 w-32 mt-16" src="https://cdn.pixabay.com/photo/2012/04/01/19/42/gears-24272_640.png" />
                <img className="mx-auto opacity-30 w-2/12 top-1/3 mt-16" src="https://cdn.pixabay.com/photo/2012/04/01/19/42/gears-24272_640.png" />
            </div >
        </div>
    )
}

export default NotFound
