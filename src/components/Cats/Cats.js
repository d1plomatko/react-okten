import {useRef} from "react";

import {useAnimalReducer} from "../../reducers/animal.reducer";
import {CREATE, DELETE} from "../../reducers/animal.action";
import {Cat} from "../Cat/Cat";


const Cats = () => {

    const [state, dispatch] = useAnimalReducer()

    let catName = useRef()

    const createCat = () => {
        dispatch({type: CREATE, payload : {name: catName.current.value}})
    }

    const deleteCat = (id) => {
        dispatch({type: DELETE, payload: {id}})
    }

    return(
        <div>
            <h4>Add Cat:</h4>
            <input type="text" ref={catName}/>
            <button onClick={createCat}>Add</button>
            <div>{state.map((cat, index) => <Cat key={index} cat={cat} deleteCat={deleteCat}/>)}</div>
        </div>
    )
    
}

export {Cats}