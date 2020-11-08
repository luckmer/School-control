import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    mode: "light",
}

const DarkModeSlice = createSlice({
    name: "colorMode",
    initialState,
    reducers:{
        ToggleMode:(state,action)=>{
            let Color = state.mode ==="light" ? "dark" : "light"
            state.mode = Color
        },
    },
});

export const { ToggleMode } = DarkModeSlice.actions;
export default DarkModeSlice.reducer;