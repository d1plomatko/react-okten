import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {postActions} from "../../redux";
import {Post} from "../Post/Post";

const Posts = () => {

    const {posts} = useSelector(state => state.postsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postActions.getAll())
    }, [])

    return(
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    )
    
}

export {Posts}