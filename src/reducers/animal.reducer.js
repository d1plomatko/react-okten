import {CREATE, DELETE} from "./animal.action";
import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case CREATE :
            const newAnimal = {
                name: action.payload.name,
                id: new Date().getTime()
            }
            return [...state, newAnimal]


        case DELETE :
            const index = state.findIndex(value => value.id === action.payload.id)
            if (index !== -1){
                state.splice(index, 1)
            }
            return [...state]

    }
}

const useAnimalReducer = () => useReducer(reducer, []);

export {useAnimalReducer};
