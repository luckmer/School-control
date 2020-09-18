import { useContext } from "react";
import { StoreContext } from "../store/Store";
import { nanoid } from "nanoid";

export function TaskDataControl() {
    const {
        DATA: [table, setTable],
        TEXT: [state, setState],
    } = useContext(StoreContext);
    const { Subject, Teacher, Mark, Description } = state;

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleUpload = () => {
        const { data } = table;
        const Next = {
            id: nanoid(),
            Subject: Subject,
            Teacher: Teacher,
            Mark: Mark,
            Description: Description,
        };
        const test = data.concat(Next);
        setTable({ data: test });
        setState({
            Subject: "",
            Teacher: "",
            Mark: "",
            Description: "",
        });
    };
    return { handleUpload, handleChange, state };
}
