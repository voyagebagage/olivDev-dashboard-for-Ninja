import { Menu, Icon, Dropdown } from "semantic-ui-react";
// import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  filterClientList,
  filterCampaignList,
  sortDirection,
} from "../../arrayLists/index";
import { useDropDownFilter } from "../../context/Provider";
import SearchBar from "../SearchBar";

function Header({ handleSidebarItem }) {
  const { setFieldDropDown, setDirectionDropDown } = useDropDownFilter();
  let location = useLocation();
  let text =
    location.pathname === "/client-list"
      ? filterClientList.text
      : filterCampaignList.text;

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
          <>
            <Menu.Item>
              {location.pathname === "/client-list" && (
                <Dropdown
                  basic
                  fluid
                  button
                  selectedLabel
                  selection
                  onChange={(e, value) =>
                    setFieldDropDown({ clientList: value.value })
                  }
                  options={filterClientList}
                  // value={filterClientList.value}
                  text={filterClientList.text || ""}
                  placeholder="Sort By:"
                  style={{ minWidth: "11vw", maxHeight: "4vh" }}
                />
              )}
              {location.pathname === "/campaigns" && (
                <Dropdown
                  basic
                  fluid
                  button
                  selectedLabel
                  selection
                  onChange={(e, value) =>
                    setFieldDropDown({ campaign: value.value })
                  }
                  options={filterCampaignList}
                  // value={filterClientList.value}
                  text={filterCampaignList.text || ""}
                  placeholder="Sort By:"
                  style={{ minWidth: "11vw", maxHeight: "4vh" }}
                />
              )}
              <Dropdown
                basic
                fluid
                button
                selectedLabel
                selection
                onChange={(e, value) => setDirectionDropDown(value.value)}
                options={sortDirection}
                text={sortDirection.text || ""}
                placeholder="Way: A-Z"
                style={{ minWidth: "3vw" }}
              />
            </Menu.Item>
          </>

          <Menu.Item>
            <SearchBar />
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
