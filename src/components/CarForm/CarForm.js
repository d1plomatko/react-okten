import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";

import {carsActions} from "../../redux";
import css from './CarForm.module.css'
import {carValidator} from "../../validators";

const CarForm = () => {

    const {register, handleSubmit, reset, setValue, formState:{isValid, errors}} = useForm({mode: "all", resolver: joiResolver(carValidator)});
    const dispatch = useDispatch();
    const {carToUpdate} = useSelector(state => state.carsReducer);

    useEffect(() => {
        if (carToUpdate){
            setValue('model', carToUpdate.model, {shouldValidate: true})
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
      <div className={css.container}>
          <h3>CarForm</h3>
          <form onSubmit={handleSubmit(submit)}>
              <input type="text" placeholder={'model'} {...register('model')}/>
              {errors.model && <div className={css.error1}>{errors.model.message}</div>}
              <input type="text" placeholder={'year'} {...register('year')}/>
              {errors.year && <div className={css.error2}>{errors.year.message}</div>}
              <input type="text" placeholder={'price'} {...register('price')}/>
              {errors.price && <div className={css.error3}>{errors.price.message}</div>}
              <button disabled={!isValid}>{carToUpdate? 'Update': 'Create'}</button>
          </form>
      </div>
    )

}

export {CarForm}