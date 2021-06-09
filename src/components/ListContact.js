import React, { useState, useEffect } from 'react';
import Sidebe from '../components/Sidebe';
import ContactAPI from '../api/contactPAI';
import { Link } from 'react-router-dom';
import swal from "sweetalert";
const ListContact = () => {
    window.scrollTo(0, 0);
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        const listtodo = async () => {
            try {
                let { data: contact } = await ContactAPI.getAll();
                setContacts(contact.data);
            } catch (error) {
                console.log(error)

            }
        }
        listtodo()
    }, []);
    const onRemoveSubmit = async (id) => {

        try {

            swal({
                title: "bạn có chắc chắn muốn xóa?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
                buttons: ["cancel", "delete"],
            })
                .then(async (willDelete) => {
                    if (willDelete) {
                        await ContactAPI.remove(id)
                        let newContact = contacts.filter(item => item._id !== id)
                        setContacts(newContact)
                        swal("bạn đã xóa thành công!", {
                            icon: "success",
                        });
                    }


                });
        } catch (error) {
            console.log(error)

        }

    }
    return (
        <div className="pt-3">
            <div className=" grid grid-cols-5 gap-4" id="list-contact">
                <Sidebe />
                <div className="col-span-4">
                    <div className="bg-green-200 p-4">
                        <a className="ml-16 bg-blue-300 p-2 pl-3 pr-3 rounded hover:bg-blue-500 hover:text-blue-100">List Contact</a>
                    </div>
                    <table className=" border-l-2 border-r-2 mt-3">
                        <thead>
                            <tr className="border-b-2">
                                <th className="border-2 pr-2 pl-2 bg-blue-300">#</th>
                                <th className="pl-10 pr-10 border-2 bg-blue-200 w-1/5">ho va ten</th>
                                <th className="pl-20 pr-20 border-2 bg-blue-300">tieu de</th>
                                <th className="pl-20 pr-20 border-2 bg-blue-200">email</th>
                                <th className="pl-36 pr-36 border-2 bg-blue-300">noi dung</th>
                                <th className="pl-10 pr-10 border-2 bg-blue-200">Action</th>
                            </tr>
                        </thead>
                        <tbody id="show-content">
                            {contacts.map((contact, index) => {
                                return (
                                    <tr className="border-b-2" key={index}>
                                        <td className="border-r-2 text-center">{index + 1}</td>
                                        <td className="text-center">{contact.name}</td>
                                        <td className="text-center ">{contact.title}</td>
                                        <td className="text-center ">{contact.email}</td>
                                        <td className="text-center">{contact.content}</td>
                                        <td className="text-center">
                                            <button onClick={() => onRemoveSubmit(contact._id)} className="btn p-2  bg-red-300 hover:bg-red-500 hover:text-white  rounded-lg mr-2">delete</button>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListContact
