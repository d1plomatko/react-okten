export default function Post(props){

    let {post} = props

    return(
        <div className={'post'}>
            <h4>Title - {post.title}</h4>
            <p>ID - {post.id}</p>
            <p>User ID - {post.userId}</p>
            <p>{post.body}</p>
        </div>
    )
    
}