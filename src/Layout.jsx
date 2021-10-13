import "semantic-ui-css/semantic.min.css";
import "./Layout.css";
import Amplify from "aws-amplify";
import config from "./aws-exports";

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./views/Login";
import SidebarComponent from "./component/Sidebar";
import Header from "./component/Header";

import { GlobalProvider } from "./context/Provider";
import Cookies from "js-cookie";
Amplify.configure(config);

function Layout() {
  //---------------------States------------------------------
  const [sidebarItem, setSidebarItem] = useState(false);
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [setUsername] = useState(Cookies.get("username") || "");
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
      <GlobalProvider>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        {/* ------------------------------------------------------------------
        -                                 LAYOUT                        -
        ------------------------------------------------------------------    */}
        <Route
          render={() =>
            token ? (
              <div style={{ height: "100vh" }}>
                <Header handleSidebarItem={handleSidebarItem} />
                <div>
                  <SidebarComponent sidebarItem={sidebarItem} />
                </div>
              </div>
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </GlobalProvider>
    </Router>
  );
}

export default Layout;
