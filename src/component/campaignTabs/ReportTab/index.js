import API, { graphqlOperation } from "@aws-amplify/api";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Header, Form, Table, Segment, TableCell } from "semantic-ui-react";
import { createDailyReport, createKpi } from "../../../graphql/mutations";
import { getDailyReport } from "../../../graphql/queries";
import { getDateOfISOWeek, getYYYYMMDD } from "../../../lib/function";
var currentWeekNumber = require("current-week-number");
//=====================
//     + function +
//=====================
const ReportTab = ({ campaignDetails: { status, id, agent, client } }) => {
  const { dailyReportId } = useParams();
  console.log(dailyReportId);
  const [kpis, setKpis] = useState([]);
  const [dailyReport, setDailyReport] = useState({});
  const d = new Date().toString().slice(0, 3);
  console.log(d, "d");
  //####################################################
  //     GET the first day of the WEEK we are in
  //####################################################
  const startWeekDate = getDateOfISOWeek(
    currentWeekNumber(new Date()),
    new Date().getFullYear()
  );
  console.log(
    getDateOfISOWeek(currentWeekNumber(new Date()), new Date().getFullYear()),
    "STARTWEEKDATE"
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
        if (
          new Date().getDay() === 2 &&
          dailyReportData.data.getDailyReport.kpis.items?.nextWeekTarget
        ) {
          console.log("piuouPIOU");
        }
        setDailyReport(dailyReportData.data.getDailyReport);
        setKpis(dailyReportData.data.getDailyReport.kpis.items);
        console.log("succes Kpis");
      }
    } catch (error) {
      console.log("There is an error with getDailyReport", error);
    }
  };
  //#####################################################
  //               FETCH DAILY-REPORT
  //#####################################################
  const newDailyReport = async () => {
    const kpisSaved = dailyReport.kpis.items;
    let idReport = "";
    console.log(dailyReport, "dailyreport sub");
    try {
      console.log("coucou");
      //here can choose btween id from campaign or camp of DR
      delete dailyReport.kpis;
      delete dailyReport.id;
      delete dailyReport.campaign;
      delete dailyReport.createdAt;
      delete dailyReport.updatedAt;
      delete dailyReport.weeklyReport;
      delete dailyReport.monthlyReport;
      const createNewDR = await API.graphql(
        graphqlOperation(createDailyReport, {
          input: { dailyReportCampaignId: id, ...dailyReport },
        })
      );
      idReport = createNewDR.data.createDailyReport.id;
      console.log(createNewDR.data.createDailyReport, "createNewDR");
    } catch (error) {
      console.log("There is an erro with create Daily Report", error);
    }
    console.log(kpisSaved, "SAVED");
    try {
      console.log("1");
      for (let i = 0; i < kpisSaved.length; i++) {
        console.log("2");
        delete kpisSaved[i].createdAt;
        delete kpisSaved[i].updatedAt;
        delete kpisSaved[i].id;
        const newKpi = await API.graphql(
          graphqlOperation(createKpi, {
            input: {
              kpiAgentId: agent.id,
              kpiCampaignId: id,
              kpiDailyReportId: idReport,
              ...kpisSaved[i],
            },
          })
        );
        console.log("coco");
        console.log(newKpi.data.createKpi, "kpi");
      }
    } catch (error) {
      console.log("There is an erro with create Kpi ", error);
    }

    console.log("succes with updating A L L RESULTS");
  };

  useEffect(() => fetchDailyReport(), [dailyReportId]);

  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  console.log(kpis, "KPIS");
  console.log(kpis.result, "KPIS.RESULT");
  console.log(id, "ID");
  return dailyReportId ? (
    <Form onSubmit={newDailyReport}>
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
              Week {currentWeekNumber(new Date())}
            </Table.HeaderCell>
            {dailyReportId &&
              kpis.map((oneKpi) => (
                <Table.HeaderCell width={2} key={oneKpi.name}>
                  {oneKpi.name}
                </Table.HeaderCell>
              ))}

            <Table.HeaderCell>Daily Points</Table.HeaderCell>
            <Table.HeaderCell>% Points</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {weekArray.map((oneDay, idx) => (
            <Table.Row>
              <Table.Cell>
                <Header
                  as="h4"
                  inverted
                  color={oneDay.slice(0, 3) === d ? "green" : null}
                >
                  {oneDay}
                </Header>
              </Table.Cell>
              {/* {oneDay !== d && <Table.Cell width={2}>coucouc</Table.Cell>} */}
              {kpis &&
                kpis.map((kpi, idx) => (
                  <Table.Cell width={2}>
                    {oneDay.slice(0, 3) === d && status === "true" && (
                      <Form.Input
                        type="text"
                        style={{ maxWidth: "5vw" }}
                        placeholder={`${kpi.name}`}
                        disabled={oneDay.slice(0, 3) !== d}
                        inverted
                        transparent
                        onChange={(e) => {
                          const result = Number(e.target.value);
                          // console.log(target, "TAR GET");
                          setKpis((currentResult) =>
                            currentResult.map((x) =>
                              x.id === kpi.id ? { ...x, result } : x
                            )
                          );
                        }}
                        value={kpi.result || ""}
                      />
                    )}
                    {/* {oneDay.slice(0, 3) !== d && kpi.result} */}
                  </Table.Cell>
                ))}
              {oneDay.slice(0, 3) === d && status === "true" && (
                <TableCell colSpan="2">
                  <Form.Button
                    type="submit"
                    color="green"
                    fluid
                    // onClick={newDailyReport}
                  >
                    Submit your work
                  </Form.Button>
                </TableCell>
              )}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Form>
  ) : (
    <Segment as={Header}>That Campaign doesn't have a Daily Report</Segment>
  );
};

export default ReportTab;
