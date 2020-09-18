import { createGlobalStyle } from "styled-components";
import { background } from "./Box";
const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }
    html,body{
        overflow-x:hidden;
        width:100vw;
        height:100vh;
        background:${background};
    }
    .card{
        cursor: pointer;
        width:18rem;
        margin:1vh 1vw 1vh 1vw;
        @media screen and (max-width: 550px) {
            width: calc(100vw - 2em);
        }
    }
`;

export default GlobalStyle;
