
import './App.css';


import Users from "./components/Users/Users";
import Launches from "./components/Launches/Launches";
import {useState} from "react";
import {getUserPosts} from "./services/users.axio.services";
import Posts from "./components/Posts/Posts";


function App() {

    let [posts, setPosts] = useState([])
    let postsLift = (id) => {getUserPosts(id).then(({data}) => {setPosts(data)})}

    return (
        <div className="App">
            <h2>Users</h2>
            <Users postLift={postsLift}/>
            <div>{posts && <Posts posts={posts}/>}</div>

            <hr/>

            <h2>SpaceX launches</h2>
            <Launches />

        </div>
    );
}

export default App;
