import {
  Table,
  Header,
  Segment,
  Sidebar,
  List,
  Icon,
  Dimmer,
  Image,
  Loader,
} from "semantic-ui-react";
import SidebarForm from "../component/SidebarForm";

import { PaginationShortCentered } from "../component/Pagination";
import AddIcon from "../component/AddIcon";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
  useVisible,
  useFetch,
  useDropDownFilter,
  useCampaign,
} from "../context/Provider";
import { API, graphqlOperation } from "aws-amplify";
import { searchCampaigns } from "../graphql/queries";
import CampaignForm from "../Forms/CampaignForm";

// import { fetchClients } from "../fetch/FetchClients";
//#################################################
//           FUNCTION
//################################################
function Campaigns() {
  let history = useHistory();

  const { setVisible } = useVisible();
  //xxxxxxxxxxxxxxxxxxxx
  const {
    isLoading,
    setIsLoading,
    limit,
    setLimit,
    from,
    setFrom,
    totalClients,
    setTotalClients,
    targetPage,
    setTargetPage,
    maxPages,
    setMaxPages,
  } = useFetch();
  //xxxxxxxxxxxxxxxxxxxx
  const { filteredCampaigns, campaigns, setCampaigns } = useCampaign();
  //xxxxxxxxxxxxxxxxxxxx
  const { fieldDropDown, directionDropDown } = useDropDownFilter();
  //---------------------States------------------------------
  // const [activeCampaign, setActiveCampaign] = useState(false);
  // const [campaigns, setCampaigns] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  //---------------------~~~~~~~~~~~----------------------------
  const variables = {
    //filter
    from: from,
    limit: limit,
    sort: { direction: directionDropDown, field: fieldDropDown.campaign },
  };
  //---------------------Functions------------------------------
  const fetchCampaigns = async () => {
    try {
      setIsLoading(true);
      const campaignData = await API.graphql(
        graphqlOperation(searchCampaigns, variables)
      );
      // console.log(await campaignData.data.searchCampaigns.items, "campaing");
      // console.log(await campaignData.data.searchCampaigns.items, "campaing");
      // console.log(campaignData.data.searchCampaigns.items.length, "campaing");

      //----------------------setStates-----------
      setCampaigns(campaignData.data.searchCampaigns.items);
      //----onKeyPress === "Enter"---------------
      if (filteredCampaigns.length) {
        setTotalClients(filteredCampaigns.length);
        setMaxPages(Math.ceil(filteredCampaigns.length / limit));
      }
      //----Default fetch------------------------
      if (!filteredCampaigns.length) {
        setTotalClients(campaignData.data.searchCampaigns.total);
        setMaxPages(Math.ceil(campaignData.data.searchCampaigns.total / limit));
      }

      console.log("=========USEEFFECT==========");
      console.log(campaigns, "CLIENT USEEFFECT");
      setFrom(limit * (targetPage - 1));
      setIsLoading(false);
    } catch (error) {
      console.log("error with get campaigns :", error);
    }
  };
  useEffect(
    () => fetchCampaigns(),
    [
      from,
      targetPage,
      directionDropDown,
      fieldDropDown,
      filteredCampaigns,
      maxPages,
    ]
  );
  console.log(campaigns.length, "CAMPAIGNS");
  //#################################################
  //           RENDER
  //################################################
  return !isLoading && campaigns.length !== 0 ? (
    <Sidebar.Pushable as={List}>
      <div style={{ width: "83%" }}>
        <Segment basic className="dFlex-sBetween">
          <Header as="h2">Campaigns</Header>
          <AddIcon setVisible={setVisible} />
        </Segment>
        {/* -------------------TABLE HEADER------------------- */}

        <Table striped singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell collapsing>CLIENT</Table.HeaderCell>
              <Table.HeaderCell>CAMPAIGN</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">AGENT</Table.HeaderCell>
              <Table.HeaderCell collapsing>START</Table.HeaderCell>
              <Table.HeaderCell collapsing>END</Table.HeaderCell>
              <Table.HeaderCell
                textAlign="center"
                // style={{ maxWidth: "10vw", marginRight: 0 }}
              >
                STATUS
              </Table.HeaderCell>
              {/* <Table.HeaderCell collapsing>ON CAMPAIGN</Table.HeaderCell> */}
            </Table.Row>
          </Table.Header>
          {/* -----------------TABLE BODY--------------------- */}
          <Table.Body>
            {campaigns.map((campaign, idx) => (
              <Table.Row
                key={campaign.id}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  history.push(`/campaign/${campaign.name}/${campaign.id}/info`)
                }
              >
                <Table.Cell>
                  {campaign.client?.firstName}&nbsp;&nbsp;
                  {campaign.client?.lastName}
                </Table.Cell>
                <Table.Cell collapsing>{campaign.name}</Table.Cell>
                <Table.Cell textAlign="center">
                  {campaign.agent?.name}
                </Table.Cell>
                <Table.Cell collapsing>
                  {campaign.startDate.split("-").reverse().join("-")}
                </Table.Cell>
                <Table.Cell collapsing>
                  {campaign.endDate.split("-").reverse().join("-")}
                </Table.Cell>
                <Table.Cell textAlign="center">
                  <Icon
                    as={Icon}
                    name="circle thin"
                    color={
                      campaign.status === "true"
                        ? "green"
                        : campaign.status === "not yet"
                        ? "blue"
                        : campaign.status === "done"
                        ? "red"
                        : "grey"
                    }
                  />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <div className="dFlex-fEnd">
          <PaginationShortCentered
            maxPages={maxPages}
            setFrom={setFrom}
            from={from}
            limit={limit}
            targetPage={targetPage}
            setTargetPage={setTargetPage}
          />
        </div>
        {/* ----------------------------------------------------
        -                             SIDEBAR - FORM                        -
        ----------------------------------------------------- */}
        <SidebarForm>
          <CampaignForm campaigns={campaigns} setCampaigns={setCampaigns} />
        </SidebarForm>
      </div>
    </Sidebar.Pushable>
  ) : !isLoading && campaigns.length === 0 ? (
    <Sidebar.Pushable as={List}>
      {/* <div style={{ width: "83%" }}> */}
      <Segment basic className="centerSized">
        <Header as="h2">Campaigns</Header>
        <AddIcon setVisible={setVisible} />
      </Segment>
      <SidebarForm>
        <CampaignForm campaigns={campaigns} setCampaigns={setCampaigns} />
      </SidebarForm>
      {/* </div> */}
    </Sidebar.Pushable>
  ) : (
    <Segment>
      <Dimmer active inverted>
        <Loader size="massive">Loading</Loader>
      </Dimmer>
      <Image
        size="massive"
        src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
      />
      <Image
        size="massive"
        src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
      />
    </Segment>
  );
}

export default Campaigns;

// const now = new Date().getTime();
// for (let i = 0; i < campaignData.data.searchCampaigns.items.length; i++) {
//   // if (!campaignData.data.searchCampaigns.items[i].status) {
//   const startTime = new Date(
//     campaignData.data.searchCampaigns.items[i].startDate
//   ).getTime();
//   const endTime = new Date(
//     campaignData.data.searchCampaigns.items[i].endDate
//   ).getTime();

//   if (now < startTime) {
//     campaignData.data.searchCampaigns.items[i].status = "not yet";
//     const elem = campaignData.data.searchCampaigns.items[i];
//     console.log(elem, "elem");
//     delete elem.createdAt;
//     delete elem.updatedAt;
//     delete elem.client;
//     delete elem.agent;
//     delete elem.dailyReports;
//     delete elem.weeklyReports;
//     delete elem.monthlyReports;
//     delete elem.kpis;
//     const campaignUpdate = await API.graphql(
//       graphqlOperation(updateCampaign, { input: elem })
//     );
//   }

//   if (now > endTime) {
//     campaignData.data.searchCampaigns.items[i].status = "done";
//     const elem = campaignData.data.searchCampaigns.items[i];
//     console.log(elem, "elem");
//     delete elem.createdAt;
//     delete elem.updatedAt;
//     delete elem.client;
//     delete elem.agent;
//     delete elem.dailyReports;
//     delete elem.weeklyReports;
//     delete elem.monthlyReports;
//     delete elem.kpis;
//     const campaignUpdate = await API.graphql(
//       graphqlOperation(updateCampaign, { input: elem })
//     );
//   }
//   // }
// }
