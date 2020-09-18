import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { Store } from "./Imports/Index";

ReactDOM.render(
    <React.StrictMode>
        <Store>
            <Router>
                <GlobalStyle />
                <App />
            </Router>
        </Store>
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();
