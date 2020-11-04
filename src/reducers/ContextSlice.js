import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    OnOff: false,
}

const ContextSlice = createSlice({
    name: "ContextSlice",
    initialState,
    reducers: {
        SetEditOn: (state) =>{
            
        }
    },
});

export default ContextSlice.reducer;


// case 'TOGGLE_TODO':
//     return state.map(todo =>
//       todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
//     )