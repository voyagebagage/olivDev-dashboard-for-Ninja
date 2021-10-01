import {
  Menu,
  Segment,
  Table,
  Label,
  Search,
  Header,
  Icon,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { PaginationLong } from "../component/Pagination";
function Agent() {
  return (
    <Segment basic padded style={{ width: "70vw" }}>
      <div className="dFlex-sBetween">
        <Segment basic>
          <Header as="h2">Agent:{"name"}</Header>
        </Segment>
        <Search />
      </div>
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>AGENT</Table.HeaderCell>
            <Table.HeaderCell>CAMPAIGNS</Table.HeaderCell>
            <Table.HeaderCell>RANKING MONTHLY</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row positive>
            <Table.Cell>
              <Label ribbon>First</Label>
            </Table.Cell>
            <Table.Cell>John Lilki</Table.Cell>
            <Table.Cell>
              <Link to="/agent-report">
                <Label tag>Ninja Academy</Label>
              </Link>
              <Link to="/agent-report">
                <Label tag>Air Vape</Label>
              </Link>
              <Link to="/agent-report">
                <Label tag>Cisco </Label>
              </Link>
            </Table.Cell>
            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
          </Table.Row>
          <Table.Row positive>
            <Table.Cell>
              <Label ribbon>Second</Label>
            </Table.Cell>
            <Table.Cell>Jamie Harington</Table.Cell>
            <Table.Cell>January 11, 2014</Table.Cell>
            <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
          </Table.Row>
          <Table.Row positive>
            <Table.Cell>
              <Label ribbon>Third</Label>
            </Table.Cell>
            <Table.Cell>Jill Lewis</Table.Cell>
            <Table.Cell>May 11, 2014</Table.Cell>
            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
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
      <PaginationLong />
    </Segment>
  );
}

export default Agent;
