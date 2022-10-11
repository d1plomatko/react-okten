import {NavLink} from "react-router-dom";

const Header = () => {

    return (
        <header>
            <div>
                <div>
                    RickMorty
                </div>
                <div>
                    <NavLink to={'/characters'}>Characters</NavLink>
                </div>
            </div>
        </header>
    )

}

export {Header}