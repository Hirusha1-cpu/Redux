import {configureStore} from "@reduxjs/toolkit"
import numberSliceReducer from "./reducers/numberSlice"
import number2SliceReducer from "./reducers/number2Slice"
import laptopSliceReducer from './reducers/laptopSlice2'

const store = configureStore({
    reducer:{
        numberSlice: numberSliceReducer,
        numbre2Slice : number2SliceReducer,
        laptopSlice: laptopSliceReducer
    },
});


export default store;