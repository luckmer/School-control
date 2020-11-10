import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Data: [],
    filteredData: [],
    Context:[]
}
export const CreateNewTaskSlice = createSlice({
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
                ApiControl.data.data = newContext
            }
        },
    },
});

export default CreateNewTaskSlice.reducer;