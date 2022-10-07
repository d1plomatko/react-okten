import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

const Header = () => {
    const {currentUser} = useSelector(state => state.usersReducer);

    return(
        <header>
            <nav>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
            </nav>
            <div>
                {currentUser && currentUser.name}
            </div>
        </header>
    )
    
}

export {Header}