import styled from "styled-components";
import colors from "./Colors";
export const Container = styled.div`
    transition: all 0.2s;
    padding: 15vh 15vw 0 15vw;
    min-height: 100vh;
    width: 100vw;
    @media screen and (max-width: 550px) {
        padding: 15vh 0 0 0;
    }
    @media screen and (max-width: 768px) {
        padding: 15vh 10vw 0 10vw;
    }
`;

export const Cards = styled.div`
    transition: all 1s;
    display: flex;
    flex-flow: wrap;
    margin: 0 0 0 0;
    @media screen and (max-width: 550px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Finder = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin: 0 0 30px 0;

    opacity: ${({ page }) => (page >= 2 ? 0 : 1)};

    input,
    select {
        width: 140px;
        height: 35px;
        border: 1px solid ${colors.Dark};
    }
    select {
        color: ${colors.Dark};
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        transition: 0.3s ease;
        &:hover {
            background-color: ${colors.Dark};
            color: white;
        }
    }
    @media screen and (max-width: 850px) {
        justify-content: center;
    }
`;
