import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userActions} from "../../redux";
import {User} from "../User/User";

const Users = () => {

    const {users} = useSelector(state => state.usersReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll())
        }
    , [])

    return(
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    )

}

export {Users}