import css from "./Todo.module.css"

export default function Todo({todo}){

    return(
        <div className={css.Todo}>
            <div>ID - {todo.id}</div>
            <div>Title - {todo.title}</div>
            <div>Completed - {todo.completed.toString()}</div>
        </div>
    )

}