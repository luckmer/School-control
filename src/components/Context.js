import React  from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import EditName from "../components/Edit";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch,useSelector } from "react-redux";
import { IsEditing } from "../reducers/ContextSlice";

function ContextPanel(props) {
    const dispatch = useDispatch()
    const isEditing = useSelector(state => state.ContextSlice.isEditing);
    const Edit = EditName({ props, IsEditing });

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
                onClick={() => dispatch(IsEditing({data: true}))}
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

    return <div>{isEditing ? Edit : View}</div>;
}

export default ContextPanel;
