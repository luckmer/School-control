import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    mode: "light",
}

export const DarkModeSlice = createSlice({
    name: "colorMode",
    initialState,
    reducers:{
        ToggleMode:(state)=>{
            let Color = state.mode ==="light" ? "dark" : "light"
            state.mode = Color
        },
    },
});

export default DarkModeSlice.reducer;