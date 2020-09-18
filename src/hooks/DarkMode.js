import { useEffect, useState } from "react";

export default function DarkMode() {
    const [type, setType] = useState({
        mode: "light",
    });
    const Color = type.mode;

    useEffect(() => {
        const store = JSON.parse(localStorage.getItem("color"));
        if (store) setType(store);
    }, []);

    useEffect(() => {
        localStorage.setItem("color", JSON.stringify(type));
    }, [type]);

    const toggleChange = () => {
        setType({ mode: Color === "light" ? "dark" : "light" });
    };
    return { Color, toggleChange };
}
