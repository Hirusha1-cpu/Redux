import { configureStore } from "@reduxjs/toolkit"
import cartSliceReducer from "./reducers/cartSlice";
import laptopSliceReducer from "./reducers/laptopSlice";

const store = configureStore({
    reducer:{

        cart: cartSliceReducer,
        laptop: laptopSliceReducer
    }
})

export default store;