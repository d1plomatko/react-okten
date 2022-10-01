import {useForm} from "react-hook-form";

const CarForm = () => {

    const {handleSubmit, register, reset} = useForm();

    const submit = (car) => {

    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <button>Submit</button>
        </form>
    )

}

export {CarForm}