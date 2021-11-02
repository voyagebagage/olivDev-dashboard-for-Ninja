import { Table, Header, Icon } from "semantic-ui-react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import API, { graphqlOperation } from "@aws-amplify/api";
import { getCampaign } from "../graphql/queries";

export default function AgentReport() {
  const { agentName, campaignName, id } = useParams();
  console.log({ agentName, campaignName, id }, "params");

  //xxxxxxxxxxxxxxxxxx**************xxxxxxxxxxxxxxxxxxxxxx
  const fetchCampaign = async () => {
    try {
      const campaignData = await API.graphql(
        graphqlOperation(getCampaign, { id: id })
      );
      console.log(campaignData, "campaignData");
    } catch (error) {
      console.log("there is an error with getCampaign", error);
    }
  };
  useEffect(() => fetchCampaign(), []);
  return (
    <>
      <Link to="/agent" style={{ color: "#566A63" }}>
        <Icon name="arrow left" size="large" />
        BACK
      </Link>
      <Header as="h3">Agent: {agentName}</Header>
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>KP1</Table.HeaderCell>
            <Table.HeaderCell>KP2</Table.HeaderCell>
            <Table.HeaderCell>KP3</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
      </Table>
    </>
  );
}
