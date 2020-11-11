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

const  Details = ({ match }) => {
    const test = match.params.id

    const ApiDataView = useSelector(state =>
        state.CreateNewTaskSlice.Data.find(({ data }) => data.data.id === test));
    
    const { Subject, Teacher, Mark, Description, id } = ApiDataView.data.data;
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


