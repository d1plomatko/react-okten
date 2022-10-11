import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {charactersService} from "../../services";

const initialState = {
    characters: [],
    error: null,
    prev: null,
    next: null,
    currentPage: '1'
}

const getAll = createAsyncThunk(
    'characterSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await charactersService.getAll(page);
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
    reducers: {
      setCurrentPage: (state, action) => {
          state.currentPage = action.payload
      }
    },
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


const {reducer: charactersReducer, actions: {setCurrentPage}} = characterSlice;

const charactersActions = {
    getAll,
    setCurrentPage
};

export {
    charactersActions,
    charactersReducer
};