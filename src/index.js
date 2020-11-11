import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";

import { Provider } from "react-redux";
import Store from "./utils/Store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store = {Store}>
            <Router>
                <GlobalStyle />
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();
