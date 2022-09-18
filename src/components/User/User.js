
export default function User(props){
    let {user, lift} = props
    return(


       <div className={'user'}>
           <p>{user.name}- {user.id}</p>
           <button onClick= {() => {
               lift(user)
           }}>More info</button>
       </div>

    )

}