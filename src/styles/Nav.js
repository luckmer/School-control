import styled from "styled-components";
import { navModeView, color } from "./Box";
import colors from "./Colors";
export const Container = styled.div`
    z-index: 996;
    position: fixed;
    background: ${navModeView};
    box-shadow: -6px 1px 11px rgba(0, 0, 0, 0.25);
    width: 100%;
    top: 0;
    left: 0;
`;
export const Context = styled.div`
    font-size: 15px;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    input {
        color: ${color};
        background: ${navModeView};
        border-radius: 6px;
    }
    ul {
        margin: 10px 10px 10px 10px;
        list-style: none;
        color: ${color};
        font-weight: bold;
    }
    a {
        color: ${color};
    }
    li {
        margin: 0 5px 0 5px;
        font-style: bold;
        font-weight: bold;
        font-size: 20px;
        line-height: 25px;
    }
    @media screen and (max-width: 850px) {
        position: fixed;
        color: ${colors.Dark};
        transform: ${({ state }) =>
            !state ? "translateX(100%)" : "translateX(0)"};
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        font-size: 20px;
        transition: transform 0.3s ease-in-out;
        background-color: ${navModeView};
        div {
            flex-direction: column;
            height: 100%;
            justify-content: center;
        }
    }
`;

export const Mobile = styled.div`
    display: none;
    @media (max-width: 850px) {
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-flow: column;
        width: 5em;
        height: 3em;
        position: fixed;
        top: 15px;
        right: 20px;
        z-index: 999;
        div {
            &:first-child {
                opacity: ${({ state }) => (!state ? 1 : 0)};
            }
            transform: ${({ state }) =>
                !state ? "rotate(0deg)" : "rotate(90deg)"};
            background-color: ${({ state }) => (state ? "blue" : " grey")};
            width: 30px;
            height: 4px;
            transition: all 0.5s ease;
        }
    }
`;

export const Button = styled.button`
    border: none;
    padding: 10px 20px 10px 20px;
    color: ${color};
    font-weight: bold;
    font-size: 18px;
    background: none;
    border-radius: 6px;
`;
