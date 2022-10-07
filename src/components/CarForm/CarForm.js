import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carsActions} from "../../redux";

const CarForm = () => {

    const {register, handleSubmit, reset, setValue} = useForm();
    const dispatch = useDispatch();
    const {carToUpdate} = useSelector(state => state.carsReducer);

    useEffect(() => {
        if (carToUpdate){
            setValue('model', carToUpdate.model)
            setValue('year', carToUpdate.year)
            setValue('price', carToUpdate.price)
        }
    }, [carToUpdate])

    const submit = (car) => {
        if (!carToUpdate){
            dispatch(carsActions.create({car}))
        } else {
            dispatch(carsActions.updateById({id: carToUpdate.id, car}))
        }
        reset()
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <button>{carToUpdate? 'Update': 'Create'}</button>
        </form>
    )

}

export {CarForm}