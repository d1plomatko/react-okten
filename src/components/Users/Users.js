import {useEffect, useState} from "react";
import {userService} from "../../services";
import User from "../User/User";
import ChosenUser from "../ChosenUser/ChosenUser";

export default function Users(){

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);


    let lift = (obj) => {
        if (obj === user){
            setUser(null)
        } else {
            setUser(obj)
        }
    }

    useEffect(()=> {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    return(
        <div>
            {users.map(user => <User user = {user} key = {user.id} lift = {lift}/>)}
            <hr/>
            {user && <ChosenUser user = {user}/>}
        </div>
    )

}