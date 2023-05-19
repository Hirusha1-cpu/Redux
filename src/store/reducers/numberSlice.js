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

const numberSlice = createSlice({
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

export const { increment, decrement } = numberSlice.actions;
export const numberSliceSelector = (store) => store.numberSlice.number
export default numberSlice.reducer; //ekai gnne reducers walin eka hinda thama me reducer kiyla witrk danne
// mewain eka reducer kenek generate wenawa
