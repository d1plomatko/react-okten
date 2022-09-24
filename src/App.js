import './App.css';
import {Link, Route, Routes} from "react-router-dom";

import {Todos, Albums, Comments, Post, Home} from './components'

function App() {
    return (
        <div className={'container'}>
            <div className={'menu'}>
                <h3>JSON Placeholder</h3>
                <ul className={'nav'}>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/todos'} >Todos</Link></li>
                    <li><Link to={'/albums'}>Albums</Link></li>
                    <li><Link to={'/comments'}>Comments</Link></li>
                </ul>
            </div>

            <hr/>

            <div>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path={'todos'} element = {<Todos/>}/>
                    <Route path={'albums'} element = {<Albums/>}/>
                    <Route path={'comments'} element = {<Comments/>}/>
                    <Route path={'posts/:id'} element = {<Post/>}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;
