import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {charactersService} from "../../services";

const initialState = {
    characters: [],
    error: null,
    prev: null,
    next: null,
    totalPages: 1
}

const getAll = createAsyncThunk(
    'characterSlice/getAll',
    async ({page, name}, {rejectWithValue}) => {
        try {
            const {data} = await charactersService.getAll(page, name);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const characterSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.characters = action.payload.results
                state.prev = action.payload.info.prev
                state.next = action.payload.info.next
                state.error = null
                state.totalPages = action.payload.info.pages
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
            })
});


const {reducer: charactersReducer} = characterSlice;

const charactersActions = {
    getAll
};

export {
    charactersActions,
    charactersReducer
};