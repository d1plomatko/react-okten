import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {placeholderServices} from "../../services";
import css from './Post.module.css'

export function Post(){

    const {id} = useParams()
    let [post, setPost] = useState({})

    useEffect(() => {
        placeholderServices.getPostsById(id).then(({data}) => setPost(data))
    }, [id])


    return(
        <div className={css.Post}>
            <div> ID - {post.id}</div>
            <div>Title - {post.title}</div>
        </div>
    )

}