import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    page: 1,
    pageNumbers:[],
}

const PaginatingControlSlice = createSlice({
    name: "PaginatingControlSlice",
    initialState,
    reducers: {
        CreatePage: (state, action) =>
        {
            const { LimitControl } = action.payload;
            const page = state.page;
            const length = page * LimitControl
        }
    },
    Paginating :(state,action) =>{
        
    }
})


export default PaginatingControlSlice.reducer;