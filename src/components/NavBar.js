import React, { useState } from "react";
import AddTask from "./AddTask";
import { Container, Mobile, Context, Button } from "../styles/Nav";
import { Link } from "react-router-dom";

import { useDispatch,useSelector } from "react-redux";
import { SetEditOn } from "../reducers/ContextSlice";


function NavBar({ toggleChange })
{
    const find = useSelector(state => state.ContextSlice.OnOff)
    
    const dispatch = useDispatch();
    const [add, setAdd] = useState(false);

    return (
        <>
            <AddTask add={add} setAdd={setAdd} />
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
                                <Button onClick={() => dispatch(SetEditOn({data : true}))}>
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
                                        to="/"
                                        onClick={() => dispatch(SetEditOn({data : true}))}
                                    >
                                        Notes
                                    </Link>
                                </li>
                            </ul>
                            <ul onClick={() => dispatch(SetEditOn({data : true}))}>
                                <li onClick={toggleChange}>Dark</li>
                            </ul>
                        </div>
                    </div>
                </Context>
            </Container>
        </>
    );
}

export default NavBar;
