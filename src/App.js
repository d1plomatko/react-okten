import logo from './logo.svg';
import './App.css';

import Users from "./components/Users/Users";
import Launches from "./components/Launches/Launches";

function App() {
    return (
        <div className="App">
            <h2>Users</h2>
            <Users/>

            <hr/>

            <h2>SpaceX launches</h2>
            <Launches/>

        </div>
    );
}

export default App;
