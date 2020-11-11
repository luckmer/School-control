import styled from "styled-components";
import { color, navModeView } from "../styles/Box";

export const Container = styled.div`
    color: ${ color };
    width: 100%;
    height: calc(100% - 2em);
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Card = styled.div`
    width: 100%;
    height: 40em;
    border-radius: 5px;
`;
export const Header = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 10px 20px 10px 20px;
    align-items: center;
`;
export const Description = styled.div`
    cursor: pointer;
    display: flex;
    min-height: 30vh;
    border-radius: 5px;
    justify-content: center;
    padding: 10px 20px 10px 20px;
    align-items: center;
    background-color: ${ navModeView };
`;
