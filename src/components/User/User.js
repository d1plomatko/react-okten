import css from "./User.module.css"

export default function User({user}){

    return(
        <div className={css.User}>
            {user.id} - {user.name}
        </div>
    )

}