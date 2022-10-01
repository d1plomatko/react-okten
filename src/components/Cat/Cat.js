const Cat = ({cat, deleteCat}) => {
    
    return(
        <div>
            {cat.name}
            <button onClick={()=> deleteCat(cat.id)}>Delete</button>
        </div>
    )
    
}

export {Cat}