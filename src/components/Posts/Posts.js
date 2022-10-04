import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postsService} from "../../services";
import {Post} from "../Post/Post";
import css from './Posts.module.css'

const Posts = () => {

    const state = useSelector(state => state.postsReducer.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        postsService.getAll().then(({data}) => {
            dispatch({type: 'getPosts', payload: data})
        })
    }, [])

    return(
        <div className={css.Posts}>
            {state.map(post => <Post post={post} key={post.id}/>)}
        </div>
    )

}

export {Posts}