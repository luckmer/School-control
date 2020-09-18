import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

function NotFound() {
    return (
        <Container>
            <h1>Not Found</h1>
            <Link to="/">
                <p>Home </p>
            </Link>
        </Container>
    );
}

export default NotFound;
