import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    OnOff: false,
}

const ContextSlice = createSlice({
    name: "ContextSlice",
    initialState,
    reducers: {
        SetEditOn: (state, action) =>
        {
            const { data } = action.payload;
            let test = state.OnOff !== data ? true : false;
            state.OnOff = test;
        }
    },
});
export const { SetEditOn } = ContextSlice.actions;

export default ContextSlice.reducer;

