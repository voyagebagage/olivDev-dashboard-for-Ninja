import "semantic-ui-css/semantic.min.css";
import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Login from "./views/Login";
// import Dashboard from "./views/Dashboard";
// import Interested from "./views/Interested";

import SidebarComponent from "./component/Sidebar";
import Header from "./component/Header";

import Cookies from "js-cookie";

function Layout() {
  //---------------------States------------------------------
  const [sidebarItem, setSidebarItem] = useState(false);
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [username, setUsername] = useState(Cookies.get("username") || "");
  //-------------------Functions---------------------------
  const setUser = (userToken, username) => {
    setToken(userToken);
    setUsername(username);
    Cookies.set("token", userToken, { expires: 1 });
    Cookies.set("username", username, { expires: 1 });
  };
  const handleSidebarItem = () => setSidebarItem(!sidebarItem);

  return (
    <Router>
      <Route path="/login">
        <Login setUser={setUser} />
      </Route>
      <Switch>
        <Route
          render={() =>
            token ? (
              <div>
                <Header handleSidebarItem={handleSidebarItem} />
                <div style={{ height: "100vh" }}>
                  <SidebarComponent sidebarItem={sidebarItem} />
                </div>
              </div>
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </Switch>
    </Router>
  );
}

export default Layout;
