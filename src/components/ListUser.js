import React from 'react'
import { Link } from 'react-router-dom';
const ListUser = () => {
    window.scrollTo(0, 0);
    return (
        <div className="pt-8">
            <Link to="/signup" className="text-3xl text-blue-500 hover:text-red-400 ml-40">
                click me? đăng kí tài khoản
            </Link>
        </div>
    )
}

export default ListUser
