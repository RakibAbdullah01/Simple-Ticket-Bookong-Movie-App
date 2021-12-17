import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import APIContextProvider from "./context/MoviesContext";
ReactDOM.render(
  <BrowserRouter>
    <APIContextProvider>
      <App />
    </APIContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
