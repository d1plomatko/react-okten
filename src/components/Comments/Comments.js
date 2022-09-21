import {useEffect, useState} from "react";

import {userService} from "../../services";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";
import css from "./Comments.module.css"

export default function Comments() {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        userService.getAllComments().then(({data}) => setComments(data))
    }, [])

    return (
        <div>
            <CommentForm setComments = {setComments}/>
            <div className={css.Comments}>
                {comments.map(comment => <Comment comment = {comment} key = {comment.id} />)}
            </div>
        </div>
    )

}