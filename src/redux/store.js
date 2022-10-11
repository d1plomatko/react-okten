import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

import {charactersReducer} from "./slices";

const rootReducer = combineReducers({
    charactersReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};