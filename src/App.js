import './App.css';
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {PostsPage, UsersPage} from "./pages";

function App() {
    return (
        <div>
           <Routes>
               <Route path={'/'} element={<MainLayout/>}>
                   <Route index element={<UsersPage/>}/>
                   <Route path={'/users'} element={<UsersPage/>}/>
                   <Route path={'/posts'} element={<PostsPage/>}/>
               </Route>
           </Routes>
        </div>
    );
}

export default App;
