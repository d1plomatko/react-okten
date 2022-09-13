import {useState} from "react";
import Character from "../Character/Character";

export default function Characters(){

    let [characters, setCharacters] = useState([])

    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(value => {
                for (let valueKey in value) {
                    if (valueKey === 'results'){
                        setCharacters(value[valueKey].slice(0, 6))
                    }
                }

            }
        )

    return (
        <div className={'characters'}>
            {characters.map((character, index) => (<Character item = {character} key = {index}/>))}
        </div>
    )

}