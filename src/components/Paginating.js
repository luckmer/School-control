import React from "react";
import styled from "styled-components";

const Container = styled.section`
    transition: all 0.3s;

    margin: 30px 0 0 0;
    padding: 0 20px 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Div = styled.div`
    display: flex;
    button {
        padding: 5px 10px 5px 10px;
        border: none;
        background-color: #ebecf0;
        color: #030303;
        transition: 0.3s ease;
        &:hover {
            background-color: #030303;
            color: white;
        }
    }
`;

const Paginating = ({ paginate, LimitControl, totalPosts }) =>{
    
    const pageNumbers = [];
    const PageLength = Math.ceil(totalPosts / LimitControl);
    for (let i = 1; i <= PageLength; i++) {
        pageNumbers.push(i);
    }

    return (
        <Container>
            <Div>
                {pageNumbers.map((number) => (
                    <div onClick={() => paginate(number)} key={number}>
                        <button>{number}</button>
                    </div>
                ))}
            </Div>
        </Container>
    );
};

export default Paginating;