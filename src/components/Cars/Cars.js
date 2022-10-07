import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carsActions} from "../../redux";
import {Car} from "../Car/Car";

const Cars = () => {

    const {cars} = useSelector(state => state.carsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carsActions.getAll())
    }, [])

    return(
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    )

}

export {Cars}