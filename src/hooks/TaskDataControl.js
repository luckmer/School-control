import { useState } from "react";
import { nanoid } from "nanoid";
import { CreateTask } from "../actions/CreateTask";
import { useDispatch } from "react-redux";

export const TaskDataControl = () => {
    const initialState = {
        id: nanoid(),
        Subject: "",
        Teacher: "",
        Mark: "",
        Description: "",
    };
    const dispatch = useDispatch();

    const [state, setState] = useState(initialState);
    const { Subject, Teacher, Mark, Description } = state;

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleUpload = () => {
        const Next = {
            id: nanoid(),
            Subject: Subject,
            Teacher: Teacher,
            Mark: Mark,
            Description: Description,
        };
        dispatch(CreateTask({data : Next}));
        setState({
            Subject: "",
            Teacher: "",
            Mark: "",
            Description: "",
        });
    };
    return { handleUpload, handleChange, state };
}
