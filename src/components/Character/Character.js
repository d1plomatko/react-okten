export default function Character(props){
    let {item : character} = props
    return (
        <div className={'character'}>
            {/*id,name,status,species,gender,image*/}
            <h2>{character.id} {character.name}</h2>
            <p>Status - {character.status}</p>
            <p>Species - {character.species}</p>
            <p>Gender - {character.gender}</p>
            <img src={character.image} alt={character.name}/>
        </div>
    )

}