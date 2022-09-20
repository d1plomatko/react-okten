import {axiosInstance} from "./axio.services";
import {url} from "../configs";

const userService  = {
    getAll : () => axiosInstance.get(url.users)

}

export {userService};