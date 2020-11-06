import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Data: [],
    filteredData: [],
    Context:[]
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
                return { payload: data }
            },
        },
        DeleteTask: (state) =>{
            state.Data.splice(state, 1);
        },
        FilterData: (state, action) =>{
            const { data } = action.payload;
            state.filteredData = data
        },
        EditTask:(state,action)=>{
            const { id, newContext } = action.payload;
            const paymentId = state.Data.find((item)=>item.id === id)
            if (paymentId) {
                state.filteredData = newContext
            }
        },
    },
});

export const { CreateTask,DeleteTask,EditTask,FilterData } = CreateNewTaskSlice.actions;
export default CreateNewTaskSlice.reducer;