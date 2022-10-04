import {Car} from "../Car/Car";

const Cars = ({cars, setCars, setCarUpdate}) => {

    return(
        <div>
            {cars.map(car => <Car car={car} key={car.id} setCars={setCars} setCarUpdate={setCarUpdate}/>)}
        </div>
    )

}

export {Cars}