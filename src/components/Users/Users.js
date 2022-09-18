import {getUserPosts, getUsersAxios} from "../../services/users.axio.services";
import {useEffect, useState} from "react";
import User from "../User/User";



export default function Users(){

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
                {users.map(user => (<User user = {user} key = {user.id} lift = {lift} getUserPosts = {getUserPosts}/>))}
            </div>
        </div>
    )

}