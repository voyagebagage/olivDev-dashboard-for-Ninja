import { Table, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function AgentReport() {
  return (
    <>
      <Link to="/agent" style={{ color: "#566A63" }}>
        <Icon name="arrow left" size="large" />
        BACK
      </Link>
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
