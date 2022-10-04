import {NavLink} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {

    return(
        <header className={css.Header}>
            <nav className={css.Navbar}>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
                <NavLink to={'/comments'}>Comments</NavLink>
            </nav>
        </header>
    )

}

export {Header}