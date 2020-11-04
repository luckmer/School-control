import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    state: false,
    add:false,
};

const OnOffSlice = createSlice({
    name: "OnOffSlice",
    initialState,
    reducers: {
    },
    
})



export const { SetAddOnOff } = OnOffSlice.actions;
export default OnOffSlice.reducer;