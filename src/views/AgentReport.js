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
export default function AgentReport() {
  return (
    <>
      <Link to="/agent">
        <Icon name="arrow left" />
      </Link>{" "}
      <Header as="h3">Agent:{"name"}</Header>
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
