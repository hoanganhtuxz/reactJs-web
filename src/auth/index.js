import { API } from '../config'

export const signUp = (user) => {
    return fetch(`${API}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}
export const signIn = (user) => {
    return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}
export const authenticate = (data, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('token', JSON.stringify(data));
        next();
    }
}
export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false
    }
    if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'))
    } else {
        return false
    }
}
// export const addPro = (product) => {
//     return fetch(`${API}/productAdd`, {
//         method: "POST",
//         body: product
//     })
//         .then(response => response.json())
//         .catch(error => console.log(error))
// }
export const addContact = (contact) => {
    return fetch(`${API}/contactAdd`, {
        method: "POST",
        body: contact
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

