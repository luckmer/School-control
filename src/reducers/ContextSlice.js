import { createSlice } from "@reduxjs/toolkit";


const initialState = false;

const ContextSlice = createSlice({
    name: "ContextSlice",
    initialState,
    reducers: {
        SetEditOn :{}
    },
});

export default ContextSlice.reducer;