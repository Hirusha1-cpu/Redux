import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
  computers: [],
};
const reducerGen = (key = "number", oparator = "+") => {
  if (oparator === "+") {
    return (state, action) => {
      state[key] += action.payload;
    };
  } else if (oparator === "-") {
    return (state, action) => {
      state[key] -= action.payload;
    };
  }
};

const number3Slice = createSlice({
  // this creates a slice and action too
  name: "number",
  initialState,
  reducers: {
    // increment: (state, action) => ({
    //   number: state.number + action.payload,
    // }),
    increment: reducerGen(),
    // decrement: (state, action) => ({
    //   number: state.number - action.payload,
    // }),
    decrement: reducerGen("number", "-"),
  },
});

export const { increment, decrement } = number3Slice.actions;
export const numberSliceSelector = (store) => store.numberSlice.number
export default number3Slice.reducer; //ekai gnne reducers walin eka hinda thama me reducer kiyla witrk danne
// mewain eka reducer kenek generate wenawa
