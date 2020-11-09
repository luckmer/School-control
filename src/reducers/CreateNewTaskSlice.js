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
                return {
                    payload: {
                        data
                    }
                }
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
            const { id, newContext } = action.payload 
            let ApiControl = state.Data.find(({ data }) => data.data.id === id);
            if (ApiControl) {
                let test = ApiControl.data.data = newContext

                console.log(test)
            }
        },
    },
});

export const { CreateTask,DeleteTask,EditTask,FilterData } = CreateNewTaskSlice.actions;
export default CreateNewTaskSlice.reducer;