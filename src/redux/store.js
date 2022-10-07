import {combineReducers} from "redux";

import {usersReducer, postsReducer} from "./slices";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    usersReducer,
    postsReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}
