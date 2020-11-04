import React from "react";
import styled from "styled-components";
//import { StoreContext } from "../store/Store";
import DetailsContext from "../components/DetailsContext";
//import { DeleteEdit } from "../Imports/Index";
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
        state.CreateNewTaskSlice.Data.find(({ data }) =>
            data.id === id
        ));
    
    const MappingDataView = ApiDataView.data

    // const {
    //     DATA: [table],
    //     DETAILS: [Detail, setDetail],
    // } = useContext(StoreContext);

    // useEffect(() => {
    //     const projectId = table.data.filter((el) => el.id === match.params.id);
    //     setDetail({ DetailContext: projectId });
    // }, [match.params.id, table.data, setDetail]);
    // const { Edit } = DeleteEdit();

    // const { DetailContext } = Detail;
    const { Subject, Teacher, Mark, Description} = MappingDataView;
    return (
        <Container>
            <DetailsContext
                key={id}
                id={id}
                subject={Subject}
                teacher={Teacher}
                mark={Mark}
                description={Description}
                //Edit={Edit}
            />
        </Container>
    );
}

export default Details;
