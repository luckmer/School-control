import { useEffect } from "react";

function NavFilter(Mapping, finder, setData)
{
    useEffect(() =>
    {
        let filterS = Mapping.slice();
        if (finder.filterMark) {
            filterS = filterS.filter((item) => item.Mark
                .toLowerCase()
                .includes(
                    finder.filterMark
                        .toLowerCase()
                        .trim()
                )
            );
        }

        if (finder.filterSubject) {
            filterS = filterS.filter((item) => item.Subject
                .toLowerCase()
                .includes(
                    finder.filterSubject
                        .toLowerCase()
                        .trim()
                )
            );
        }
        setData(filterS);
    }, [Mapping, finder.filterMark, finder.filterSubject,setData]);
}


export default NavFilter;
