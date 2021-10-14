import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import { Routes } from "../../Routes";

const SidebarComponent = ({ sidebarItem }) => {
  //------the highlighted selection view-----
  const [sidebarActive, setSidebarActive] = useState("LeaderBoard");

  return (
    <>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="uncover"
          direction="left"
          icon="labeled"
          primary
          inverted
          vertical
          visible
          width={sidebarItem ? "thin" : "large"}
          style={{ backgroundColor: "#8CABA0" }}
        >
          {Routes.map((view, index) => {
            if (!view.iconName) {
              return null;
            } else {
              return (
                <Menu.Item
                  key={index}
                  name={view.title}
                  as={Link}
                  to={view.path}
                  className={view.cName}
                  active={sidebarActive === view.title}
                  onClick={() => setSidebarActive(view.title)}
                >
                  <div
                    className={sidebarItem ? null : "dFlex-sBetween-aCenter"}
                  >
                    <Icon size="big" name={view.iconName} />
                    <h4>{view.title}</h4>
                  </div>
                </Menu.Item>
              );
            }
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
              // <Route
              //   exact={route.exact}
              //   path={route.path}
              //   component={route.component}
              // />
              <Route
                exact={route.exact}
                path={route.path}
                render={(props) => <route.component {...props} />}
              />
            ))}
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};
export default SidebarComponent;
