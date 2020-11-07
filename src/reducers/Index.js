import { combineReducers } from "redux";
import DarkModeSlice from "./DarkModeSlice"
import CreateNewTaskSlice from "./CreateNewTaskSlice"
import ContextSlice from "./ContextSlice";
import PaginatingControlSlice from "./PaginatingControlSlice"
const Index = combineReducers({
    ContextSlice:ContextSlice,
    colorMode: DarkModeSlice,
    CreateNewTaskSlice: CreateNewTaskSlice,
    PaginatingControlSlice:PaginatingControlSlice
});

export default Index;