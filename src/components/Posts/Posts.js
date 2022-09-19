import Post from "../Post/Post";

export default function Posts(props){
    let {posts} = props

    return(
        <div className={'posts'}>
            {posts.map((post, index) => <Post key ={index} post = {post} /> )}
        </div>
    )

}