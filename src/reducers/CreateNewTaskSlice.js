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
    },
});

export const { CreateTask } = CreateNewTaskSlice.actions;
export default CreateNewTaskSlice.reducer;