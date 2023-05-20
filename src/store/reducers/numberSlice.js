import { createAction, createAsyncThunk, createReducer ,createSelector} from "@reduxjs/toolkit"

const initialState = {
    number: 0,
    users:[]
}
export const increment = createAction('number-increment',(name, value, city)=>{
    return {
        payload:{
            name,
            value,
            city
        }
    }
})
export const decrement = createAction('number-decrement')
export const getUsers = createAsyncThunk('number/getUsers', async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    if(Array.isArray(data)){
        return data;
    }else{
        return {err:'some error'}
    }
})

const numberReducer = createReducer(initialState, (builder)=> {
    builder.addCase(increment,(state, action)=>{
        state.number += action.payload.value
    }).addCase(decrement, (state, action)=>{
        state.number -= action.payload.value
    
    }).addCase(getUsers.pending, (state, action)=>{
        state.loading = "pending";
    }).addCase(getUsers.fulfilled, (state, action)=>{
        state.users = action.payload;
        state.loading = "successfull";
        state.error = null;

    }).addCase(getUsers.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = "error";
      });


})

const numberSel = (store)=> {
   
    return store.number.number
};



export const numberSelector = createSelector([numberSel],(num)=>{ // post sel eke target krala thyena thana witrak wenas unot me function eka trigger krnna
    console.log("number is running");
    return num;
})
export default numberReducer;