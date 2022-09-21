import {axiosInstance} from "./axio.services";

import {urls} from "../configs";

const userService = {

    createUser : (user) => axiosInstance.post(urls.users, user),
    createComment : (comment) => axiosInstance.post(urls.comments, comment),
    getAllUsers : () => axiosInstance.get(`/users`),
    getAllComments : () => axiosInstance.get('/comments')

}

export {userService}