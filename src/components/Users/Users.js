import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {usersService} from "../../services";
import {User} from "../User/User";
import css from './Users.module.css'

const Users = () => {

    const state = useSelector(state => state.usersReducer.users);
    const dispatch = useDispatch();

    useEffect(() => {
        usersService.getAll().then(({data}) => {
            dispatch({type: 'getUsers', payload: data})
        })
    }, [])


    return(
        <div className={css.Users}>
            {state.map(user => <User user={user} key={user.id}/>)}
        </div>
    )

}

export {Users}