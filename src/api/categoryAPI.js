import { axiosClient } from './axiosClient';
// import { ParseURLUpdate } from '../utils';
// const id = ParseURLUpdate();
const CategoryAPI = {
    getAll() {
        const url = `/categoryList`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/category/${id}`;
        return axiosClient.get(url);
    },
    add(category) {
        const { token, user } = JSON.parse(localStorage.getItem('token'))
        const url = `/category/create/${user._id}`;
        return axiosClient.post(url, category, {
            headers: { 'Authorization': 'Bearer ' + token }
        });
    },
    remove(id) {
        const { token, user } = JSON.parse(localStorage.getItem('token'))
        const url = `/category/delete/${id}/${user._id}`;
        return axiosClient.delete(url, {
            headers: { 'Authorization': 'Bearer ' + token }
        });
    },
    update(id, category) {
        const { token, user } = JSON.parse(localStorage.getItem('token'))
        const url = `/category/update/${id}/${user._id}`;
        return axiosClient.put(url, category, {
            headers: { 'Authorization': 'Bearer ' + token }
        });
    },
    getCate() {

        const url = `/cateHome`;
        return axiosClient.get(url);
    }
}

export default CategoryAPI;