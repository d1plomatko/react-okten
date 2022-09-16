import {getUsersAxios} from "../../services/users.axio.services";
import {useEffect, useState} from "react";
import User from "../User/User";

export default function Users(){

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsersAxios().then(value => setUsers(value.data))
    })

    return(
        <div>
            {users.map(user => (<User user = {user} key = {user.id}/>))}
        </div>
    )

}