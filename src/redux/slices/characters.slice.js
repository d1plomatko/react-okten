import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {charactersService} from "../../services";

const initialState = {
    characters: [],
    error: null,
    prev: null,
    next: null
}

const getAll = createAsyncThunk(
    'characterSlice/getAll',
    async ({query}, {rejectWithValue}) => {
        try {
            const {data} = await charactersService.getAll(query);
            console.log(data.info)
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
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
            })
});

const charactersActions = {
    getAll
};

const {reducer: charactersReducer} = characterSlice;

export {
    charactersActions,
    charactersReducer
};