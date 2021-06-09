import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signIn, authenticate } from '../auth';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import UserApi from '../api/userAPI';
const Signin = (props) => {
    window.scrollTo(0, 0);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");
    let history = useHistory();
    const [loading, setLoading] = useState(false)
    // const onSubmit = async (dataUser) => {
    //     setLoading(true)
    //     try {
    //         const response = UserApi.signIn(dataUser);
    //         response.then(({ data: data }) => {
    //             authenticate(data, () => {
    //                 props.sigIn(localStorage.getItem('token'))
    //                 swal("Đăng nhập thành công", "", "success");
    //                 history.push('/')
    //             })
    //         })

    //     } catch (error) {
    //         const { data } = error.response;
    //         setError(data.error)
    //         setLoading(false)
    //     }
    // }
    const onSubmit = async (data) => {
        setLoading(true)
        signIn(data)
            .then(dataUser => {
                if (dataUser.error) {
                    setError(dataUser.error)
                    setLoading(false)
                } else {
                    //   console.log(dataUser)
                    authenticate(dataUser, () => {
                        props.sigIn(localStorage.getItem('token'))
                        swal("Đăng nhập thành công!", "", "success");

                    })
                    let check = JSON.parse(localStorage.getItem('token')).user;
                    if (check.role != 1) {
                        history.push('/')
                    } else {
                        history.push('/admin/dashboard');
                    }


                }

            })
    }
    const showError = () => {
        return (
            <>
                <h2 className="text-red-500 text-base" style={{ display: error ? "block" : "none" }}>{error} <span className="text-red-500 font-light">❌</span>

                </h2>
            </>
        )
    }
    const showLoading = () => {
        return loading &&
            <h2 className="text-green-500 text-base">
                ...Loading
                </h2>
    }
    const signInForm = () => {
        return (
            <div id="main-content" className="pt-32">
                <section className="container mx-auto ">
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-gradient-to-r from-yellow-100 via-red-200 to-pink-300 ">
                        <div className="  text-center p-40">
                            <svg className=" mx-auto w-1/12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <h2 className="text-3xl font-medium">Sign in to your account</h2>
                            {showLoading()}
                            {showError()}
                            <div className="mt-8 space-y-6">
                                <input type="hidden" name="remember" defaultValue="true" />
                                <div className="rounded-md shadow-sm -space-y-px">
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
                                    <button type="submit" id="btnLogin" name="login" className="group relative w-64  py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">
                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                            {/* Heroicon name: lock-closed */}
                                            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                    Sign in
                    </button>
                                </div>
                                <div className>
                                    {/*none */}
                                    <div className="text-sm">
                                        <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            sign up for an account
                    </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        )
    }
    return (
        <>
            {
                signInForm()
            }
        </>
    )
}

export default Signin
