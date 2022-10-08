import {useDispatch} from "react-redux";

import {userActions} from "../../redux";
import css from './User.module.css'

const User = ({user}) => {

    const dispatch = useDispatch();

    return(
        <div className={css.user}>
            <h4>User {user.id}</h4>
            <div>{user.name}</div>
            <button onClick={() => dispatch(userActions.setCurrentUser({...user}))}>Select</button>
        </div>
    )

}

export {User}