import {axiosService} from "./axios.service";

import {urls} from "../configs";

const carService = {
    getAll: (page = 1) => axiosService.get(urls.cars, {params: {page}}),

}

export {
    carService
};