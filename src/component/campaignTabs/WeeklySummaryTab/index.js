import { Table } from "semantic-ui-react";

const WeeklySummaryTab = () => (
  <div className="dFlex-center">
    <div className="dFlex" style={{ width: "20vw" }}>
      <Table striped padded inverted singleLine>
        {/* //_____________________ */}
        {/* <Table.Header> */}
        <Table.Row
          style={{
            backgroundColor: "#566A63",
          }}
        >
          <Table.HeaderCell collapsing>KPI</Table.HeaderCell>
          <Table.HeaderCell>Achived</Table.HeaderCell>
          <Table.HeaderCell>Target</Table.HeaderCell>
          <Table.HeaderCell collapsing>% OF TARGET COMPLETED</Table.HeaderCell>
        </Table.Row>
        {/* </Table.Header> */}
        {/* //_____________________ */}
        <Table.Body>
          <Table.Row>
            <Table.Cell>Contact Reply-IO</Table.Cell>
            <Table.Cell>0</Table.Cell>
            <Table.Cell>0</Table.Cell>
            <Table.Cell textAlign="center">0</Table.Cell>
            {/* //_____________________ */}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Meeting Booked</Table.Cell>
            <Table.Cell>0</Table.Cell>
            <Table.Cell>0</Table.Cell>
            <Table.Cell textAlign="center">0</Table.Cell>
          </Table.Row>
          {/* //_____________________ */}
          <Table.Row>
            <Table.Cell>Interested</Table.Cell>
            <Table.Cell>0</Table.Cell>
            <Table.Cell>0</Table.Cell>
            <Table.Cell textAlign="center">0</Table.Cell>
          </Table.Row>
          {/* //_____________________ */}
          <Table.Row>
            <Table.Cell>Open Rate %</Table.Cell>
            <Table.Cell>0</Table.Cell>
            <Table.Cell>0</Table.Cell>
            <Table.Cell textAlign="center">0</Table.Cell>
          </Table.Row>
          {/* //_____________________ */}
          <Table.Row>
            <Table.Cell>All Tasks</Table.Cell>
            <Table.Cell>0</Table.Cell>
          </Table.Row>
          {/* //_____________________ */}
          <Table.Row>
            <Table.Cell>Points</Table.Cell>
            <Table.Cell>0</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  </div>
);

export default WeeklySummaryTab;
