import axios from "axios"

let baseURL = 'https://jsonplaceholder.typicode.com/users'


let axiosInstance = axios.create({
    baseURL
})

const getUsersAxios = () => {
    return axiosInstance.get()
}

const getUserPosts = (id) => {
    return axiosInstance.get(baseURL + '/' + id  + '/posts')
}

export {getUsersAxios, getUserPosts}