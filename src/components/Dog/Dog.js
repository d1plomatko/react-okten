const Dog = ({dog, deleteDog}) => {
    
    return(
        <div>
            {dog.name}
            <button onClick={() => deleteDog(dog.id)}>Delete</button>
        </div>
    )
    
}

export {Dog}