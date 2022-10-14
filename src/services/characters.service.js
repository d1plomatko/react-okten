import {axiosService} from "./axios.service";
import {urls} from "../configs";

const charactersService = {
    getAll: (page=1, name='') => axiosService.get(urls.character, {params: {page, name}})
};

export {
    charactersService
};