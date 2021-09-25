import "./index.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import { SidebarData } from "./SidebarData";
import Campaigns from "../../views/Campaigns";
import Dashboard from "../../views/Dashboard";
import Interested from "../../views/Interested";
import QualifiedLead from "../../views/QualifiedLead";
// import User from "../../views/" ;
import Login from "../../views/Login";
import Cookies from "js-cookie";

const SidebarComponent = () => {
  const [sidebarItem, setSidebarItem] = useState(false);
  const handleSidebarItem = () => setSidebarItem(!sidebarItem);
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [username, setUsername] = useState(Cookies.get("username") || "");
  let history = useHistory();
  let location = useLocation();
  let path = location.pathname;

  const setUser = (userToken, username) => {
    setToken(userToken);
    setUsername(username);
    Cookies.set("token", userToken, { expires: 1 });
    Cookies.set("username", username, { expires: 1 });
  };
  return (
    <>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="uncover"
          direction="left"
          icon="labeled"
          color="blue"
          inverted
          vertical
          visible
          width={sidebarItem ? "thin" : "big"}
        >
          {SidebarData.map((view, index) => {
            return (
              <Menu.Item
                key={index}
                as={view.path ? Link : null}
                to={view.path}
                className={view.cName}
                onClick={index === 0 ? () => handleSidebarItem() : null}
              >
                <Icon name={view.iconName} />
                {view.title ? view.title : null}
              </Menu.Item>
            );
          })}
        </Sidebar>

        <Sidebar.Pusher>
          <Segment basic>
            {console.log(location.pathname)}
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/login">
                <Login setUser={setUser} />
              </Route>

              <Route path="/campaigns">
                {token ? <Campaigns token={token} /> : <Redirect to="/login" />}
              </Route>
              <Route path="/qualifiedLead">
                {token ? (
                  <QualifiedLead token={token} />
                ) : (
                  <Redirect to="/login" />
                )}
              </Route>
              <Route path="/interested">
                {token ? (
                  <Interested token={token} />
                ) : (
                  <Redirect to="/login" />
                )}
              </Route>
              {/* <Route path="/user/details">
                {token ? <User token={token} /> : <Redirect to="/login" />}
              </Route>
              <Route path="/meetings">
                {token ? <Meetings token={token} /> : <Redirect to="/login" />}
              </Route> */}
              {/* <Route path="/charts">
                {token ? <Charts token={token} /> : <Redirect to="/login" />}
              </Route> */}
              {/* <Route path="/qualifiedLead" component={QualifiedLead} />
              <Route path="/interested" component={Interested} /> */}
            </Switch>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};

// const SidebarComponent = () => (

// );

export default SidebarComponent;
