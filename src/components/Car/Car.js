import {useDispatch} from "react-redux";

import {carsActions} from "../../redux";

const Car = ({car}) => {

    const dispatch = useDispatch();

    return(
        <div>
            <div>ID - {car.id}</div>
            <div>MODEL - {car.model}</div>
            <div>YEAR - {car.year}</div>
            <div>PRICE - {car.price}</div>
            <div>
                <button onClick={() => dispatch(carsActions.deleteById({id: car.id}))}>Delete</button>
                <button onClick={() => dispatch(carsActions.setCarToUpdate(car))}>Update</button>
            </div>
        </div>
    )
    
}

export {Car}