import { axiosClient } from './axiosClient';
const ProductApi = {
    getAll() {
        const url = `/products`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/product/${id}`;
        return axiosClient.get(url);
    },
    add(product) {
        const { token, user } = JSON.parse(localStorage.getItem('token'));
        const url = `/product/create/${user._id}`;
        return axiosClient.post(url, product, {
            headers: { 'Authorization': 'Bearer ' + token }

        });
    },
    remove(id) {
        const { token, user } = JSON.parse(localStorage.getItem('token'));
        const url = `/product/delete/${id}/${user._id}`;
        return axiosClient.delete(url, {
            headers: { 'Authorization': 'Bearer ' + token }

        });
    },
    update(id, product) {
        const { token, user } = JSON.parse(localStorage.getItem('token'));
        const url = `/product/update/${id}/${user._id}`;
        return axiosClient.put(url, product, {
            headers: { 'Authorization': 'Bearer ' + token }
        });
    },
    ptHome() {
        const url = `/productHome`;
        return axiosClient.get(url);
    },
    getproductblog() {
        const url = `/productBlog`;
        return axiosClient.get(url);
    },

    // addCart(id) {
    //     const url = `/products/${id}?_expand=categori`;
    //     return axiosClient.get(url);
    // },
    // getPr4() {
    //     const url = `/products?_page=categoriId_limit=4`;
    //     return axiosClient.get(url);
    // }

}

export default ProductApi;