import css from './Comment.module.css';

const Comment = ({comment}) => {
    
    return(
        <div className={css.Comment}>
            {comment.id} - {comment.name}
        </div>
    )
    
}

export {Comment}