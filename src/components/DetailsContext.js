import React from "react";
import { Container, Card, Header, Description } from "../styles/Container";

const DetailsContext = (props) =>{
    
    return (
        <Container >
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
                    <Description>
                        <h4>
                            <label> description {props.description}</label>
                        </h4>
                    </Description>
                </Card>
        </Container>
    );
}

export default DetailsContext;
