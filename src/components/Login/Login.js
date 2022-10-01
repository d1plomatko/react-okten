import {useForm} from "react-hook-form";

import {authService} from "../../services";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const {handleSubmit, register, reset} = useForm();

    const navigate = useNavigate();

    const submit = async (user) => {
        try {
            const {data} = await authService.login(user);
            authService.setTokens(data)
            reset()
            navigate('/cars')

        }catch (e){

        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>Login</button>
        </form>
    )

}

export {Login}