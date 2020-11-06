import React, { createContext, useState } from "react";
import { nanoid } from "nanoid";

export const StoreContext = createContext();

export default ({ children }) => {
    const initialState = {
        id: nanoid(),
        Subject: "",
        Teacher: "",
        Mark: "",
        Description: "",
    };

    const [state, setState] = useState(initialState);
    const [table, setTable] = useState({
        data: [],
    });
    const [Solution, setSolution] = useState({
        find: [],
    });

    const [Detail, setDetail] = useState({
        DetailContext: [],
    });

    const store = {
        TEXT: [state, setState],
        DATA: [table, setTable],
        SOLUTION: [Solution, setSolution],
        DETAILS: [Detail, setDetail],
    };



    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};
