import axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

export const getUsers = (currentPage, pageSize) => {
    return axios.get(`${baseUrl}users?page=${currentPage}&count=${pageSize}`,
        {withCredentials: true})
        .then(response => response.data)

}

export const unfollow = (id) => {
    return axios.delete(`${baseUrl}follow/${id}`, {
        withCredentials: true,
        headers: {
            'API-KEY': 'de8c7563-dd18-4912-9001-90e13a939eac'
        }
    })
        .then(response => response.data)
}

export const follow = (id) => {
    return axios.post(`${baseUrl}follow/${id}`, {}, {
        withCredentials: true,
        headers: {
            'API-KEY': 'de8c7563-dd18-4912-9001-90e13a939eac'
        }
    })
        .then(response => response.data)
}

export const setAuthMe = () => {
    return axios.get(`${baseUrl}auth/me`, {
        withCredentials: true
    })
        .then(response=>response.data)
}