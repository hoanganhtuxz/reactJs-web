import React, { useState, useEffect } from 'react';
import Sidebe from '../components/Sidebe';
import { useForm } from 'react-hook-form';
import swal from "sweetalert";
import { useHistory } from 'react-router-dom';
import { ParseURLUpdate } from '../utils';
import { API } from '../config';
import BlogApi from '../api/blogAPI';
const BlogUpdate = () => {
    let history = useHistory();
    const id = ParseURLUpdate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [blogup, setblogup] = useState([]);
    useEffect(() => {
        const list = async () => {
            try {
                let { data: blog } = await BlogApi.get(id);
                setblogup(blog)
            } catch (error) {
                console.log(error)
            }
        }
        list()
    }, [id])

    const onSubmit = (data, e) => {
        let newData = {}
        let newblog = new FormData();
        if (data.photo[0] == undefined) {
            newData = {
                title: (data.title == "" ? blogup.title : data.title),
                description: (data.description == "" ? blogup.description : data.description),

            }
        } else {
            newData = {
                title: (data.title == "" ? blogup.title : data.title),
                description: (data.description == "" ? blogup.description : data.description),
                photo: (data.photo[0] == undefined ? blogup.photo : data.photo[0]),
            }
            newblog.append("photo", newData.photo)
        }
        console.log("data click", data)
        console.log("newData", newData)

        newblog.append("title", newData.title)
        newblog.append("description", newData.description)
        BlogApi.update(id, newblog)
            .then(() => {
                history.push('/admin/listBlog');
                swal("", "Sửa thành công!", "success");
                e.target.reset();
                setError('');
                setSuccess(true)
            })
            .catch(error => {
                setError(error.response.data.error)
                setSuccess(false)
            })
    }
    const showError = () => {
        return (
            <>
                <h2 className=" text-red-500" style={{ display: error ? "block" : "none" }}>{error}<span className="text-red-500 font-light">❌</span></h2>
            </>
        )
    }
    const showSucces = () => {
        return (
            <>
                <h2 className=" text-green-500" style={{ display: success ? "block" : "none" }}>Thêm thành công<span className=" text-green-500 font-light">✅</span></h2>
            </>
        )

    }
    const url = `${API}/blogList/image/${blogup._id}`
    return (
        <div className="pt-3">
            <div className=" grid grid-cols-5 gap-4">
                <Sidebe />
                <div className="col-span-4 " id="show">
                    <div className="bg-green-200 p-3">
                        <h4 className="font-black mx-32 p-1">Add blog</h4>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto  pb-5 bg-blue-100  border-2 mt-3">
                        <div className="pt-3 ml-44" >
                            {showSucces()}
                            {showError()}
                        </div>
                        <div className="grid grid-cols-7">
                            <span className="mt-4 ml-16 ">title <span id="check-name" className="text-red-600 ml-2 font-extrabold">*</span></span>
                            <input type="text"
                                className="col-span-6 border-2 px-5 w-4/5 p-1 mt-4 "
                                id="title" placeholder="title"
                                defaultValue={blogup.title}
                                {...register('title')}
                            />
                        </div>

                        <div className="grid grid-cols-7">
                            <span className="mt-4 ml-16 ">image<span id="check-name" className="text-red-600 ml-2 font-extrabold">*</span></span>
                            <input type="file"
                                className="col-span-2  p-1 mt-2"
                                id="photo"
                                {...register('photo')}
                            />
                            <img className="h-52 w-5/6" src={url} />
                        </div>
                        <div className="mt-1 grid grid-cols-7">
                            <span className="mt-4 ml-16 " id="check-dp">Description <span id="check-name" className="text-red-600 ml-2 font-extrabold">*</span></span>
                            <textarea type="text"
                                name="blog-description"
                                className=" col-span-6 border-2 px-5 w-4/5 p-1 h-44 mt-4 "
                                id="description"
                                placeholder="description" defaultValue={blogup.description}
                                {...register('description')}
                            />
                        </div>
                        <div className="ml-16 mt-3">
                            <button type="submit" className="p-1 rounded bg-green-500 hover:bg-green-400 ml-28 pl-4 pr-4 " >Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}
export default BlogUpdate
