
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CommentsPage, PostsPage, UserDetailsPage, UsersPage} from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'/users'}/>}/>
          <Route path={'/users'} element={<UsersPage/>}/>
          <Route path={'/users/:userId'} element={<UserDetailsPage/>}/>
          <Route path={'/posts'} element={<PostsPage/>}/>
          <Route path={'/comments'} element={<CommentsPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
