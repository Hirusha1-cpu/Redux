import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    { 
        id:2,
        price: 12000,
        cpu: 'i3',
        ram: '2GB'

    },
    { 
        id:3,
        price: 13000,
        cpu: 'i3',
        ram: '3GB'

    },
    { 
        id:4,
        price: 14000,
        cpu: 'i5',
        ram: '4GB'

    },
    { 
        id:5,
        price: 15000,
        cpu: 'i7',
        ram: '8GB'

    },
]


const laptopSlice = createSlice({
    name: 'laptop',
    initialState,
    reducers:{
        addLaptop: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const selectLaptop = (store)=> store.laptop
export const { addLaptop } = laptopSlice.actions;
export default laptopSlice.reducer;


