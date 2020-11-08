import { combineReducers } from "redux";
import DarkModeSlice from "./DarkModeSlice"
import CreateNewTaskSlice from "./CreateNewTaskSlice"
import ContextSlice from "./ContextSlice";

const Index = combineReducers({
    ContextSlice:ContextSlice,
    colorMode: DarkModeSlice,
    CreateNewTaskSlice: CreateNewTaskSlice,
});

export default Index;