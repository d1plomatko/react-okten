import axios from "axios"

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
})

const getUsersAxios = () => {
    return axiosInstance.get()
}

const gerUserAxios = (id) => {
    return axiosInstance.get(`/${id}`)
}

export {gerUserAxios, getUsersAxios}