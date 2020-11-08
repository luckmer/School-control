import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { routes } from "./routes";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "styled-components";
import Box from "./styles/Box";


import {useSelector} from "react-redux";

function App() {
    const location = useLocation();
    const state = useSelector(state => state.colorMode.mode);

    return (
        <ThemeProvider theme={{ mode: state }}>
                <Box>
                    <NavBar type={state}  />
                    <Switch location={location} key={location.pathname}>
                        {routes.map(({ path, Component }) => (
                            <Route
                                key={path}
                                exact
                                path={path}
                                component={Component}
                            />
                        ))}
                    </Switch>
                </Box>
        </ThemeProvider>
    );
}
export default App;
