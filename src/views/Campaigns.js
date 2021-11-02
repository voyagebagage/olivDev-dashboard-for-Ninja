import {
  Table,
  Header,
  Segment,
  Sidebar,
  List,
  Label,
} from "semantic-ui-react";
import SidebarForm from "../component/SidebarForm";
import { PaginationShortCentered } from "../component/Pagination";
import AddIcon from "../component/AddIcon";
import React, { useState, useEffect } from "react";
import {
  useVisible,
  useFetch,
  useDropDownFilter,
  useCampaign,
} from "../context/Provider";
import { API, graphqlOperation } from "aws-amplify";
import { searchCampaigns } from "../graphql/queries";
import CampaignForm from "../Forms/CampaignForm";
import { getYYYYMMDD } from "../lib/function";

// import { fetchClients } from "../fetch/FetchClients";
//#################################################
//           FUNCTION
//################################################
function Campaigns() {
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
  const { filteredCampaigns } = useCampaign();
  //xxxxxxxxxxxxxxxxxxxx
  const { fieldDropDown, directionDropDown } = useDropDownFilter();
  //---------------------States------------------------------
  // const [activeCampaign, setActiveCampaign] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
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
      // setFieldDropDown("name");
      const campaignData = await API.graphql(
        graphqlOperation(searchCampaigns, variables)
      );
      //----------------------setStates-----------
      setCampaigns(campaignData.data.searchCampaigns.items);
      console.log(campaignData.data.searchCampaigns, "campaing");
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
      console.log("error with get clients :", error);
    }
  };
  useEffect(() => {
    fetchCampaigns();
  }, [
    from,
    targetPage,
    directionDropDown,
    fieldDropDown,
    filteredCampaigns,
    maxPages,
  ]);
  //#################################################
  //           RENDER
  //################################################
  return !isLoading ? (
    <Sidebar.Pushable as={List}>
      <div style={{ width: "83%" }}>
        <Segment basic className="dFlex-sBetween">
          <Header as="h2">Campaigns</Header>
          <AddIcon setVisible={setVisible} />
        </Segment>
        {/* ---------------------TABLE HEADER---------------------------- */}

        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell collapsing>CLIENT</Table.HeaderCell>
              <Table.HeaderCell>CAMPAIGN</Table.HeaderCell>
              <Table.HeaderCell>AGENT</Table.HeaderCell>
              <Table.HeaderCell>START</Table.HeaderCell>
              <Table.HeaderCell>END</Table.HeaderCell>
              {/* <Table.HeaderCell collapsing>ON CAMPAIGN</Table.HeaderCell> */}
            </Table.Row>
          </Table.Header>
          {/* ---------------------TABLE BODY---------------------------- */}
          {campaigns.map((campaign, idx) => (
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {campaign.client.firstName}&nbsp;&nbsp;
                  {campaign.client.lastName}
                </Table.Cell>
                <Table.Cell>{campaign.name}</Table.Cell>
                <Table.Cell>{campaign.agent.name}</Table.Cell>
                <Table.Cell>
                  {campaign.startDate.split("-").reverse().join("-")}
                </Table.Cell>
                <Table.Cell>
                  {campaign.endDate.split("-").reverse().join("-")}
                </Table.Cell>
                {/* <Table.Cell>
                  {
                    console.log(let a= new Date(campaign.startDate); .getTime())
                    // <= getYYYYMMDD().getTime() &&
                    // campaign.endDate.getTime() >= getYYYYMMDD().getTime() ? (
                    //   <Label content="coucou" />
                    // ) : null
                  }
                </Table.Cell> */}
              </Table.Row>
            </Table.Body>
          ))}
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
        {/* ------------------------------------------------------------------
        -                             SIDEBAR - FORM                        -
        ------------------------------------------------------------------ */}
        <SidebarForm>
          <CampaignForm />
        </SidebarForm>
      </div>
    </Sidebar.Pushable>
  ) : (
    <h1>Loading</h1>
  );
}

export default Campaigns;
