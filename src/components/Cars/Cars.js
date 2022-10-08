import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carsActions} from "../../redux";
import {Car} from "../Car/Car";
import css from './Cars.module.css'

const Cars = () => {

    const {cars} = useSelector(state => state.carsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carsActions.getAll())
    }, [])

    return(
        <div className={css.container}>
            <h1>Cars</h1>
            <div className={css.cars}>
                {cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        </div>
    )

}

export {Cars}