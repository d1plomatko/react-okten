import {useDispatch} from "react-redux";
import {userActions} from "../../redux";

const User = ({user}) => {

    const dispatch = useDispatch();

    return(
        <div>
            {user.id} - {user.name}
            <button onClick={() => dispatch(userActions.setCurrentUser({...user}))}>Select</button>
        </div>
    )

}

export {User}