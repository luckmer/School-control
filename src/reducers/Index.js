import { combineReducers } from "redux";
import DeleteEditSlice from "./DeleteEditSlice";
import DarkModeSlice from "./DarkModeSlice"
import CreateNewTaskSlice from "./CreateNewTaskSlice"
import ContextSlice from "./ContextSlice";

const Index = combineReducers({
    ContextSlice:ContextSlice,
    DeleteEditSlice: DeleteEditSlice,
    DarkModeSlice: DarkModeSlice,
    CreateNewTaskSlice: CreateNewTaskSlice,
})

export default Index;