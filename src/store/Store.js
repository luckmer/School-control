import React, { createContext, useState, useEffect } from "react";
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

    useEffect(() => {
        const store = JSON.parse(localStorage.getItem("DATAContext"));
        if (store) setTable(store);
    }, []);

    useEffect(() => {
        localStorage.setItem("DATAContext", JSON.stringify(table));
    }, [table]);

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};
