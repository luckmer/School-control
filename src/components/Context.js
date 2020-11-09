import React,{useState}  from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import EditName from "../components/Edit";
import "bootstrap/dist/css/bootstrap.min.css";
import { IsEditing } from "../reducers/ContextSlice";

const  ContextPanel = ({id , subject , teacher,mark,description}) =>{
    const [edit, setEdit] = useState(false);

    const handleClick = () =>{
        setEdit(!edit)
    }
    const Edit = EditName({ id, subject, teacher, mark, description, IsEditing,edit,setEdit,handleClick });
    

    const View = (
        <Card
            border="light "
            style={{ boxShadow: " -6px 1px 11px rgba(0,0,0,0.25)" }}
        >
            <Link to={`/details/${id}`}>
                <Card.Header
                    style={{
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        backgroundColor: `${
                            mark >= 3
                                ? " #28a745"
                                : "#28a745" || mark === 0
                                ? "#6c757d"
                                : "#6c757d"
                        }`,
                        color: "white",
                    }}
                >
                    <label htmlFor={id}>{subject}</label>
                </Card.Header>
            </Link>
            <Card.Body
                onClick={() => handleClick(id)}
                style={{
                    cursor: "pointer",
                    backgroundColor: `${
                        mark >= 3
                            ? " #28a745"
                            : "#28a745" ||mark === 0
                            ? "#6c757d"
                            : "#6c757d"
                    }`,
                    color: "white",
                }}
            >
                <Card.Title>
                    <label htmlFor={id}>{teacher}</label>
                </Card.Title>
                <Card.Text
                    style={{
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        width: "98%",
                    }}
                >
                    <label htmlFor={description}>{description}</label>
                </Card.Text>
            </Card.Body>
            <Card.Header
                style={{
                    backgroundColor: `${
                        mark >= 3
                            ? " #28a745"
                            : "#28a745" || mark === 0
                            ? "#6c757d"
                            : "#6c757d"
                    }`,
                    color: "white",
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px -1px 1px",
                }}
            >
                <label htmlFor={id}>{mark}</label>
            </Card.Header>
        </Card>
    );

    return !edit ? View : Edit
}

export default ContextPanel;
