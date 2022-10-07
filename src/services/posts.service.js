import {axiosService} from "./axios.services";
import {urls} from "../configs";

const postsService = {
    getAll: () => axiosService.get(urls.posts)
};

export {
    postsService
};