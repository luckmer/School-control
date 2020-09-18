import React, { useState } from "react";
import AddTask from "./AddTask";
import { Container, Mobile, Context, Button } from "../styles/Nav";
import { Link } from "react-router-dom";

function NavBar({ toggleChange }) {
    const [state, setState] = useState(false);
    const [add, setAdd] = useState(false);

    return (
        <>
            <AddTask add={add} setAdd={setAdd} />
            <Container>
                <Mobile state={state} onClick={() => setState(!state)}>
                    <div />
                    <div />
                    <br />
                </Mobile>
                <Context state={state}>
                    <div>
                        <div>
                            <ul onClick={() => setState(!state)}>
                                <Button onClick={() => setAdd(!add)}>
                                    New Task
                                </Button>
                            </ul>
                        </div>
                        <div>
                            <ul onClick={() => setState(!state)}>
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
                                        onClick={() => setState(!state)}
                                    >
                                        Notes
                                    </Link>
                                </li>
                            </ul>
                            <ul onClick={() => setState(!state)}>
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
