import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";


export const getComments = createAsyncThunk("getComments", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.json();
  
    if (Array.isArray(data)) {
      return data;
    } else {
      return {
        err: "some error",
      };
    }
  });

  const userState = createEntityAdapter({
    selectId: (ele) => ele.id,
  });
  const initialState = userState.getInitialState({
    loading: "idle",
  });

  const commentSlice = createSlice({
    name: "comment slice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getComments.pending, (state, action) => {
        state.loading = "pending";
      });
      builder.addCase(getComments.fulfilled, (state, action) => {
        state.loading = "completed";
        if (action.payload.err === undefined) {
          userState.addMany(state, action.payload);
        } else {
          state.loading = "failed";
        }
      });
      builder.addCase(getComments.rejected, (state, action) => {
        state.console.error("some error");
      });
    },
  });

  export const { 
    selectAll: selectAllComments, 
    selectById:selectByIdComments, 
    selectEntities:selectEntitiesComments, 
    selectTotal: selectTotalComments, 
    selectIds: selectIdsComments} =
  userState.getSelectors((store) => store.comments);
export default commentSlice.reducer;