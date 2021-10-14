import { Table, Header, Segment, Sidebar, List } from "semantic-ui-react";
import SidebarForm from "../component/SidebarForm";
import AddIcon from "../component/AddIcon";
import React, { useState, useEffect } from "react";
import { useVisible } from "../context/Provider";
import { API, graphqlOperation } from "aws-amplify";
import { listCampaigns } from "../graphql/queries";
import CampaignForm from "../Forms/CampaignForm";

function Campaigns() {
  const { visible, setVisible } = useVisible();
  //---------------------States------------------------------
  // const [activeCampaign, setActiveCampaign] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  //---------------------Functions------------------------------
  const fetchCampaigns = async () => {
    try {
      const campaignData = await API.graphql(graphqlOperation(listCampaigns));
      // setIsLoading(false);
      setCampaigns(campaignData.data.listCampaigns.items);
      console.log(campaignData.data.listCampaigns.items, "campaing");
    } catch (error) {
      console.log("error with get clients :", error);
    }
  };
  useEffect(() => {
    fetchCampaigns();
  }, []);
  return (
    <>
      <Sidebar.Pushable as={List}>
        <Segment basic className="dFlex-sBetween">
          <Header as="h2">Campaigns</Header>
          <AddIcon setVisible={setVisible} />
        </Segment>
        {/* ---------------------TABLE HEADER---------------------------- */}

        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell collapsing>CLIENT</Table.HeaderCell>
              <Table.HeaderCell collapsing>CAMPAIGN</Table.HeaderCell>
              <Table.HeaderCell collapsing>AGENT</Table.HeaderCell>
              <Table.HeaderCell collapsing>START</Table.HeaderCell>
              <Table.HeaderCell collapsing>END</Table.HeaderCell>
              {/* <Table.HeaderCell collapsing>ON CAMPAIGN</Table.HeaderCell> */}
            </Table.Row>
          </Table.Header>
          {/* ---------------------TABLE BODY---------------------------- */}
          {campaigns.map((campaign, idx) => (
            <Table.Body>
              <Table.Row>
                <Table.Cell>{campaign.name}</Table.Cell>
                <Table.Cell>{campaign.name}</Table.Cell>
                <Table.Cell>{campaign.length}</Table.Cell>
                <Table.Cell>{campaign.startDate}</Table.Cell>
                <Table.Cell>{campaign.endDate}</Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>

        {/* ------------------------------------------------------------------
        -                             SIDEBAR - FORM                        -
        ------------------------------------------------------------------ */}
        <SidebarForm>
          <CampaignForm setVisible={setVisible} />
        </SidebarForm>
      </Sidebar.Pushable>
    </>
  );
}

export default Campaigns;
