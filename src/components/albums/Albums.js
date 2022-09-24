import {useEffect, useState} from "react";
import {placeholderServices} from "../../services";

import css from './Albums.module.css'
import Album from "../album/Album";

export function Albums(){

    let [albums, setAlbums] = useState([])

    useEffect(() => {
        placeholderServices.getAllAlbums().then(({data}) => setAlbums(data));
    },[])

    return(
        <div className={css.Albums}>
            {albums.map(album => <Album key = {album.id} album = {album}/>)}
        </div>
    )

}