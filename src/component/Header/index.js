import { Menu, Icon, Search, Dropdown } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { filterClientList, sortDirection } from "../../arrayLists/index";
import { useClient, useDropDownFilter, useFetch } from "../../context/Provider";
import SearchBar from "../SearchBar";

function Header({ handleSidebarItem }) {
  const { setClients } = useClient();
  const [filterChoice, setFilterChoice] = useState(false);
  const {
    fieldDropDown,
    setFieldDropDown,
    directionDropDown,
    setDirectionDropDown,
  } = useDropDownFilter();
  let location = useLocation();
  // console.log(location);
  const {
    nextToken,
    setNextNextToken,
    // isLoading,
    setIsLoading,
    // disabledNext,
    // disabledPrev,
    // next,
    // prev,
  } = useFetch();

  // const SORT = {
  //   ASC: "ASC",
  //   DESC: "DESC",
  // };
  // const limit = 12;

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
          {location.pathname === "/client-list" ? (
            <Menu.Item>
              {/* // <Menu.Item vertical> */}
              <Dropdown
                basic
                fluid
                button
                selectedLabel
                selection
                onChange={(e, value) => setFieldDropDown(value.value)}
                options={filterClientList}
                // value={filterClientList.value}
                text={filterClientList.text || ""}
                placeholder="Sort By:"
                style={{ minWidth: "11vw", maxHeight: "4vh" }}
              />
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
          ) : null}
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
