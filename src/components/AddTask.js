import React from "react";
import { Context, Header, TextAreaContext, Buttons, Test, Card} from "../styles/AddTaskStyle";
import { TaskDataControl } from "../hooks/TaskDataControl";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux";
import { SetAddTaskOn } from "../reducers/ContextSlice";

const AddTask = ({ add, setAdd }) => {

    const dispatch = useDispatch();
    const { handleUpload, handleChange, state } = TaskDataControl({add,setAdd});
    const { Subject, Teacher, Mark, Description } = state;
    const { handleSubmit, errors, register } = useForm();

    return (
        <>
            {add ? (
                <>
                    <Test />
                    <Context add={add} onSubmit={handleSubmit(handleUpload)}>
                        <Card>
                            <div>
                                <Header>
                                    <h4>Add new card</h4>
                                    <button onClick={() => dispatch(SetAddTaskOn({data: true}))}>
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
                                    {errors.Teacher && <p>is required</p>}
                                </div>
                                <div>
                                    <label htmlFor="id"> Mark</label>
                                    <select
                                        ref={register({ required: true })}
                                        onChange={handleChange}
                                        name="Mark"
                                        value={Mark}
                                    >
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                    {errors.Mark && <p> is required</p>}
                                </div>
                                <div>
                                    <label htmlFor="id"> Context</label>
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
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        onClick={() => dispatch(SetAddTaskOn({data: true}))}>
                                        cancel
                                    </Button>
                                </Buttons>
                            </TextAreaContext>
                        </Card>
                    </Context>
                </>
            ) : (
                ""
            )}
        </>
    );
}
export default AddTask;
