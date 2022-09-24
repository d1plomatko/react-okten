import {Link} from "react-router-dom";

import css from './Comment.module.css'

export default function Comment({comment}) {

    return (
        <div className={css.Comment}>
            <div>ID - {comment.id}</div>
            <div>
                <Link to={'/posts/' + comment.postId}>Name - {comment.name}</Link>
             </div>
        </div>
    )
    
}