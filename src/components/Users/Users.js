import {useState} from "react";

import User from "../User/User";

export default function Users(){

    let [users, setUsers] = useState([]);

   fetch('https://jsonplaceholder.typicode.com/posts')
       .then(response => response.json())
       .then(value => {
           setUsers(value)
       })

    return (
        <div>
            {users.map(user => (<User user = {user} key = {user.id} />))}
        </div>
    )
}