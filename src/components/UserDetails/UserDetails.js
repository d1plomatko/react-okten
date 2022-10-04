import {useLocation} from "react-router-dom";

import css from './UserDetails.module.css'

const UserDetails = () => {

    const {state:user} = useLocation()

    return(
        <div className={css.User}>
            <h5>User - {user.id}</h5>
            <div>Name - {user.name}</div>
            <div>City - {user.address.city}</div>
        </div>
    )

}

export {UserDetails}