import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { routes } from "./routes";
import { Store } from "./Imports/Index";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "styled-components";
import DarkMode from "./hooks/DarkMode";
import Box from "./styles/Box";
function App() {
    const { Color, toggleChange } = DarkMode();

    const location = useLocation();

    return (
        <ThemeProvider theme={{ mode: Color }}>
            <Store>
                <Box>
                    <NavBar type={Color} toggleChange={toggleChange} />
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
            </Store>
        </ThemeProvider>
    );
}
export default App;
