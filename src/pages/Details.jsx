import React from "react";
import styled from "styled-components";
import DetailsContext from "../components/DetailsContext";
import { useSelector } from "react-redux";
const Container = styled.div`
    padding: 15vh 15vw 0 15vw;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
`;

function Details({ match }){
    const { id } = match.params;
    const ApiDataView = useSelector(state =>
        state.CreateNewTaskSlice.Data.find(item => item.id === id));

    const { Subject, Teacher, Mark, Description } = ApiDataView;
    
    return (
        <Container>
        <DetailsContext
        key={id}
        id={id}
        subject={Subject}
        teacher={Teacher}
        mark={Mark}
        description={Description}
        />
        </Container>
    );
}

export default Details;


