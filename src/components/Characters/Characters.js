import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useEffect} from "react";

import {charactersActions} from "../../redux";
import {Character} from "../Character/Character";
import css from './Characters.module.css'

const Characters = () => {

    const {register, handleSubmit, reset} = useForm();

    const {
        characters,
        prev,
        next,
        error,
        totalPages
    } = useSelector(state => state.charactersReducer);
    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1', name: ''});

    useEffect(() => {
        dispatch(charactersActions.getAll({page: query.get('page'), name: query.get('name')}))
    }, [query]);

    const prevPage = () => {
        if (query.get('name') !== '') {
            setQuery(value => ({page: value.get('page') - 1, name: query.get('name')}))
        } else {
            setQuery(value => ({page: value.get('page') - 1}))
        }
        window.scrollTo(0, 0);
    };

    const nextPage = () => {
        if (query.get('name') !== '') {
            setQuery(value => ({page: +value.get('page') + 1, name: query.get('name')}))
        } else {
            setQuery(value => ({page: +value.get('page') + 1}))
        }
        window.scrollTo(0, 0);
    };

    const search = (data) => {
        setQuery({page: '1', name: data.name})
        reset()
    }
    console.log(totalPages)
    return (
        <div>
            <div className={css.container}>
                <form className={css.search} onSubmit={handleSubmit(search)}>
                    <input type="text" placeholder={'Search by name'} {...register('name')}/>
                    <button>Search</button>
                </form>
                {query.get('name') && <div className={css.search_result}>Results of search
                    «{query.get('name')}»</div>}
                {error ?
                    error && <div>{error.error}</div> :
                    <div className={css.characters}>
                        {characters.map(character => <Character key={character.id}
                                                                character={character}/>)}
                    </div>
                }
            </div>
            {totalPages !== 1 && !error ?
                <div className={css.buttons}>
                    <button disabled={!prev} onClick={prevPage}><i
                        className="fa-solid fa-chevron-left"></i></button>
                    <div className={css.page}>{query.get('page')}</div>
                    <button disabled={!next} onClick={nextPage}><i
                        className="fa-solid fa-chevron-right"></i></button>
                </div> : <span></span>}
        </div>

    )

}

export {Characters}