import React, { Children, useState } from "react";
import { useLocation } from "react-router-dom";

import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";

const SidebarForm = ({ children, setVisible, visible }) => {
  let location = useLocation();
  console.log(location);
  return (
    <Sidebar
      as={Menu}
      animation="overlay"
      direction="right"
      vertical
      visible={visible}
      onHide={() => setVisible(false)}
      style={{
        width: location.pathname === "/client-list" ? "32vw" : "80vw",
        height: "100%",
        borderRightWidth: 0,
        display: "flex",
        backgroundColor: "#8CABA0",
        marginBottom: 0,
        borderTopWidth: 0,
        borderLeftWidth: 0,
      }}
      basic
    >
      {children}
    </Sidebar>
  );
};

export default SidebarForm;
