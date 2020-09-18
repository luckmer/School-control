import { useContext, useEffect } from "react";
import { StoreContext } from "../store/Store";

export default function NavFilter(finder, test) {
    const {
        DATA: [table, setTable],
        SOLUTION: [, setSolution],
    } = useContext(StoreContext);

    useEffect(() => {
        let filterS = table.data.slice();

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

        setSolution({ find: filterS });
    }, [finder, setTable, table.data, setSolution, test]);
}
