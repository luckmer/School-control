import React from "react";
import EditName from "../components/Edit";
import styled from "styled-components";
import { color, navModeView } from "../styles/Box";
import { useDispatch,useSelector } from "react-redux";
import { Editing } from "../reducers/ContextSlice";

const Container = styled.div`
    color: ${color};
    width: 100%;
    height: calc(100% - 2em);
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Card = styled.div`
    width: 100%;
    height: 40em;
    border-radius: 5px;
`;

const Header = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 10px 20px 10px 20px;
    align-items: center;
`;

const Description = styled.div`
    cursor: pointer;
    display: flex;
    min-height: 30vh;
    border-radius: 5px;
    justify-content: center;
    padding: 10px 20px 10px 20px;
    align-items: center;
    background-color: ${navModeView};
`;


function DetailsContext(props)
{
    const dispatch = useDispatch();
    const state = useSelector(state => state.ContextSlice.Editing);

    const Edit = EditName({ props });

    return (
        <Container >
            {state ? (
                Edit
            ) : (
                <Card>
                    <Header>
                        <h1>
                            <label>Subject {props.subject}</label>
                            <hr />
                        </h1>
                    </Header>
                    <Header>
                        <h4>
                            <label>Teacher {props.teacher}</label>
                        </h4>
                    </Header>
                    <Header>
                        <h5>Mark {props.mark}</h5>
                    </Header>
                    <small>Click to edit</small>
                    <Description onClick={() => dispatch(Editing({data: true}))}>
                        <h4>
                            <label> description {props.description}</label>
                        </h4>
                    </Description>
                </Card>
            )}
        </Container>
    );
}

export default DetailsContext;
