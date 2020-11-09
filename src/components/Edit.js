import React, { useState } from "react";
import { Button } from "react-bootstrap";
import{
    Context, Header, TextAreaContext, Buttons, Test, Card
}from "../styles/AddTaskStyle";
import { useForm } from "react-hook-form";
import { useDispatch  } from "react-redux";
import { EditTask } from "../reducers/CreateNewTaskSlice";

function EditName({id ,handleClick }){
    const initialState = {
        id: id,
        Subject: "",
        Teacher: "",
        Mark: "",
        Description: "",
    };
    const dispatch = useDispatch()
    const [newName, setNewName] = useState(initialState);
    const { Subject, Teacher, Mark, Description } = newName;
    const { errors, handleSubmit, register } = useForm();


    const handleUpload = () =>{
        dispatch(EditTask({ id: id, newContext: newName }))
        handleClick()
    };

    const handleChange = (e) => {
        setNewName({ ...newName, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <Test />
            <Context onSubmit={handleSubmit(handleUpload)}>
                <Card>
                    <div>
                        <Header>
                            <h4>Add new card</h4>
                            <button onClick={() => handleClick(id)}>
                                X
                            </button>
                        </Header>
                    </div>
                    <hr />
                    <TextAreaContext>
                        <div>
                            <label htmlFor="id"> Subject</label>
                            <input
                                ref={register({ required: true })}
                                type="text"
                                name="Subject"
                                value={Subject}
                                onChange={handleChange}
                            />
                            {errors.Subject && <p>is required</p>}
                        </div>
                        <div>
                            <label htmlFor="id"> Teacher</label>
                            <input
                                ref={register({ required: true })}
                                type="text "
                                name="Teacher"
                                value={Teacher}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor={Mark}> Mark</label>
                            <select
                                onChange={handleChange}
                                name="Mark"
                                value={Mark}
                                ref={register({ required: true })}
                            >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                            {errors.Mark && <p>is required</p>}
                        </div>
                        <div>
                            <label htmlFor={Description}> Context</label>
                            <textarea
                                ref={register({ required: true })}
                                type="text"
                                name="Description"
                                value={Description}
                                onChange={handleChange}
                            />
                            {errors.Description && <p>is required</p>}
                        </div>
                        <Buttons>
                            <Button type="submit" variant="primary">
                                Submit
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={() => handleClick(id)}
                            >
                                cancel
                            </Button>
                            <Button
                                variant="danger"
                                onClick={() => handleClick(id)}
                            >
                                Delete
                            </Button>
                        </Buttons>
                    </TextAreaContext>
                </Card>
            </Context>
        </div>
    );
}
export default EditName;
