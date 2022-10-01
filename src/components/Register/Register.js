import {useForm} from "react-hook-form";
import {authService} from "../../services";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Register = () => {

    const {handleSubmit, register, reset} = useForm();
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const submit = async (user) => {
        try {
            await authService.register(user);
            navigate('/login')
        } catch (e) {
            setError(e.response.data?.username)
        }
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <h3>Register</h3>
            {error && <div>{error}</div>}
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register("password")} />
            <button>Register</button>
        </form>
    )

}

export {Register}