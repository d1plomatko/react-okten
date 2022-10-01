const Car = ({car}) => {
    
    return(
        <div>
            <div>{car.model}</div>
            <div>{car.year}</div>
            <div>{car.price}</div>
        </div>
    )
    
}

export {Car}