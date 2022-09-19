
import {useEffect, useState} from "react";
import User from "../User/User";

import {getUsersAxios} from "../../services/users.axio.services";

export default function Users({postLift}){

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null)


    useEffect(() => {
        getUsersAxios().then(value => setUsers(value.data))
    }, [])

    const lift = (obj) => {
        if (obj === user){
            setUser(null)
        }else {
            setUser(obj)
        }

    }


    return(

        <div>
            <div>
                {user && <div>{JSON.stringify(user)}</div>}
            </div>
            <div className={'users'}>
                {users.map(user => (<User user = {user} key = {user.id} lift = {lift} postLift = {postLift} />))}
            </div>

        </div>
    )

}