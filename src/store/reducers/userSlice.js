import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";


export const getUsers1 = createAsyncThunk("user/getUsers", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
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
  selectId: (user) => user.id,
});
const initialState = userState.getInitialState({
  loading: "idle",
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers1.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(getUsers1.fulfilled, (state, action) => {
      state.loading = "completed";
      if (action.payload.err === undefined) {
        userState.addMany(state, action.payload);
      } else {
        state.loading = "failed";
      }
    });
    builder.addCase(getUsers1.rejected, (state, action) => {
      state.console.error("some error");
    });
  },
});

export const { 
    selectAll: selectAllUsers, 
    selectById:selectByIdUsers, 
    selectEntities:selectEntitiesUsers, 
    selectTotal: selectTotalUsers, 
    selectIds: selectIdsUsers 
} =
  userState.getSelectors((store) => store.comments);
export default userSlice.reducer;
