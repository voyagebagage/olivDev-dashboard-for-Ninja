import "semantic-ui-css/semantic.min.css";
import "./Layout.css";
//---------------------AWS------------------------------
import Amplify from "aws-amplify";
import config from "./aws-exports";
//---------------------REACT------------------------------
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./views/Login";
import SidebarComponent from "./component/Sidebar";
import Header from "./component/Header";
//---------------------Context------------------------------
import { GlobalProvider } from "./context/Provider";
//---------------------Plugin------------------------------
import Cookies from "js-cookie";
Amplify.configure(config);

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
  // console.log(window.location.origin);
  return (
    <Router>
      <Route path="/login">
        <Login setUser={setUser} />
      </Route>
      {/* ------------------------------------------------------------------
        -                                 LAYOUT                        -
      ------------------------------------------------------------------    */}
      <GlobalProvider>
        <Route
          render={() =>
            token ? (
              <div
                style={
                  //this will need to change
                  window.location.origin !== "http://localhost:3000"
                    ? { height: "100vh" }
                    : { height: "100%" }
                }
              >
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
