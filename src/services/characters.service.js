import {axiosService} from "./axios.service";
import {urls} from "../configs";

const charactersService = {
    getAll: (page=1) => axiosService.get(`${urls.character}/?page=${page}`, {params: {page}})
};

export {
    charactersService
};