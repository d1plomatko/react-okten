import css from './Post.module.css'


const Post = ({post}) => {
    
    return(
        <div className={css.Post}>
            <h5>Post {post.id}</h5>
            <div>{post.title}</div>
        </div>
    )
    
}

export {Post}