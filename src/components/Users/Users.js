import {useEffect, useState} from "react";

import {userService} from "../../services";
import User from "../User/User";
import UserForm from "../UserForm/UserForm";
import css from "./Users.module.css"

export default function Users(){

    let [users,setUsers] = useState([])

    useEffect(()=> {
        userService.getAllUsers().then(({data}) => setUsers(data))
    }, [])

    return(
        <div>
            <UserForm setUsers = {setUsers}/>
            <div className={css.Users}>
                {users.map(user => <User user = {user} key = {user.id}/>)}
            </div>
        </div>
    )

}