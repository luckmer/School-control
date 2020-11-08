import { useEffect } from "react";
import { useSelector } from "react-redux";
import { FilterData } from "../reducers/CreateNewTaskSlice";
import { useDispatch } from "react-redux";
export default function NavFilter(finder)
{
    const dispatch = useDispatch()

    const state = useSelector(state => state.CreateNewTaskSlice.Data);
    useEffect(() => {
        let filterS = state.slice();
        if (finder.filterMark) {
            filterS = filterS.filter((item) =>
                item.Mark.toLowerCase()
                    .includes(
                        finder.filterMark
                            .toLowerCase()
                            .trim()
                )
            );
        }

        if (finder.filterSubject) {
            filterS = filterS.filter((item) =>
                item.Subject.toLowerCase()
                    .includes(
                    finder.filterSubject
                        .toLowerCase()
                        .trim()
                )
            );
        }
        dispatch(FilterData({data: filterS}))
    }, [dispatch,finder.filterMark,state,finder.filterSubject]);
}
