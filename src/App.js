import "semantic-ui-css/semantic.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Campaigns from "./views/Campaigns";
import Dashboard from "./views/Dashboard";
import Interested from "./views/Interested";

import SidebarComponent from "./component/Sidebar";

function App() {
  return (
    <Router>
      <div style={{ height: "100vh" }}>
        <SidebarComponent
        // style={{ width: "15vw" }}
        />
      </div>
    </Router>
  );
}

export default App;
