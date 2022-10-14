import {Link, NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {

    return (
        <header>
            <div className={css.header_wrapper}>
                <Link to={'/'} className={css.logo}>
                    RickMorty
                </Link>
                <div className={css.navbar}>
                    <NavLink to={'/characters'}>Characters</NavLink>
                </div>
            </div>
        </header>
    )

}

export {Header}