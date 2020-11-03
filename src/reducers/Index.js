import { combineReducers } from "redux";
import DeleteEditSlice from "./DeleteEditSlice";
import DarkModeSlice from "./DarkModeSlice"
import CreateNewTaskSlice from "./CreateNewTaskSlice"


const Index = combineReducers({
    DeleteEditSlice: DeleteEditSlice,
    DarkModeSlice: DarkModeSlice,
    CreateNewTaskSlice: CreateNewTaskSlice,
})

export default Index;