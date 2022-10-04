import {useForm} from "react-hook-form";
import {useEffect} from "react";

import {carService} from "../../services";
import css from './CarForm.module.css'

const CarForm = ({setCars, carUpdate, setCarUpdate}) => {

    const {handleSubmit, register, reset, setValue} = useForm();

    useEffect(() => {
       if (carUpdate){
           setValue('model', carUpdate.model, {shouldValidate: true})
           setValue('price', carUpdate.price, {shouldValidate: true})
           setValue('year', carUpdate.year, {shouldValidate: true})
       }
    }, [carUpdate])

    const submit = async (car) => {
        if (!carUpdate){
            const {data} = await carService.create(car)
            setCars(cars => [...cars, data])
        } else {
           const {data} = await carService.updateById(carUpdate.id, car)
            setCars(cars => {
                const findCar = cars.find(value => value.id === carUpdate.id)
                Object.assign(findCar, data)
                setCarUpdate(null)
                return [...cars]
            })

        }
        reset()
    }

    return(
        <form onSubmit={handleSubmit(submit)} className={css.Form}>
            <h3>Create a car</h3>
            <input type="text" placeholder={'model'} {...register('model')}/>
            <input type="number" placeholder={'year'} {...register('year')}/>
            <input type="number" placeholder={'price'} {...register('price')}/>
            <button>{carUpdate? 'Update' : 'Submit'}</button>
        </form>
    )

}

export {CarForm}