import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,

};

const number2Slice = createSlice({
  // this creates a slice and action too
  name: "number",
  initialState,
  reducers: {
    increment: (state, action) => ({
      number: state.number + action.payload,
    }),
    decrement: (state, action) => ({
      number: state.number - action.payload,
    }),
  },
});

export const { increment, decrement } = number2Slice.actions;

export default number2Slice.reducer; //ekai gnne reducers walin eka hinda thama me reducer kiyla witrk danne
// mewain eka reducer kenek generate wenawa
