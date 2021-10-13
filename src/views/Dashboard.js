import "../Layout.css";
import React, { useState, useEffect } from "react";

import {
  Header,
  Image,
  Menu,
  Label,
  Table,
  Icon,
  Segment,
  Grid,
  Container,
} from "semantic-ui-react";
import { PaginationLong } from "../component/Pagination";
import { API, graphqlOperation } from "aws-amplify";

import { listAgents } from "../graphql/queries";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function Dashboard() {
  const [activeItem, setActiveItem] = useState("daily");
  const handle = useFullScreenHandle();
  const [agents, setAgents] = useState([]);
  const fetchAgent = async () => {
    try {
      const agentData = await API.graphql(graphqlOperation(listAgents));
      setAgents(agentData.data.listAgents.items);
      // console.log(agents);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => fetchAgent(), []);
  return (
    <Segment basic style={{ width: "50vw", height: "100vh" }}>
      <div className="dFlex-sBetween">
        <Header as="h2">Leaderboard</Header>
        <Icon
          name="expand arrows alternate"
          color="grey"
          size="large"
          onClick={handle.enter}
        />
      </div>
      <FullScreen handle={handle}>
        <div
          style={
            handle.active
              ? { paddingLeft: "10%", paddingRight: "10%", paddingTop: "5%" }
              : null
          }
        >
          <Menu fluid widths={3}>
            <Menu.Item
              name="daily"
              active={activeItem === "Daily"}
              onClick={() => setActiveItem("daily")}
            />
            <Menu.Item
              name="weekly"
              active={activeItem === "Weekly"}
              onClick={() => setActiveItem("weekly")}
            />
            <Menu.Item
              name="monthly"
              active={activeItem === "Monthly"}
              onClick={() => setActiveItem("monthly")}
            />
          </Menu>

          <Table striped style={{ marginTop: "2vh" }}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>RANK</Table.HeaderCell>
                <Table.HeaderCell>NINJA</Table.HeaderCell>
                <Table.HeaderCell>POINTS</Table.HeaderCell>
                {/* <Table.HeaderCell>% TO TARGET</Table.HeaderCell> */}
              </Table.Row>
            </Table.Header>
            {agents.map((agent, idx) => (
              <Table.Body>
                <Table.Row
                  positive={idx < 3 ? true : false}
                  negative={idx >= agents.length - 3 ? true : false}
                >
                  <Table.Cell>
                    {idx < 3 ? (
                      <Label ribbon>
                        <Icon name="first order" color="yellow" />
                        {idx + 1}
                      </Label>
                    ) : (
                      idx + 1
                    )}
                  </Table.Cell>
                  <Table.Cell>{agent.name}</Table.Cell>
                  <Table.Cell>
                    {agent.points ? agent.points : "-"}pts
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
          <PaginationLong />
        </div>
      </FullScreen>

      <Segment basic>
        <Container text style={{ marginTop: "-3%" }}>
          <Header size="small">TOTALS</Header>
          <p>
            lipsum textlipsum textlipsum textlipsum textlipsum textlipsum
            textlipsum textlipsum text
          </p>
        </Container>
      </Segment>
      <Grid floated relaxed="very" columns={4}>
        <Grid.Column>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
        <Grid.Column>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
        <Grid.Column>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
        <Grid.Column>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

export default Dashboard;
