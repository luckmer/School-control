import { useContext } from "react";
import { StoreContext } from "../store/Store";
export default function DeleteEdit() {
    const {
        DATA: [table, setTable],
        SOLUTION: [Solution],
    } = useContext(StoreContext);
    const { data } = table;
    const { find } = Solution;

    const Delete = (id) => {
        const clear = data.filter((task) => id !== task.id);
        setTable({ data: clear });
    };

    const Edit = (id, newName) => {
        const newTableList = data.map((task) => {
            if (id === task.id) {
                return {
                    ...task,
                    Subject: newName.Subject,
                    Teacher: newName.Teacher,
                    Mark: newName.Mark,
                    Description: newName.Description,
                };
            }
            return task;
        });
        setTable({ data: newTableList });
    };
    return { Delete, Edit, find };
}
