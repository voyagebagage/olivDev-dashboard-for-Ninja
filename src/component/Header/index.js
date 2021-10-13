import { Menu, Icon, Search } from "semantic-ui-react";
import React from "react";

function Header({ handleSidebarItem }) {
  return (
    <div>
      <Menu stackable>
        <Menu.Item>
          <img src="https://react.semantic-ui.com/logo.png" alt="logo" />
        </Menu.Item>
        <Menu.Item onClick={handleSidebarItem}>
          <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Search
              icon="search"
              placeholder="Search..."
              style={{ borderRadius: "50%" }}
            />
          </Menu.Item>
          <Menu.Item style={{ color: "#566A63" }}>
            <Icon name="user circle" size="big" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}

export default Header;
