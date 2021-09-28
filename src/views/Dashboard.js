import {
  Header,
  Image,
  Menu,
  Label,
  Table,
  Icon,
  Segment,
} from "semantic-ui-react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import { useState } from "react";

function Dashboard() {
  const [activeItem, setActiveItem] = useState("daily");
  const handle = useFullScreenHandle();
  console.log(handle.active);
  return (
    <Segment basic>
      <FullScreen handle={handle}>
        <div
          style={
            handle.active
              ? { paddingLeft: "10%", paddingRight: "10%", paddingTop: "2%" }
              : null
          }
        >
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
                <Table.HeaderCell>Q.LEADS</Table.HeaderCell>
                <Table.HeaderCell>INTERESTED</Table.HeaderCell>
                {/* <Table.HeaderCell>POINTS</Table.HeaderCell> */}
                <Table.HeaderCell>% TO TARGET</Table.HeaderCell>
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
                    First
                  </Label>
                </Table.Cell>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>%</Table.Cell>
                <Table.Cell>
                  {/* <Icon name="level down alternate" color="red" /> */}-
                </Table.Cell>
              </Table.Row>
              <Table.Row positive>
                <Table.Cell>
                  <Label ribbon>Second</Label>
                </Table.Cell>
                <Table.Cell>Jamie Harington</Table.Cell>
                <Table.Cell>January 11, 2014</Table.Cell>
                <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                <Table.Cell>%</Table.Cell>
                <Table.Cell>
                  <Icon name="level down alternate" color="red" />
                </Table.Cell>
              </Table.Row>
              <Table.Row positive>
                <Table.Cell>
                  <Label ribbon>Third</Label>
                </Table.Cell>
                <Table.Cell>Jill Lewis</Table.Cell>
                <Table.Cell>May 11, 2014</Table.Cell>
                <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                <Table.Cell>%</Table.Cell>
                <Table.Cell>
                  <Icon name="level up alternate" color="green" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>%</Table.Cell>
                <Table.Cell>
                  <Icon name="level up alternate" color="green" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>%</Table.Cell>
                <Table.Cell>
                  <Icon name="level up alternate" color="green" />
                </Table.Cell>
              </Table.Row>
              <Table.Row negative>
                <Table.Cell>Jamie Harington</Table.Cell>
                <Table.Cell>January 11, 2014</Table.Cell>
                <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>%</Table.Cell>
                <Table.Cell>
                  <Icon name="level down alternate" color="red" />
                </Table.Cell>
              </Table.Row>
              <Table.Row negative>
                <Table.Cell>Jill Lewis</Table.Cell>
                <Table.Cell>May 11, 2014</Table.Cell>
                <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>%</Table.Cell>
                <Table.Cell>
                  <Icon name="level down alternate" color="red" />
                </Table.Cell>
              </Table.Row>
              <Table.Row negative>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>%</Table.Cell>
                <Table.Cell>
                  <Icon name="level down alternate" color="red" />
                </Table.Cell>{" "}
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </FullScreen>
    </Segment>
  );
}

export default Dashboard;
