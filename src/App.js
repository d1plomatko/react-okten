import {Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {CharactersPage, HomePage} from "./pages";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/characters'} element={<CharactersPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
