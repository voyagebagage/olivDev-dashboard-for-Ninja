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
import { SidebarData } from "./SidebarData";
import Campaigns from "../../views/Campaigns";
import LeaderBoard from "../../views/Dashboard";
import Agent from "../../views/Agent";
import Reports from "../../views/Reports";
import ClientList from "../../views/ClientList";
import Stats from "../../views/Stats";
// import Client from "../../views/ClientDetails" ;
import ClientDetails from "../../views/ClientDetails";
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
                ? { width: "85vw", minWidth: "35vw" }
                : { width: "80vw", minWidth: "35vw" }
            }
          >
            <Route exact path="/" component={LeaderBoard} />

            <Route path="/client-list" component={ClientList} />
            <Route path="/client" component={ClientDetails} />

            <Route path="/campaigns">
              <Campaigns />
            </Route>
            <Route path="/reports">
              <Reports />
            </Route>
            <Route path="/agent">
              <Agent />
            </Route>

            <Route path="/stats">
              <Stats />
            </Route>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};
export default SidebarComponent;
