import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userActions} from "../../redux";
import {User} from "../User/User";
import css from './Users.module.css'

const Users = () => {

    const {users} = useSelector(state => state.usersReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll())
        }
    , [])

    return(
        <div className={css.users}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    )

}

export {Users}