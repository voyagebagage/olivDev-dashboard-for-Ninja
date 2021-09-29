import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Layout from "./Layout";
import { BrowserRouter, Router, Switch, Redirect } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>,
  document.getElementById("root")
);

{
  // <React.StrictMode>
  /* </React.StrictMode>, */
}
