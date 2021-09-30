import {
  Header,
  Image,
  Menu,
  Label,
  Table,
  Icon,
  Segment,
  Pagination,
  Grid,
  Container,
} from "semantic-ui-react";
import { PaginationLong } from "../component/Pagination";

import { FullScreen, useFullScreenHandle } from "react-full-screen";

import { useState } from "react";

function Dashboard() {
  const [activeItem, setActiveItem] = useState("daily");
  const handle = useFullScreenHandle();
  return (
    <Segment basic>
      <div
        style={
          handle.active
            ? { paddingLeft: "10%", paddingRight: "10%", paddingTop: "2%" }
            : { width: "50vw" }
        }
      >
        <FullScreen handle={handle}>
          <Menu fluid widths={3} style={{ marginTop: "5vh" }}>
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
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Icon
              name="expand arrows alternate"
              color="grey"
              size="large"
              onClick={handle.enter}
            />
          </div>

          <Table striped style={{ marginTop: "2vh" }}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>RANK</Table.HeaderCell>
                <Table.HeaderCell>NINJA</Table.HeaderCell>
                <Table.HeaderCell>POINTS</Table.HeaderCell>
                {/* <Table.HeaderCell>% TO TARGET</Table.HeaderCell> */}
                <Table.HeaderCell>+/-</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row positive>
                <Table.Cell>
                  <Label color="#8CABA0" ribbon>
                    <Icon
                      name="first order"
                      color="yellow"
                      // size="large"
                    />
                    1st
                  </Label>
                </Table.Cell>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>pts</Table.Cell>
                <Table.Cell>
                  {/* <Icon name="level down alternate" color="red" /> */}-
                </Table.Cell>
              </Table.Row>
              <Table.Row positive>
                <Table.Cell>
                  <Label ribbon>2nd</Label>
                </Table.Cell>
                <Table.Cell>Jamie Harington</Table.Cell>
                <Table.Cell>pts</Table.Cell>
                <Table.Cell>
                  <Icon name="level down alternate" color="red" />
                </Table.Cell>
              </Table.Row>
              <Table.Row positive>
                <Table.Cell>
                  <Label ribbon>3rd</Label>
                </Table.Cell>
                <Table.Cell>Jill Lewis</Table.Cell>
                <Table.Cell>pts</Table.Cell>
                <Table.Cell>
                  <Icon name="level up alternate" color="green" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
                <Table.Cell>pts</Table.Cell>
                <Table.Cell>
                  <Icon name="level up alternate" color="green" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
                <Table.Cell>pts</Table.Cell>
                <Table.Cell>
                  <Icon name="level up alternate" color="green" />
                </Table.Cell>
              </Table.Row>
              <Table.Row negative>
                <Table.Cell>Jamie Harington</Table.Cell>
                <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                <Table.Cell>pts</Table.Cell>
                <Table.Cell>
                  <Icon name="level down alternate" color="red" />
                </Table.Cell>
              </Table.Row>
              <Table.Row negative>
                <Table.Cell>Jill Lewis</Table.Cell>
                <Table.Cell>May 11, 2014</Table.Cell>
                <Table.Cell>pts</Table.Cell>
                <Table.Cell>
                  <Icon name="level down alternate" color="red" />
                </Table.Cell>
              </Table.Row>
              <Table.Row negative>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
                <Table.Cell>pts</Table.Cell>
                <Table.Cell>
                  <Icon name="level down alternate" color="red" />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <PaginationLong />
        </FullScreen>
        <Segment basic>
          <Container text>
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
      </div>
    </Segment>
  );
}

export default Dashboard;
