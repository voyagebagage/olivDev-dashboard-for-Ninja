import API, { graphqlOperation } from "@aws-amplify/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header, Form, Table, Segment } from "semantic-ui-react";
import { getDailyReport } from "../../../graphql/queries";
import { getYYYYMMDD } from "../../../lib/function";
//====================
//      function
//====================
const ReportTab = ({ campaignDetails: { startDate } }) => {
  const { dailyReportId } = useParams();
  console.log(dailyReportId);
  var currentWeekNumber = require("current-week-number");
  const [kpis, setKpis] = useState([]);
  // console.log(dailyReportId, "dailyReportId");
  // console.log(dailyReportId?.items[0].id, "dailyReportId.items.id");

  //####################################################
  //                GET the WEEK we are in
  //####################################################
  function getDateOfISOWeek(w, y) {
    var simple = new Date(y, 0, 1 + (w - 1) * 7);
    var dow = simple.getDay();
    var ISOweekStart = simple;
    if (dow <= 4) ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
    else ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
    return ISOweekStart;
  }
  //----------------------------------------------
  const startWeekDate = getDateOfISOWeek(
    currentWeekNumber(new Date()),
    new Date().getFullYear()
  );
  const lastDay = startWeekDate.getDate() + 4;
  const endWeekDate = new Date(startWeekDate);
  endWeekDate.setDate(lastDay);
  //----------------------------------------------

  //#####################################################
  //               WEEK ARRAY DATES
  //#####################################################
  var getDaysArray = function (start, end) {
    let i = 0;
    for (
      var weekArray = [], dt = new Date(start);
      dt <= end;
      dt.setDate(dt.getDate() + 1)
    ) {
      const daysArray = ["Mon", "Tues", "Wed", "Thur", "Fri"];
      weekArray.push(
        `${daysArray[i]}  ${getYYYYMMDD(new Date(dt))
          .split("-")
          .reverse()
          .join("-")}`
      );
      i++;
    }
    return weekArray;
  };
  const weekArray = getDaysArray(startWeekDate, endWeekDate);
  //xxxxxxxxxxxxxxxxxxxx
  //#####################################################
  //               FETCH DAILY-REPORT
  //#####################################################
  const fetchDailyReport = async () => {
    try {
      if (dailyReportId) {
        const dailyReportData = await API.graphql(
          graphqlOperation(getDailyReport, {
            id: dailyReportId,
          })
        );
        console.log(dailyReportData.data.getDailyReport.kpis.items, "setKPIS");
        setKpis(dailyReportData.data.getDailyReport.kpis.items);
        console.log("succes Kpis");
      }
    } catch (error) {
      console.log("there is an error with getDailyReport", error);
    }
  };
  useEffect(() => fetchDailyReport(), [dailyReportId]);
  console.log(kpis, "KPIS");
  return dailyReportId ? (
    <Table
      striped
      padded
      singleLine
      inverted
      celled
      fluid
      style={{ marginBottom: 0 }}
    >
      <Table.Header>
        <Table.Row style={{ backgroundColor: "#566A63" }}>
          <Table.HeaderCell className="dFlex-sBetween">
            Week {currentWeekNumber(startDate)}
          </Table.HeaderCell>
          {dailyReportId &&
            kpis.map((oneKpi) => (
              <Table.HeaderCell width={2} key={oneKpi.name}>
                {oneKpi.name}
              </Table.HeaderCell>
            ))}

          {/* <Table.HeaderCell width={2}>KPiTwo</Table.HeaderCell> */}
          <Table.HeaderCell>Target</Table.HeaderCell>
          <Table.HeaderCell>Daily Points</Table.HeaderCell>
          <Table.HeaderCell>% Points</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {weekArray.map((oneDay, idx) => (
          <Table.Row>
            <Table.Cell>
              <Header as="h4" inverted>
                {oneDay}
              </Header>
            </Table.Cell>
            {kpis &&
              kpis.map((kpi, idx) => (
                <Table.Cell width={2}>
                  {/* {kpi.name} */}
                  <Form.Input
                    type="text"
                    style={{ maxWidth: "5vw" }}
                    placeholder={`${kpi.name}`}
                    // name="firstName"
                    // value={form.firstName || ""}
                    // onChange={onChange}
                  />
                </Table.Cell>
              ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ) : (
    <Segment as={Header}>That Campaign doesn't have a Daily Report</Segment>
  );
};

export default ReportTab;
