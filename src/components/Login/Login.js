import {useForm} from "react-hook-form";
import {useNavigate, useSearchParams} from "react-router-dom";

import {authService} from "../../services";
import css from './Login.module.css'

const Login = () => {

    const {handleSubmit, register, reset} = useForm();
    const [query,] = useSearchParams();
    const navigate = useNavigate();

    const submit = async (user) => {
        try {
            const {data} = await authService.login(user);
            authService.setTokens(data)
            reset()
            navigate('/cars')

        } catch (e) {

        }
    }

    return (
        <div className={css.Container}>
            <h3>Login</h3>
            <h5>{query.has('expSession') && <h3>session expired</h3>}</h5>
            <form onSubmit={handleSubmit(submit)} className={css.LoginForm}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="password" placeholder={'password'} {...register('password')}/>
                <button>Login</button>
            </form>
        </div>
    )

}

export {Login}