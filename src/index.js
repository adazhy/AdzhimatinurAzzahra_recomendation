import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import Browser Router dari React Router
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Store";


// get root element
const container = document.getElementById("root");

// create root
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
