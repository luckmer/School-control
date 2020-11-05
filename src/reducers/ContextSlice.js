import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    OnOff: false,
    AddTask:false,
}

const ContextSlice = createSlice({
    name: "ContextSlice",
    initialState,
    reducers: {
        SetEditOn: (state, action) =>{
            const { data } = action.payload;
            let test = state.OnOff !== data ? true : false;
            state.OnOff = test;
        },
        SetAddTaskOn:(state,action)=>{
            const { data } = action.payload;
            let test = state.OnOff !== data ? true : false;
            state.AddTask = test;
        }
    },
});
export const { SetEditOn,SetAddTaskOn } = ContextSlice.actions;

export default ContextSlice.reducer;

