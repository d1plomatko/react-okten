import {useDispatch} from "react-redux";

import {carsActions} from "../../redux";
import css from './Car.module.css';

const Car = ({car}) => {

    const dispatch = useDispatch();

    return(
        <div className={css.car}>
            <div>ID - {car.id}</div>
            <div>MODEL - {car.model}</div>
            <div>YEAR - {car.year}</div>
            <div>PRICE - {car.price}</div>
            <div className={css.buttons}>
                <button onClick={() => dispatch(carsActions.deleteById({id: car.id}))}>Delete</button>
                <button onClick={() => dispatch(carsActions.setCarToUpdate(car))}>Update</button>
            </div>
        </div>
    )
    
}

export {Car}