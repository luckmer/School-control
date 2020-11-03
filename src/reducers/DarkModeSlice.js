import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    mode:"light",
}

const DarkModeSlice = createSlice({
    name: "colorMode",
    initialState,
    
    reducers:{},
})

export default DarkModeSlice.reducer;