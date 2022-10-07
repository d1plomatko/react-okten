import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersService} from "../../services";

const initialState = {
    users: [],
    currentUser: null
};

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await usersService.getAll();
            return data
        } catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        }
    },
    extraReducers: {
        [getAll.fulfilled] : (state, action) => {
            state.users = action.payload
        }
    }
});

const {reducer: usersReducer, actions: {setCurrentUser}} = userSlice;

const userActions = {
    getAll,
    setCurrentUser
};

export {
    usersReducer,
    userActions
};