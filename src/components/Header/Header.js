import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    const {currentUser} = useSelector(state => state.usersReducer);

    return (
        <header className={css.header}>
            <div className={css.container}>
                <nav className={css.navbar}>
                    <NavLink to={'/users'}>Users</NavLink>
                    <NavLink to={'/posts'}>Posts</NavLink>
                </nav>
                <div className={css.username}>
                    {currentUser && currentUser.name}
                </div>
            </div>
        </header>
    )

}

export {Header}