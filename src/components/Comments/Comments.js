import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {commentsService} from "../../services";
import {Comment} from "../Comment/Comment";
import css from './Comments.module.css'

const Comments = () => {

    const state = useSelector(state => state.commentsReducer.comments);
    const dispatch = useDispatch();

    useEffect(() => {
        commentsService.getAll().then(({data}) => {
            dispatch({type: 'getComments', payload: data})
        })
    }, []);

    return(
        <div className={css.Comments}>
            {state.map(comment => <Comment comment={comment} key={comment.id}/>)}
        </div>
    )

}

export {Comments}