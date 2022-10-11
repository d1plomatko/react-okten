import {axiosService} from "./axios.service";
import {urls} from "../configs";

const charactersService = {
    getAll: (page) => axiosService.get(`${urls.character}/?page=${page}`)
};

export {
    charactersService
};