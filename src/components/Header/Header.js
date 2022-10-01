import {useNavigate} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {

    const navigate = useNavigate();

    return(
        <header className={css.Header}>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/register')}>Register</button>
        </header>
    )
    
}

export {Header}