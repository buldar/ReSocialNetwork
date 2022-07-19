import axios from "axios";

// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'de8c7563-dd18-4912-9001-90e13a939eac'
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    setMyProfile (id) {
        return instance.get(`profile/${id}`)
            .then(response=>response.data)
    }
}

export const authAPI = {
    setAuthMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}