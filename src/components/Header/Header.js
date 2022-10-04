import {useNavigate} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {

    const navigate = useNavigate();

    return (
        <header className={css.Header}>
            <div className={css.Container}>
                <h3>CarsAPI</h3>
                <div className={css.Buttons}>
                    <button onClick={() => navigate('/login')}>Login</button>
                    <button onClick={() => navigate('/register')}>Register</button>
                </div>
            </div>
        </header>
    )

}

export {Header}