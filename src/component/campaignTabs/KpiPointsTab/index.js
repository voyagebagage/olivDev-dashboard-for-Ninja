import { Table } from "semantic-ui-react";

const KpiPointsTab = () => (
  <div className="dFlex-center">
    <div className="dFlex" style={{ width: "20vw" }}>
      <Table striped padded inverted singleLine stackable>
        <Table.Row style={{ backgroundColor: "#566A63" }}>
          <Table.HeaderCell colSpan="2">KPI Points (Coeff)</Table.HeaderCell>
        </Table.Row>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Outreached</Table.Cell>
            <Table.Cell textAlign="center">0</Table.Cell>
            {/* //_____________________ */}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Points</Table.Cell>
            <Table.Cell textAlign="center">0</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Position</Table.Cell>
            <Table.Cell textAlign="center">0</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Interested</Table.Cell>
            <Table.Cell textAlign="center">0</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  </div>
);

export default KpiPointsTab;
