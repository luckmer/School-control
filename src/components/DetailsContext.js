import React, { useState } from "react";
import EditName from "../components/Edit";
import styled from "styled-components";
import { color, navModeView } from "../styles/Box";
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

function DetailsContext(props) {
    const [isEditing, setIsEditing] = useState(false);
    const Edit = EditName({ props, setIsEditing });

    return (
        <Container>
            {isEditing ? (
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
                    <Description onClick={() => setIsEditing(true)}>
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
