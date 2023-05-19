import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState = [
  {
    id: 1,

    price: 250000,
    spec: {
      cpu: "i3",
      gen: "13",
      ram: "8GB",
      hdd: "4GB",
    },
  },
];
const laptopSlice = createSlice({
  name: "laptop",
  initialState,
  reducers: {
    addLaptop: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (price, cpu, gen, ram, hdd) => {
        return {
          payload: {
            id: nanoid(),
            price,
            spec: {
              cpu,
              gen,
              ram,
              hdd,

            },
          },
        };
      },
    },
    // remLaptop: (state, action)=>({
    //     count: state.count - action.payload

    // })
  },
});

export default laptopSlice.reducer;
export const laptopSliceSelector = (store) => store.laptopSlice;
export const { addLaptop } = laptopSlice.actions;
