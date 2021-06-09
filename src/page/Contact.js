import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { addContact } from '../auth';
import swal from "sweetalert";
import { useHistory } from 'react-router-dom';
import Logo from '../Clothes.png';
const Contact = () => {
  window.scrollTo(0, 0);
  let history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false)
  const onSubmit = (data, e) => {
    // thieu shipping :v
    // console.log('data', data.image[0])
    let contact = new FormData();
    contact.append("name", data.name)
    contact.append("title", data.title)
    contact.append("email", data.email)
    contact.append("content", data.content)

    addContact(contact)
      .then(dataCont => {
        if (dataCont.error) {
          setError(dataCont.error)
          setSuccess(false)
        } else {
          swal({
            title: "Bạn có muốn gửi nữa không nữa không?",
            icon: "success",
            buttons: true,
            dangerMode: true,
          })
            .then((willDelete) => {
              if (!willDelete) {
                history.push('/')
              }
            })
          e.target.reset();
          setError('');
          setSuccess(true)
        }
      })
  }
  const showError = () => {
    return (
      <>
        <h2 className="text-red-500" style={{ display: error ? "block" : "none" }}>{error}<span className="text-3xl text-red-500 font-light"> ✗</span></h2>
      </>
    )
  }
  const showSucces = () => {
    return (
      <>
        <h2 className="text-green-500" style={{ display: success ? "block" : "none" }}>Thêm thành công<span className="text-3xl text-green-500 font-light">✓</span></h2>
      </>
    )

  }
  return (
    <div id="main-content" className="pt-32">
      <section className="container mx-auto">
        <div className="ml-6">Home &gt; Contact</div>
        <iframe className="w-full mt-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8639810443337!2d105.74459841458753!3d21.0381277859933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2sFPT%20Polytechnic%20Hanoi!5e0!3m2!1sen!2s!4v1601793338313!5m2!1sen!2s" width={600} height={450} frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
      </section>
      <section className="container md:mx-auto mt-10">
        <div className="grid grid-cols-3 gap-4">
          <div className="ml-20 border-r-2 p-1">
            <div className>
              <img className="w-64 h-20 object-cover mx-auto" src={Logo} alt="" />
              <p>59 Street, Newyork City, Rose Town, 05 Rive House
              59 Street, Newyork City, Rose Town, 05 Rive House
              59 Street, Newyork City, Rose Town, 05 Rive House
                  59 Street, Newyork City, Rose Town, 05 Rive House</p>
            </div>
            <div className="mt-2 border-t-2">
              <div className="grid grid-cols-4 pt-2">
                <svg className="w-8" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                  <g>
                    <g>
                      <path d="M436.992,74.953c-99.989-99.959-262.08-99.935-362.039,0.055s-99.935,262.08,0.055,362.039s262.08,99.935,362.039-0.055
                   c48.006-48.021,74.968-113.146,74.953-181.047C511.986,188.055,485.005,122.951,436.992,74.953z M387.703,356.605
                   c-0.011,0.011-0.022,0.023-0.034,0.034v-0.085l-12.971,12.885c-16.775,16.987-41.206,23.976-64.427,18.432
                   c-23.395-6.262-45.635-16.23-65.877-29.525c-18.806-12.019-36.234-26.069-51.968-41.899
                   c-14.477-14.371-27.483-30.151-38.827-47.104c-12.408-18.242-22.229-38.114-29.184-59.051
                   c-7.973-24.596-1.366-51.585,17.067-69.717l15.189-15.189c4.223-4.242,11.085-4.257,15.326-0.034
                   c0.011,0.011,0.023,0.022,0.034,0.034l47.957,47.957c4.242,4.223,4.257,11.085,0.034,15.326c-0.011,0.011-0.022,0.022-0.034,0.034
                   l-28.16,28.16c-8.08,7.992-9.096,20.692-2.389,29.867c10.185,13.978,21.456,27.131,33.707,39.339
                   c13.659,13.718,28.508,26.197,44.373,37.291c9.167,6.394,21.595,5.316,29.525-2.56l27.221-27.648
                   c4.223-4.242,11.085-4.257,15.326-0.034c0.011,0.011,0.022,0.022,0.034,0.034l48.043,48.128
                   C391.911,345.502,391.926,352.363,387.703,356.605z" />
                    </g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                </svg>
                <p className="col-span-3 pt-1 font-bold ">
                  0966888777
                  </p>
              </div>
              <div className="grid grid-cols-4 pt-2">
                <svg className="w-8" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                  <g>
                    <g>
                      <path d="M485.743,85.333H26.257C11.815,85.333,0,97.148,0,111.589V400.41c0,14.44,11.815,26.257,26.257,26.257h459.487
			c14.44,0,26.257-11.815,26.257-26.257V111.589C512,97.148,500.185,85.333,485.743,85.333z M475.89,105.024L271.104,258.626
			c-3.682,2.802-9.334,4.555-15.105,4.529c-5.77,0.026-11.421-1.727-15.104-4.529L36.109,105.024H475.89z M366.5,268.761
			l111.59,137.847c0.112,0.138,0.249,0.243,0.368,0.368H33.542c0.118-0.131,0.256-0.23,0.368-0.368L145.5,268.761
			c3.419-4.227,2.771-10.424-1.464-13.851c-4.227-3.419-10.424-2.771-13.844,1.457l-110.5,136.501V117.332l209.394,157.046
			c7.871,5.862,17.447,8.442,26.912,8.468c9.452-0.02,19.036-2.6,26.912-8.468l209.394-157.046v275.534L381.807,256.367
			c-3.42-4.227-9.623-4.877-13.844-1.457C363.729,258.329,363.079,264.534,366.5,268.761z" />
                    </g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                </svg>
                <p className="col-span-3 pt-1 font-bold ">fruishop@gmail.com</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} id="form-add" className="col-span-2 bg-blue-100 pb-2">
            <div className="text-center text-2xl font-medium">
              <h4>Contact us</h4>
            </div>
            <div className="text-center">
              {showError()}
              {showSucces()}
            </div>
            <div className="mx-40 text-xl ">
              <h2 className>Title</h2>
              <input className="border-2 border-black w-full"
                id="title" type="text"
                {...register('title')}
              />
              <span id="check-title" />
              <h2>Email</h2>
              <input className="border-2 border-black w-full"
                id="email" type="text"
                {...register('email')}
              />
              <span id="check-email" />
              <h2>First and last name</h2>
              <input className="border-2 border-black w-full"
                id="name" type="text"
                {...register('name')}
              /><span id="check-name" />
              <h2>content</h2>
              <textarea id="content" cols={30} rows={10}
                className="w-full border-solid border-2  border-black"
                name="message"
                defaultValue={""}
                {...register('content')}
              /><span id="check-content" />
              <button className="p-2 bg-blue-500 rounded hover:bg-blue-300">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
