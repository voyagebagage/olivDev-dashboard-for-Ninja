import { Header, Form, Table } from "semantic-ui-react";
import { getYYYYMMDD } from "../../../lib/function";
const ReportTab = ({ campaignDetails: { startDate, endDate } }) => {
  var currentWeekNumber = require("current-week-number");
  currentWeekNumber(startDate);
  currentWeekNumber(endDate);
  console.log(currentWeekNumber(startDate), startDate);
  console.log(currentWeekNumber(endDate), endDate);
  console.log(currentWeekNumber(new Date()), new Date());
  function getDateOfISOWeek(w, y) {
    var simple = new Date(y, 0, 1 + (w - 1) * 7);
    var dow = simple.getDay();
    var ISOweekStart = simple;
    if (dow <= 4) ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
    else ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
    return ISOweekStart;
  }
  const startWeekDate = getYYYYMMDD(
    getDateOfISOWeek(currentWeekNumber(new Date()), new Date().getFullYear())
  )
    .split("-")
    .reverse()
    .join("-");
  console.log(
    getYYYYMMDD(
      getDateOfISOWeek(currentWeekNumber(new Date()), new Date().getFullYear())
    )
      .split("-")
      .reverse()
      .join("-"),
    "coucou"
  );
  // getYYYYMMDD()
  return (
    <Table
      striped
      padded
      // size="large"
      singleLine
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
        <Table.HeaderCell className="dFlex-sBetween">
          Week {currentWeekNumber(startDate)}
        </Table.HeaderCell>

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
              {startWeekDate}
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
      </Table.Body>
    </Table>
  );
};

export default ReportTab;
