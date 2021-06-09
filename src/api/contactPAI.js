import { axiosClient } from './axiosClient';

const ContactAPI = {
    getAll() {
        const url = `/contactList`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/contact/${id}`;
        return axiosClient.get(url);
    },
    add(product) {
        const url = `/contactAdd`;
        return axiosClient.post(url, product);
    },
    remove(id) {
        const { token, user } = JSON.parse(localStorage.getItem('token'))
        const url = `/contact/delete/${id}/${user._id}`;
        return axiosClient.delete(url, {
            headers: { 'Authorization': 'Bearer ' + token }
        });
    },

}

export default ContactAPI;