import { Menu, Input, Icon } from "semantic-ui-react";
import React, { useState } from "react";

function Header({ handleSidebarItem }) {
  return (
    <div>
      <Menu stackable transparent>
        <Menu.Item>
          <img src="https://react.semantic-ui.com/logo.png" />
        </Menu.Item>
        <Menu.Item onClick={handleSidebarItem}>
          <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Input
              icon="search"
              placeholder="Search..."
              style={{ borderRadius: "50%" }}
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}

export default Header;
