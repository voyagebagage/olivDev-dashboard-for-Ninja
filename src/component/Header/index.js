import { Menu, Icon, Search, Dropdown } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { filterClientList, sortDirection } from "../../arrayLists/index";
import { useClient, useFetchClients } from "../../context/Provider";
import { fetchClients } from "../../fetch/FetchClients";
// import {useClient} from  ;
function Header({ handleSidebarItem }) {
  const { setClients } = useClient();
  const [filterChoice, setFilterChoice] = useState(false);
  const [valueDropDown, setValueDropDown] = useState("Filter By:");
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
  } = useFetchClients();

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
                // onChange={() => setValueDropDown(value)}
                basic
                fluid
                button
                selectedLabel
                selection
                // onChange={(e) => setValueDropDown(options)}
                options={filterClientList}
                text={filterClientList.text || ""}
                placeholder="Sort By:"
                style={{ minWidth: "11vw", maxHeight: "4vh" }}
              />
              <Dropdown
                // onChange={() => setValueDropDown(value)}
                basic
                fluid
                button
                selectedLabel
                selection
                // onChange={(e) => setValueDropDown(options)}
                options={sortDirection}
                text={sortDirection.text || ""}
                placeholder="Way: A-Z"
                style={{ minWidth: "3vw" }}
              />
            </Menu.Item>
          ) : // <Menu.Item>
          //   <Button
          //     content="filter"
          //     onClick={() => setFilterChoice(!filterChoice)}
          //   />
          //   {filterChoice ? (
          //     <>
          //       <Button content="First Name" size="very small" />
          //       <Button content="Last Name" size="very small" />
          //       <Button content="Company" size="very small" />
          //       <Button content="Email" size="very small" />
          //     </>
          //   ) : null}
          // </Menu.Item>
          null}
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
