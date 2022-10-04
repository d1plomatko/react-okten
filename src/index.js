import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";


const usersReducer = (state = {users: []}, action) => {
    switch (action.type) {
        case 'getUsers':
            return {
                ...state,
                users: action.payload
            };

        default:
            return state;
    }
};


const postsReducer = (state = {posts: [], post: null}, action) => {
    switch (action.type) {
        case 'getPosts':
            return {
                ...state,
                posts: action.payload
            }

        default:
            return state
    }
};

const commentsReducer = (state = {comments: []}, action) => {
    switch (action.type) {
        case 'getComments' :
            return {
                ...state,
                comments: action.payload
            };
        default:
            return state

    }
};

const reducers = combineReducers({
    usersReducer,
    postsReducer,
    commentsReducer
})

const store = createStore(reducers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
