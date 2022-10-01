import {useAnimalReducer} from "../../reducers/animal.reducer";
import {useRef} from "react";
import {CREATE, DELETE} from "../../reducers/animal.action";
import {Cat} from "../Cat/Cat";


const Cats = () => {

    const [state, dispatch] = useAnimalReducer()

    const catName = useRef()

    const createCat = () => {
        dispatch({type: CREATE, payload : {name: catName.current.value}})
        console.log(state);
    }

    const deleteCat = (id) => {
        dispatch({type: DELETE, payload: {id}})
        console.log(id)
    }

    return(
        <div>
            <input type="text" ref={catName}/>
            <button onClick={createCat}>Create</button>
            <div>{state.map((cat, index) => <Cat key={index} cat={cat} deleteCat={deleteCat}/>)}</div>
        </div>
    )
    
}

export {Cats}