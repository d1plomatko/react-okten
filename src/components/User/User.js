import {Link} from "react-router-dom";

import css from './User.module.css'

const User = ({user}) => {

    return(
        <div className={css.User}>
            <h5>User {user.id}</h5>
            <Link to={`/users/${user.id}`} state={{...user}}>{user.name}</Link>
        </div>
    )

}

export {User}