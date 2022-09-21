import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";

import {userValidator} from "../../validators";
import {userService} from "../../services";
import css from "./UserForm.module.css"


export default function UserForm({setUsers}){

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        resolver : joiResolver(userValidator),
        mode : 'all'
    });


    useEffect(() => {
        setValue('name', 'Vasya')
        setValue('username', 'Vasya228')
        setValue('age', 18)
    }, [])

    const submit = async (user) => {
        const {data} = await userService.createUser(user)
        setUsers(users => [...users, data] )
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)} className={css.UserForm}>
                <h3>User Form</h3>
                <input type="text" placeholder={'name'} {...register('name')}/>
                {errors.name && <div className={css.error}>{errors.name.message}</div>}
                <input type="text" placeholder={'username'} {...register('username')}/>
                {errors.username && <div className={css.error}>{errors.username.message}</div>}
                <input type="number" placeholder={'age'} {...register('age')}/>
                {errors.age && <div className={css.error}>{errors.age.message}</div>}
                <button disabled={!isValid}>Submit</button>
            </form>
        </div>
    );

}