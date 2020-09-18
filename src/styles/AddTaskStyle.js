import styled from "styled-components";
import colors from "./Colors";
export const Test = styled.div`
    transition: all 0.3s;
    color: black;
    z-index: 998;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-color: black;
    transition: all 1s;
`;
export const Context = styled.form`
    z-index: 998;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export const Card = styled.div`
    width: calc(20vw + 15em);
    background: ${colors.white};
    border-radius: 5px;
    @media screen and (max-width: 850px) {
        width: calc(80vw - 15px);
    }
`;
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2vh 2vw 2vh 2vw;
    font-size: 1.5rem;
    button {
        border: none;
        background: none;
    }
`;
export const TextAreaContext = styled.div`
    display: flex;
    margin: 0 40px 0 40px;
    flex-direction: column;
    input,
    textarea {
        resize: none;
        margin: 0 0 20px 0;
        display: block;
        width: 100%;
        font-size: 20px;
        line-height: 1.5;
        color: ${colors.GreyBlue};
        background-color: ${colors.white};
        border: 1px solid ${colors.WhiteBlue};
        border-radius: 0.25rem;
    }
    textarea {
        width: 100%;
    }
    select {
        width: 100%;
        border: none;
        border: 1px solid ${colors.WhiteBlue};
        font-size: 20px;
    }
`;
export const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    button {
        margin: 10px 10px 10px 10px;
        border: none;
        text-align: center;
        border-radius: 5px;
        background-color: ${colors.lightBlue};
        color: white;
        &:first-child {
            background-color: ${colors.Blue};
        }
    }
    @media screen and (max-width: 850px) {
        justify-content: center;
    }
`;
