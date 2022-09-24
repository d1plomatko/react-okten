import {useEffect, useState} from "react";

import {placeholderServices} from "../../services";
import Comment from "../comment/Comment";
import css from './Comments.module.css'

export function Comments(){

    let [comments, setComments] = useState([]);

    useEffect(() => {
        placeholderServices.getAllComments().then(({data}) => setComments(data))
    }, [])

    return(
        <div className={css.Comments}>
            {comments.map(comment => <Comment key = {comment.id} comment = {comment}/>)}
        </div>
    )

}