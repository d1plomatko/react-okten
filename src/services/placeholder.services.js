import {axiosServices} from "./axios.services";

import {urls} from "../configs";

const placeholderServices = {
    getAllTodos: () => axiosServices.get(urls.todos),
    getAllAlbums: () => axiosServices.get(urls.albums),
    getAllComments: () => axiosServices.get(urls.comments),
    getPostsById: (id) => axiosServices.get(urls.posts + '/' + id)

}

export {
    placeholderServices
}