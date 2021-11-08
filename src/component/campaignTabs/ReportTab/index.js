import { Header, Form, Table } from "semantic-ui-react";

const ReportTab = () => (
  <Table
    striped
    padded
    // size="large"
    inverted
    celled
    // color="black"
    fluid
    style={{
      marginBottom: 0,
      //   backgroundColor: "white",
    }}
  >
    <Table.Row
      style={{
        backgroundColor: "#566A63",
      }}
    >
      <Table.HeaderCell className="dFlex-sBetween">Week 1</Table.HeaderCell>

      <Table.HeaderCell collapsing width={2}>
        KPi2
      </Table.HeaderCell>
      <Table.HeaderCell collapsing width={2}>
        KPi2
      </Table.HeaderCell>
      <Table.HeaderCell>Target</Table.HeaderCell>
      <Table.HeaderCell>Daily Points</Table.HeaderCell>
      <Table.HeaderCell>% Points</Table.HeaderCell>
    </Table.Row>
    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as="h4" inverted>
            00/00/00
          </Header>
        </Table.Cell>
        <Table.Cell width={1}>
          <Form.Input
            type="text"
            // style={{ maxWidth: "60%" }}
            // placeholder="ex: Matthew"
            // name="firstName"
            // value={form.firstName || ""}
            // onChange={onChange}
          />
        </Table.Cell>
        <Table.Cell width={1}>
          <Form.Input
            type="text"
            // style={{ maxWidth: "60%" }}

            // placeholder="ex: Matthew"
            // name="firstName"
            // value={form.firstName || ""}
            // onChange={onChange}
          />
        </Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as="h4" inverted>
            00/00/00
          </Header>
        </Table.Cell>
        <Table.Cell width={1}>
          <Form.Input
            type="text"
            // style={{ maxWidth: "60%", paddingRight: 0 }}
            placeholder="ex: 1"
            // name="firstName"
            // value={form.firstName || ""}
            // onChange={onChange}
          />
        </Table.Cell>
        <Table.Cell width={1}>
          <Form.Input
            type="text"
            // style={{ maxWidth: "60%" }}

            // placeholder="ex: Matthew"
            // name="firstName"
            // value={form.firstName || ""}
            // onChange={onChange}
          />
        </Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default ReportTab;
