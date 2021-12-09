import { Menu, Icon, Dropdown, Image } from "semantic-ui-react";
// import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  filterClientList,
  filterCampaignList,
  sortDirection,
} from "../../arrayLists/index";
import { useDropDownFilter } from "../../context/Provider";
import SearchClients from "../SearchBars/SearchClients";
import SearchCampaigns from "../SearchBars/SearchCampaigns";
import logoDash from "../../img/logoDash.svg";

function Header({ handleSidebarItem }) {
  const { setFieldDropDown, setDirectionDropDown } = useDropDownFilter();
  let location = useLocation();

  console.log(location.pathname, "location");
  return (
    <div>
      <Menu stackable size="tiny">
        <Menu.Item>
          <Image src={logoDash} className="logoImg" size="tiny"></Image>
          {/* <img src={logoDash} alt="logo" id="logoDash" /> */}
        </Menu.Item>
        <Menu.Item onClick={handleSidebarItem} transparent>
          <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Menu position="right">
          {/* //#################################################
  //           CLIENT LIST
  //################################################# */}
          <>
            {location.pathname.includes("/client") && (
              <Menu.Item>
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
              </Menu.Item>
            )}
            {/* //#################################################
  //           Campaigns
  //################################################# */}
            {location.pathname.includes("/campaign") && (
              <Menu.Item>
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
              </Menu.Item>
            )}
            {(location.pathname.includes("/campaign") ||
              location.pathname.includes("/client")) && (
              <Menu.Item>
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
            )}
            {/* {location.pathname.includes("/campaign/") && (
              <>
                <Menu.Item
                  inverted
                  style={{ color: "#566A63", backgroundColor: "#8CABA0" }}
                >
                  Info
                </Menu.Item>
                <Menu.Item
                  style={{ color: "#566A63", backgroundColor: "#8CABA0" }}
                >
                  Reports
                </Menu.Item>
              </>
            )} */}
            {/* ))} */}
          </>

          <Menu.Item>
            {location.pathname.includes("/client") && <SearchClients />}
            {location.pathname.includes("/campaign") && <SearchCampaigns />}
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
