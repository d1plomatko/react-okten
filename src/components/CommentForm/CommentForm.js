import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";

import {userService} from "../../services";
import {commentValidator} from "../../validators";
import css from "./CommentForm.module.css"


export default function CommentForm(){

    let {register, handleSubmit, setValue, reset, formState: {errors, isValid}} = useForm({
        mode : 'all',
        resolver : joiResolver(commentValidator)
    })

    const submit = async (comment) => {
        const {data} = await userService.createComment(comment)
        console.log(data)
        reset()
    }

    useEffect(() => {
        setValue('title', 'title')
        setValue('body', 'body')
    }, [])

    return(
        <div>
            <form onSubmit={handleSubmit(submit)} className={css.CommentForm}>
                <h3>Comment Form</h3>
                <input type="text" placeholder={'title'} {...register('title')}/>
                {errors.title && <div className={css.error}>{errors.title.message}</div>}
                <input type="text" placeholder={'body'} {...register('body')}/>
                {errors.body && <div className={css.error}>{errors.body.message}</div>}
                <button disabled={!isValid}>Submit</button>
            </form>
        
        </div>
    )
    
}