import { useContext } from "react";
import { StoreContext } from "../store/Store";
export default function DeleteEdit() {
    const {
        SOLUTION: [Solution],
    } = useContext(StoreContext);
    const { find } = Solution;


    return {  find };
}
