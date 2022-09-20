export default function User(props){

    let {user, lift} = props

    return(
        <div>
            {user.id} - {user.name}
            <button onClick={() => {
                lift(user)
                console.log(user)
            }}>More info</button>
        </div>
    )

}