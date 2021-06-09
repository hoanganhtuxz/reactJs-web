import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signUp } from '../auth'
const Signup = () => {
    window.scrollTo(0, 0);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false)

    const onSubmit = (data, e) => {

        signUp(data)
            .then(dataUser => {
                if (dataUser.error) {
                    setError(dataUser.error)
                    setSuccess(false)
                } else {
                    e.target.reset();
                    setError("");
                    setSuccess(true)
                }

            })
    }
    const showError = () => {
        return (
            <>
                <h2 className="text-red-500 text-base" style={{ display: error ? "block" : "none" }}>{error} <span className=" text-red-500 font-light">❌</span>

                </h2>
            </>
        )
    }
    const showSucces = () => {
        return (
            <>
                <h2 className="text-green-500 text-base" style={{ display: success ? "block" : "none" }}>
                    Bạn đã đăng kí thành công <span className=" text-green-500 font-light">✅</span> <span><Link className="text-blue-500" style={{ textDecoration: "underline" }} to="/signin">Click Login</Link></span>
                </h2>

            </>
        )

    }
    const signUpForm = () => {
        return (
            <div id="main-content" className="pt-32">
                <section className="container mx-auto ">
                    <div className="bg-gradient-to-r from-yellow-100 via-red-200 to-pink-300 ">
                        <div className="  text-center p-40">
                            <svg className="mx-auto w-1/12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                            <h2 className="text-3xl font-medium">Register your account </h2>
                            {showError()}
                            {showSucces()}
                            <div className="mt-8 space-y-6">
                                <input type="hidden" name="remember" defaultValue="true" />
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="rounded-md shadow-sm -space-y-px">
                                        <div className>
                                            <label htmlFor="name" className="sr-only">name</label>
                                            <input id="name"
                                                name="name"
                                                type="text"
                                                autoComplete="name"
                                                className="appearance-none rounded-none relative w-64 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                placeholder="name"
                                                {...register('name')}
                                            />
                                        </div>
                                        <div className>
                                            <label htmlFor="email-address" className="sr-only">Email</label>
                                            <input id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                className="appearance-none rounded-none relative w-64 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                placeholder="Email"
                                                {...register('email')}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="sr-only">Password</label>
                                            <input id="password"
                                                name="password"
                                                type="password"
                                                autoComplete="current-password"
                                                className="appearance-none rounded-none relative  w-64 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                placeholder="Password"
                                                {...register('password')}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <button type="submit" id="btnRegister" name="login" className="group relative w-64  py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">
                                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">

                                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                        Registation
                        </button>
                                    </div>
                                </form>
                                <div className>
                                    <div className="text-sm">
                                        <Link to="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Login
                    </Link>
                                    </div>
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
            {signUpForm()}
        </>

    )
}

export default Signup
