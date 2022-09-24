import {useEffect, useState} from "react"

import {placeholderServices} from "../../services";
import Todo from "../todo/Todo";
import css from './Todos.module.css'

export function Todos(){


    let [todos, setTodos] = useState([]);

    useEffect(() => {
        placeholderServices.getAllTodos().then(({data}) => setTodos(data))
    }, [])

    return(
        <div className={css.Todos}>
            {todos.map(todo => <Todo key = {todo.id} todo = {todo}/>)}
        </div>
    )

}