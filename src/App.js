import './App.css';
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CharactersPage} from "./pages";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'/characters'} element={<CharactersPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
