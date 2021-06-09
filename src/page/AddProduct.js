import React, { useState, useEffect } from 'react';
import CategoryAPI from '../api/categoryAPI';
import Sidebe from '../components/Sidebe';
import { useForm } from 'react-hook-form';
import swal from "sweetalert";
import { useHistory } from 'react-router-dom';
import ProductApi from '../api/productAPI';
const AddProduct = () => {
  window.scrollTo(0, 0);
  let history = useHistory();

  const [categorys, setcategory] = useState([]);
  useEffect(() => {
    const listtodo = async () => {
      try {
        let { data: category } = await CategoryAPI.getAll();
        setcategory(category.data)
      } catch (error) {
        console.log(error)
      }
    }
    listtodo()
  }, []);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false)
  const onSubmit = (data, e) => {
    console.log('data', data)
    let product = new FormData();
    product.append("name", data.name)
    product.append("price", data.price)
    product.append("category", data.category)
    product.append("photo", data.photo[0])
    product.append("description", data.description)
    product.append("shipping", true);
    ProductApi.add(product)
      .then(() => {
        swal({
          title: "Bạn có muốn thêm nữa không?",
          icon: "success",
          buttons: true,
          dangerMode: true,
        })
          .then((willDelete) => {
            if (!willDelete) {
              history.push('/admin/listProduct')
            }
          })
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
        <h2 className="col-span-6  px-5 w-4/5 p-1 ml-40 text-red-500" style={{ display: error ? "block" : "none" }}>{error}<span className=" text-red-500 font-light">❌</span></h2>
      </>
    )
  }
  const showSucces = () => {
    return (
      <>
        <h2 className="col-span-6 px-5 w-4/5 p-1 ml-40 text-green-500" style={{ display: success ? "block" : "none" }}>Thêm thành công<span className="text-green-500 font-light">✅</span></h2>
      </>
    )

  }
  const addPr = () => {
    return (
      <div className="pt-3">
        <div className=" grid grid-cols-5 gap-4">
          <Sidebe />
          <div className="col-span-4 " id="show">
            <div className="bg-green-200 p-3">
              <h4 className="font-black mx-32 p-1">Add product</h4>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} id="form-add" className="mx-auto  pb-5 bg-blue-100  border-2 mt-3">
              <div className="grid grid-cols-7">
                {showError()}
                {showSucces()}

              </div>
              <div className="grid grid-cols-7">
                <span className="mt-4 ml-16 ">Name  <span id="check-img" className="text-red-600 ml-2 font-extrabold">*</span></span>
                <input type="text"
                  className="col-span-6 border-2 px-5 w-4/5 p-1 mt-4 "
                  id="name"
                  name="name"
                  placeholder="product name"
                  {...register('name')}
                />
              </div>
              <div className="grid grid-cols-7">
                <span className="mt-4 ml-16 ">Price  <span id="check-img" className="text-red-600 ml-2 font-extrabold">*</span></span>
                <input type="text"
                  className="col-span-6 border-2 px-5 w-4/5 p-1 mt-2 "
                  id="price"
                  name="price"
                  placeholder="price"
                  {...register('price')}
                />
              </div>
              <div className="grid grid-cols-7">
                <span className="mt-4 ml-16 ">Images <span id="check-img" className="text-red-600 ml-2 font-extrabold">*</span></span>
                <input type="file"
                  className="col-span-2 border-2  p-1 mt-2"
                  id="photo"
                  name="photo"
                  {...register('photo')}
                />
              </div>
              <div className="grid grid-cols-7  mt-2">
                <span className=" ml-16 ">Category</span>
                <select className="col-span-1 p-1 border-2"
                  id="category"
                  {...register('category')}>

                  <option value={0} >Chọn danh mục</option>
                  {categorys.map((cate, index) => {
                    return (
                      <option key={index} value={cate._id}>{cate.name}</option>
                    )
                  })}
                </select>
              </div>
              <div className="mt-1 grid grid-cols-7">
                <span className="mt-4 ml-16 " id="check-dp">Description  <span className="text-red-600 ml-2 font-extrabold">*</span></span>
                <textarea
                  name="product-description"

                  className="col-span-6 border-2 px-5 w-4/5 p-1 mt-4"
                  id="description" placeholder="description"
                  defaultValue={""}
                  name="description"
                  {...register('description')}
                />
              </div>
              <div className="ml-24 mt-3">
                <button type="submit" className="p-1 bg-green-400 hover:bg-green-300 rounded ml-20 pl-4 pr-4  ">
                  Add
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
      {addPr()}
    </>
  )
}

export default AddProduct
