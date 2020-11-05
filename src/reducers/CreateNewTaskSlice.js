import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Data:[]
}
const CreateNewTaskSlice = createSlice({
    name: "CreateNewTaskSlice",
    initialState,
    reducers: {
        CreateTask: {
            reducer: (state, action) => {
                state.Data.push(action.payload)
            },
            prepare: (data) => {
                return { payload: {data} }
            },
        },
        DeleteTask: (state) =>{
            state.Data.splice(state, 1);
        },
        EditTask:(state,action)=>{
            
        }
    },
});

export const { CreateTask,DeleteTask } = CreateNewTaskSlice.actions;
export default CreateNewTaskSlice.reducer;