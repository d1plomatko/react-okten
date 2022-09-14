export default function User(props){
    let {user} = props;

    return (
        <div>
            <p>{user.userId} - {user.id}</p>
            <p>{user.title} - {user.body}</p>
        </div>
    )
}