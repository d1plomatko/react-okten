import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {charactersActions} from "../../redux";
import {Character} from "../Character/Character";
import {useSearchParams} from "react-router-dom";

const Characters = () => {

    const {characters, prev, next} = useSelector(state => state.charactersReducer);
    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});

    const page = query.get('page');

    useEffect(() => {
        dispatch(charactersActions.getAll({page}))
    }, [page])

    const prevPage = () => {
        setQuery(value => ({page: value.get('page') - 1}))
    }
    const nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    }

    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
            <div>
                <button disabled={!prev} onClick={prevPage}>Prev</button>
                <button disabled={!next} onClick={nextPage}>Next</button>
            </div>
        </div>

    )

}

export {Characters}