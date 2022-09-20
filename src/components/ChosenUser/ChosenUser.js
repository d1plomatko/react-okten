export default function ChosenUser(props){

    let {user} = props

    return(
        <div>
            <h3>User {user.id}</h3>
            <div>Name - {user.name}</div>
            <div>Username - {user.username}</div>
            <div>Email - {user.email}</div>
            <h5>Address</h5>
            <div>Street - {user.address.street}</div>
            <div>Suite - {user.address.suite} </div>
            <div>City - {user.address.city}</div>
            <div>Zipcode - {user.address.zipcode}</div>
            <h5>Geo</h5>

        </div>
    )

}