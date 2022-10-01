import {Car} from "../Car/Car";

const Cars = ({cars}) => {

    return(
        <div>
            {cars.map(car => <Car car={car} key={car.id}/>)}
        </div>
    )

}

export {Cars}