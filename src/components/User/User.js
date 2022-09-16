export default function User(props){
    let {user} = props
    return(
       <div>
           <div></div>
           <div>
               <p>{user.name}- {user.id}</p>
               <button>More info</button>
           </div>
       </div>
    )

}