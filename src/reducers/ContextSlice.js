import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    OnOff: false,
    AddTask:false,
    isEditing:false,
    Editing:false,
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
            let test = state.AddTask !== data ? true : false;
            state.AddTask = test;
        },
        IsEditing:(state,action)=>{
            const { data } = action.payload;
            let test = state.isEditing !== data ? true : false;
            state.isEditing = test;
        },
        Editing:(state,action) =>{
            const { data } = action.payload;
            let test = state.Editing !== data ? true : false;
            state.Editing = test;
        }
    },
});
export const { SetEditOn,SetAddTaskOn,IsEditing,Editing } = ContextSlice.actions;

export default ContextSlice.reducer;

