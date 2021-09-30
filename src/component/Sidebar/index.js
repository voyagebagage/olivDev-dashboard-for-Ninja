import "./index.css";
import React, { useState } from "react";
import {
  BrowserRouter as Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  Router,
  // useLocation,
} from "react-router-dom";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import { Routes } from "../../Routes";

const SidebarComponent = ({ sidebarItem }) => {
  // let location = useLocation();
  let history = useHistory();

  return (
    <>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="uncover"
          direction="left"
          icon="labeled"
          primary
          // color="8CABA0"
          inverted
          vertical
          visible
          width={sidebarItem ? "thin" : "big"}
          style={{ backgroundColor: "#8CABA0" }}
        >
          {Routes.map((view, index) => {
            return (
              <Menu.Item
                key={index}
                as={Link}
                to={view.path}
                className={view.cName}
              >
                <Icon name={view.iconName} />
                {view.title}
              </Menu.Item>
            );
          })}
        </Sidebar>

        <Sidebar.Pusher>
          <Segment
            basic
            style={
              sidebarItem
                ? { width: "85vw", minWidth: "35vw", height: "92vh" }
                : { width: "80vw", minWidth: "35vw", height: "92vh" }
            }
          >
            {Routes.map((route, index) => (
              <Route
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            ))}
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};
export default SidebarComponent;
