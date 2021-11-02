import React, { useState, useEffect } from "react";
import { Segment, Table, Label, Search, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { PaginationLong } from "../component/Pagination";
//------------------------graphQl----------------------
import { API, graphqlOperation } from "aws-amplify";
import { listAgents, agentByTotalPoints } from "../graphql/queries";
/* ------------------------------------------------------------------
-                               Main function                       -
------------------------------------------------------------------ */
function Agent() {
  const SORT = {
    ASC: "ASC",
    DESC: "DESC",
  };
  const limit = 20;
  //---------------------States------------------------------
  const [agents, setAgents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortDirection, setSortDirection] = useState(SORT.DESC);

  const variables = {
    // nextToken,
    limit,
    // filter,
    // sortDirection,
    // sort: { direction: directionDropDown, field: fieldDropDown.campaign },
    category: "agent",
    sortDirection: "DESC",
  };
  //---------------------Functions-------------------------------
  const fetchAgents = async () => {
    try {
      const agentData = await API.graphql(
        // graphqlOperation(searchAgents)
        graphqlOperation(agentByTotalPoints, variables)
      );
      setAgents(agentData.data.agentByTotalPoints.items);
      console.log(agentData.data.agentByTotalPoints.items, "client");
      setIsLoading(false);
    } catch (error) {
      console.log("error with get clients :", error);
    }
  };
  useEffect(() => {
    fetchAgents();
  }, []);
  return (
    <Segment basic padded style={{ width: "70vw" }}>
      <div className="dFlex-sBetween">
        <Segment basic>
          <Header as="h2">Agents</Header>
        </Segment>
        <Search />
      </div>
      <Table striped>
        {/* ----------------TABLE HEADER---------------- */}
        <Table.Header>
          <Table.Row>
            {/* <Table.HeaderCell>ID</Table.HeaderCell> */}
            <Table.HeaderCell>AGENT</Table.HeaderCell>
            <Table.HeaderCell collapsing width={7}>
              CAMPAIGNS
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center">
              RANK (MONTHLY)
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {/* -----------------TABLE BODY----------------- */}
        {agents.map((agent, idx) => {
          return (
            <Table.Body>
              <Table.Row>
                {/* <Table.Cell>1</Table.Cell> */}
                <Table.Cell>{agent.name}</Table.Cell>
                <Table.Cell
                  singleLine
                  collapsing
                  // className="campaignsTags"
                >
                  {agent.campaigns.items
                    .slice(0)
                    .reverse()
                    .map((campaign, idx) => {
                      console.log(campaign);
                      console.log(
                        agent.campaigns.items,
                        "agent.campaigns.items"
                      );
                      return (
                        <Link
                          to={`/agent-report/${agent.name}/${campaign.name}/${campaign.id}`}
                          key={campaign.id}
                        >
                          <Label
                            basic
                            color="black"
                            style={{ marginRight: "1.5%" }}
                          >
                            {campaign.name}
                          </Label>
                        </Link>
                      );
                    })}
                </Table.Cell>
                <Table.Cell textAlign="center">{idx + 1}</Table.Cell>
              </Table.Row>
            </Table.Body>
          );
        })}
      </Table>
      <PaginationLong />
    </Segment>
  );
}

export default Agent;
