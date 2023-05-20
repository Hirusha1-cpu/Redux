import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";

const postState = createEntityAdapter({
    selectId: (ele) => ele.id // element wla thyena id tika witrak select karala denawa
})

const initialState = postState.getInitialState( // create entity adapter eken hadala dena initial state eka ganna puluwan
    {
          loading: "ideal", //pending , successfull status // optional data , create adapter eken dena initial state ekata amatarawa
          error: null,
    }
 )

// createentity adapter eke me widhata thama initial state eka thyenne 
//  {
//     // The unique IDs of each item. Must be strings or numbers
//     ids: []
//     // A lookup table mapping entity IDs to the corresponding entity objects
//     entities: {
//     }
//   }


// const initialState = {
//   data: [],
//   loading: "ideal", //pending , successfull status
//   error: null,
// };

export const getPost = createAsyncThunk("getPost", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
    if (data) {
      return data;
    } else {
      return { err: "some error" };
    }

});

const postSlice = createSlice({
  name: "post slice",
  initialState,
  reducers: {
    // updatePost:(state,action)=>{
    //     postState.updateOne(state,action.payload)
    // }
    updatePost: postState.updateOne // auto hadala denwa updatepost eka
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPost.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(getPost.fulfilled, (state, action) => {
        //state.data = action.payload;
        state.loading = "successfull";
        postState.addMany(state, action.payload);
        state.error = null;
      })
      .addCase(getPost.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = "error";
      });
  },
});

// export const selectAllPost = (store)=>{
//     return store.post
// }
export const {
    selectIds,
    selectAll,
    selectById,
    selectEntities,
    selectTotal

} = postState.getSelectors((store)=> store.post)

export const selectPostLoading = createSelector(
    [ store => store.post.loading],
    (loading)=>loading)
// export const selectAllPost = createSelector([postSel],(post)=>{
//     console.log('post Running');
//     return post;
// })
export default postSlice.reducer;
// export const selectAllPost = (store) =>{
//     console.log('post running');
//     return store.post
// };
export const {updatePost} = postSlice.actions;