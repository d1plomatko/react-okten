import css from "./Comment.module.css"

export default function Comment({comment}){

    return(
        <div className={css.Comment}>
            {comment.id} - {comment.name}
        </div>
    )

}