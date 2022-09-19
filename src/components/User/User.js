

export default function User(props){
    let {user, lift, postLift} = props

    return(

       <div className={'user'}>
           <p>{user.name}- {user.id}</p>
           <button onClick= {() => {
               lift(user)
           }}>More info</button>
           <button onClick={() => {
                postLift(user.id)
           }}>Posts</button>

       </div>

    )

}