import { axiosClient } from './axiosClient';

const BlogApi = {
    getAll() {
        const url = `/blogList`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/blog/${id}`;
        return axiosClient.get(url);
    },
    add(blog) {
        const { token, user } = JSON.parse(localStorage.getItem('token'))
        const url = `/blog/create/${user._id}`;
        return axiosClient.post(url, blog, {
            headers: { 'Authorization': 'Bearer ' + token }
        });
    },
    remove(id) {
        const { token, user } = JSON.parse(localStorage.getItem('token'))
        const url = `/blog/delete/${id}/${user._id}`;
        return axiosClient.delete(url, {
            headers: { 'Authorization': 'Bearer ' + token }
        });
    },
    update(id, blog) {
        const { token, user } = JSON.parse(localStorage.getItem('token'))
        const url = `/blog/update/${id}/${user._id}`;
        return axiosClient.put(url, blog, {
            headers: { 'Authorization': 'Bearer ' + token }
        });
    },
    blogHome() {
        const url = `/blogHompage`;
        return axiosClient.get(url);
    }
}

export default BlogApi;