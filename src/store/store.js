import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from "./reducers/postSlice";
import numberReducer from "./reducers/numberSlice";
import useReducer  from "./reducers/userSlice";
import commentsSliceReducer from './reducers/commentSlice'

const store = configureStore({
  //configure store eken reducers okkom ekata ekatu krala eka reducer ekak hadana eka krnanwa
  reducer: {
    post: postSliceReducer, //initial state eka pass wenwa mekata postslice eken, but configurestore ekata okkom watenw
    number: numberReducer,
    user: useReducer,
    comments: commentsSliceReducer
  },
});


export default store;
