import { combineReducers } from "redux";
import DeleteEditSlice from "./DeleteEditSlice";
import DarkModeSlice from "./DarkModeSlice"
import CreateNewTaskSlice from "./CreateNewTaskSlice"
import OnOffSlice from "../reducers/OnOffSlice";

const Index = combineReducers({
    OnOffSlice:OnOffSlice,
    DeleteEditSlice: DeleteEditSlice,
    DarkModeSlice: DarkModeSlice,
    CreateNewTaskSlice: CreateNewTaskSlice,
})

export default Index;