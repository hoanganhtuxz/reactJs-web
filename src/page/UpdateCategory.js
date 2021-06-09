import Sidebe from '../components/Sidebe'
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
// import { updateCate } from '../auth';
import swal from "sweetalert";
import { useHistory } from 'react-router-dom';
import { ParseURLUpdate } from '../utils';
import CategoryAPI from '../api/categoryAPI';
import { API } from '../config';
import { Link } from 'react-router-dom'
const UpdateCategory = () => {

    const id = ParseURLUpdate();
    let history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [cateName, setcatename] = useState([])
    useEffect(() => {
        const list = async () => {
            try {
                const { data: category } = await CategoryAPI.get(id);
                setcatename(category)
            } catch (error) {
                console.log(error)
            }
        }
        list()
    }, [id]);
    const onSubmit = (data, e) => {
        let newData = data.name == "" ? cateName : data;
        console.log(newData)
        let newCate = new FormData();
        newCate.append("name", newData.name)
        CategoryAPI.update(id, newCate)
            .then(() => {
                history.push('/admin/listCategory');
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
                <h2 className="ml-44 text-red-500" style={{ display: error ? "block" : "none" }}>{error}<span className=" text-red-500 font-light">❌</span></h2>
            </>
        )
    }
    const showSucces = () => {
        return (
            <>
                <h2 className="ml-44 text-green-500" style={{ display: success ? "block" : "none" }}>Sửa thành công<span className=" text-green-500 font-light">✅</span>
                    <p><Link className="text-blue-500 text-decoration: underline hover:text-red-400" to="/admin/listCategory" >xem danh mục của bạn</Link></p>
                </h2>
            </>
        )

    }
    const Update = () => {
        return (

            <div id="main-content" className="pt-3">
                <div className=" grid grid-cols-5 gap-4">
                    <Sidebe />
                    <div className="col-span-4 " id="show">
                        <div className="bg-green-200 p-3">
                            <h4 className="font-black mx-32 p-1">Add category</h4>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto  pb-5 bg-blue-100  border-2 mt-3">
                            <div className="grid grid-cols-7">
                                <span className="mt-5 ml-16 ">Name<span id="check-name" className="text-red-600 ml-2 font-extrabold">*</span></span>
                                <input type="text"
                                    className=" col-span-6 border-2 px-5 w-4/5 p-1 mt-4 "
                                    id="name"
                                    name="name"

                                    placeholder="category name"
                                    defaultValue={cateName.name}
                                    {...register('name')}
                                />

                            </div>
                            {showError()}
                            {showSucces()}
                            <div className="ml-16 mt-3">
                                <button type="submit" className="mt-11 bg-green-400 p-2 pl-4 pr-4 rounded ml-28 hover:bg-green-500" >
                                    <span>Update</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
    return (
        <>
            {Update()}
        </>

    )
}

export default UpdateCategory
