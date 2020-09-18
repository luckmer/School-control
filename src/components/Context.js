import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import EditName from "../components/Edit";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const ControlCard = styled.div``;

function ContextPanel(props) {
    //
    const [isEditing, setIsEditing] = useState(false);
    const Edit = EditName({ props, setIsEditing });

    const View = (
        <Card
            border="light "
            style={{ boxShadow: " -6px 1px 11px rgba(0,0,0,0.25)" }}
        >
            <Link to={`/details/${props.id}`}>
                <Card.Header
                    style={{
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        backgroundColor: `${
                            props.mark >= 3
                                ? " #28a745"
                                : "#28a745" || props.mark === 0
                                ? "#6c757d"
                                : "#6c757d"
                        }`,
                        color: "white",
                    }}
                >
                    <label htmlFor={props.id}>{props.subject}</label>
                </Card.Header>
            </Link>
            <Card.Body
                onClick={() => setIsEditing(true)}
                style={{
                    cursor: "pointer",
                    backgroundColor: `${
                        props.mark >= 3
                            ? " #28a745"
                            : "#28a745" || props.mark === 0
                            ? "#6c757d"
                            : "#6c757d"
                    }`,
                    color: "white",
                }}
            >
                <Card.Title>
                    <label htmlFor={props.id}>{props.teacher}</label>
                </Card.Title>
                <Card.Text
                    style={{
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        width: "98%",
                    }}
                >
                    <label htmlFor={props.id}>{props.description}</label>
                </Card.Text>
            </Card.Body>
            <Card.Header
                style={{
                    backgroundColor: `${
                        props.mark >= 3
                            ? " #28a745"
                            : "#28a745" || props.mark === 0
                            ? "#6c757d"
                            : "#6c757d"
                    }`,
                    color: "white",
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px -1px 1px",
                }}
            >
                <label htmlFor={props.id}>{props.mark}</label>
            </Card.Header>
        </Card>
    );

    return <ControlCard>{isEditing ? Edit : View}</ControlCard>;
}

export default ContextPanel;
