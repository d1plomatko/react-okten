import css from './Character.module.css'

const Character = ({character}) => {

    return (
        <div className={css.character}>
            <div className={css.main}>
                <img src={character.image} alt={character.name}/>
                <h3>{character.name}</h3>
                <div>Species - {character.species}</div>
            </div>
            <button>More info</button>
            {character.status === 'Alive'?<div className={css.alive}>{character.status}</div>: character.status === 'Dead'? <div className={css.dead}>{character.status}</div> : <div className={css.unknown}>{character.status}</div> }
        </div>
    )

}

export {Character}