import css from './Post.module.css'

const Post = ({post}) => {
    
    return(
        <div className={css.post}>
            {post.id} - {post.title}
        </div>
    )
    
}

export {Post}