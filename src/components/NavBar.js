import React, { useState } from "react";
import AddTask from "./AddTask";
import { Container, Mobile, Context, Button } from "../styles/Nav";
import { Link } from "react-router-dom";

import { useDispatch,useSelector } from "react-redux";
import { SetEditOn, SetAddTaskOn } from "../actions/SetEditOn";
import { ToggleMode } from "../actions/ToggleMode";

const  NavBar = ()=>{
    
    const find = useSelector(state => state.ContextSlice.OnOff)
    const OpenNewTask = useSelector(state => state.ContextSlice.AddTask)
    const dispatch = useDispatch();
    const [ setAdd] = useState(false);

    return (
        <>
            <AddTask add={OpenNewTask} setAdd={setAdd} />
            <Container>
                <Mobile state={find} onClick={() => dispatch(SetEditOn({data : true}))}>
                    <div />
                    <div />
                    <br />
                </Mobile>
                <Context state={find}>
                    <div>
                        <div>
                            <ul onClick={() => dispatch(SetEditOn({data : true}))}>
                                <Button onClick={() => dispatch(SetAddTaskOn({data: true}))}>
                                    New Task
                                </Button>
                            </ul>
                        </div>
                        <div>
                            <ul onClick={() => dispatch(SetEditOn({data : true}))}>
                                <Link to="/">
                                    <li>School Control</li>
                                </Link>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <Link
                                        to="/notes"
                                        onClick={() => dispatch(SetEditOn({data : true}))}
                                    >
                                        Notes
                                    </Link>
                                </li>
                            </ul>
                            <ul onClick={() => dispatch(SetEditOn({data : true}))}>
                                <li onClick={() => dispatch(ToggleMode({data : "dark"}))}>Dark</li>
                            </ul>
                        </div>
                    </div>
                </Context>
            </Container>
        </>
    );
}

export default NavBar;
