import css from "./Album.module.css"

export default function Album({album}){

    return(
        <div className={css.Album}>
            <div>ID - {album.id}</div>
            <div>Title - {album.title}</div>
        </div>
    )

}