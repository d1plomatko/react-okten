import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsService} from "../../services";

const initialState = {
    posts: []
};

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postsService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const postsSlice = createSlice({
        name: 'postsSlice',
        initialState,
        extraReducers: {
            [getAll.fulfilled]: (state, action) => {
                state.posts = action.payload
            }
        }
    }
);

const {reducer: postsReducer} = postsSlice;

const postActions = {
    getAll
};

export {
    postsReducer,
    postActions
}