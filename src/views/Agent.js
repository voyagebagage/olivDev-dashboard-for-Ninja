import { Menu, Segment, Table, Label } from "semantic-ui-react";

function Agent() {
  return (
    <>
      <Menu fluid widths={3}>
        <Menu.Item
          name="Daily"
          // active={activeItem === "Daily"}
          // onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Weekly"
          // // active={activeItem === "Weekly"}
          // onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Monthly"
          // active={activeItem === "Monthly"}
          // onClick={this.handleItemClick}
        />
      </Menu>

      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>RANK</Table.HeaderCell>
            <Table.HeaderCell>NINJA</Table.HeaderCell>
            <Table.HeaderCell>Q.LEADS</Table.HeaderCell>
            <Table.HeaderCell>INTERESTED</Table.HeaderCell>
            <Table.HeaderCell>POINTS</Table.HeaderCell>
            <Table.HeaderCell>% TO TARGET</Table.HeaderCell>
            <Table.HeaderCell>+/-</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row positive>
            <Table.Cell>
              <Label color="#8CABA0" ribbon>
                First
              </Label>
            </Table.Cell>
            <Table.Cell>John Lilki</Table.Cell>
            <Table.Cell>September 14, 2013</Table.Cell>
            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
            <Table.Cell>No</Table.Cell>
          </Table.Row>
          <Table.Row positive>
            <Table.Cell>
              <Label ribbon>Second</Label>
            </Table.Cell>
            <Table.Cell>Jamie Harington</Table.Cell>
            <Table.Cell>January 11, 2014</Table.Cell>
            <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
          </Table.Row>
          <Table.Row positive>
            <Table.Cell>
              <Label ribbon>Third</Label>
            </Table.Cell>
            <Table.Cell>Jill Lewis</Table.Cell>
            <Table.Cell>May 11, 2014</Table.Cell>
            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>John Lilki</Table.Cell>
            <Table.Cell>September 14, 2013</Table.Cell>
            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
            <Table.Cell>No</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>John Lilki</Table.Cell>
            <Table.Cell>September 14, 2013</Table.Cell>
            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
            <Table.Cell>No</Table.Cell>
          </Table.Row>
          <Table.Row negative>
            <Table.Cell>Jamie Harington</Table.Cell>
            <Table.Cell>January 11, 2014</Table.Cell>
            <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
          </Table.Row>
          <Table.Row negative>
            <Table.Cell>Jill Lewis</Table.Cell>
            <Table.Cell>May 11, 2014</Table.Cell>
            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
          </Table.Row>
          <Table.Row negative>
            <Table.Cell>John Lilki</Table.Cell>
            <Table.Cell>September 14, 2013</Table.Cell>
            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
            <Table.Cell>No</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
}

export default Agent;
