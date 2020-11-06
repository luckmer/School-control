import { useContext, useEffect } from "react";
import { StoreContext } from "../store/Store";
import { useSelector } from "react-redux";
import { FilterData } from "../reducers/CreateNewTaskSlice";
import { useDispatch } from "react-redux";
export default function NavFilter(finder)
{
    const dispatch = useDispatch()
    const {
        DATA: [table, setTable],
        SOLUTION: [, setSolution],
    } = useContext(StoreContext);

    const state = useSelector(state => state.CreateNewTaskSlice.Data);
    useEffect(() => {
        let filterS = state.slice();
        if (finder.filterMark) {
            filterS = filterS.filter((item) =>
                item.Mark.toLowerCase().includes(
                    finder.filterMark.toLowerCase()
                )
            );
        }

        if (finder.filterSubject) {
            filterS = filterS.filter((item) =>
                item.Subject.toLowerCase().includes(
                    finder.filterSubject.toLowerCase()
                )
            );
        }
        dispatch(FilterData({data: filterS}))
    }, [table,setTable,setSolution,dispatch,finder.filterMark,state,finder.filterSubject]);
}
