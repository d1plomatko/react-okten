import {useRef} from "react";

import {useAnimalReducer} from "../../reducers/animal.reducer";
import {CREATE, DELETE} from "../../reducers/animal.action";
import {Dog} from "../Dog/Dog";

const Dogs = () => {

    const [state, dispatch] = useAnimalReducer()

    const dogName = useRef()

    const createDog = () => {
        dispatch({type: CREATE, payload: {name: dogName.current.value}})
        console.log(state)
    }

    const deleteDog = (id) => {
        dispatch({type: DELETE, payload: {id}})
    }

    return (
        <div>
            <h4>Add Dog:</h4>
            <input type="text" ref={dogName}/>
            <button onClick={createDog}>Add</button>
            <div>{state.map((dog, index) => <Dog key={index} dog={dog} deleteDog={deleteDog}/>)}</div>
        </div>
    )

}

export {Dogs}