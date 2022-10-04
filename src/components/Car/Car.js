import {carService} from "../../services";

const Car = ({car, setCars, setCarUpdate}) => {

    const deleteCar = async (id) => {
        await carService.deleteById(id)
        setCars(cars => {
            const index = cars.findIndex(car => car.id === id)
            cars.splice(index, 1)
            return [...cars]
        })
    }

    const updatePhoto = async (e) => {
        const formData = new FormData();
        const [file] = e.target.files;
        formData.append('photo', file)
        const {data} = await carService.addPhotoById(car.id, formData)
        setCars(cars => {
            const find = cars.find(value => value.id = car.id)
            Object.assign(find, {...data, photo: URL.createObjectURL(file)})
            return [...cars]
        })
    }

    return (
        <div>
            <div>Model - {car.model}</div>
            <div>Year - {car.year}</div>
            <div>Price - {car.price}</div>
            {
                car.photo?
                    <img src={car.photo} alt={car.model}/> :
                    <input type='file' onChange={updatePhoto}/>
            }
            <div>
                <button onClick={() => setCarUpdate(car)}>Update</button>
                <button onClick={() => deleteCar(car.id)}>Delete</button>
            </div>
        </div>
    )

}

export {Car}