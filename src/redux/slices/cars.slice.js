import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carsService} from "../../services";

const initialState = {
    cars: [],
    carToUpdate: null
};


const getAll = createAsyncThunk(
    'carsSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carsService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const create = createAsyncThunk(
    'carsSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carsService.create(car);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id}, {rejectWithValue}) => {
        try {
            await carsService.deleteById(id);
            return id
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const updateById = createAsyncThunk(
    'carsSlice/updateById',
    async ({car, id}, {rejectWithValue}) => {
        try {
            const {data} = await carsService.updateById(id, car);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setCarToUpdate: (state, action) => {
            state.carToUpdate = action.payload
        }
    },
    extraReducers: {
        [getAll.fulfilled]: (state, action) => {
            state.cars = action.payload
        },
        [create.fulfilled]: (state, action) => {
            state.cars = [...state.cars, action.payload]
        },
        [deleteById.fulfilled]: (state, action) => {
            const filteredCars = state.cars.filter(car => car.id !== action.payload);
            state.cars = [...filteredCars]
        },
        [updateById.fulfilled]: (state, action) => {
            const findCar = state.cars.find(car => car.id === action.payload.id)
            Object.assign(findCar, action.payload)
            state.carToUpdate = null
            state.cars = [...state.cars]
        }
    }
});

const {reducer: carsReducer, actions: {setCarToUpdate}} = carsSlice;

const carsActions = {
    setCarToUpdate,
    getAll,
    create,
    deleteById,
    updateById
};

export {
    carsReducer,
    carsActions
};