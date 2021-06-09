import { axiosClient } from './axiosClient';

import { $ } from "../utils.js";

const UserApi = {
    getAll() {
        const url = `/user`;
        return axiosClient.get(url);
    },
    signIn(signIn) {
        const url = `/signin`;
        return axiosClient.post(url, signIn);
    },
    signUp(signUp) {
        const url = `signup`;
        return axiosClient.post(url, signUp)
    },
    signOut() {
        const url = `signout`;
        return axiosClient.get(url)
    },
    // get(id) {
    //     const url = `/user/${id}`;
    //     return axiosClient.get(url);
    // },
    // remove(id) {
    //     const url = `/user/${id}`;
    //     return axiosClient.delete(url);
    // },
    //     update(id, data) {
    //         const url = `/user/${id}`;
    //         return axiosClient.put(url, data);
    //     }
}

export default UserApi;