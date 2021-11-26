import API, { graphqlOperation } from "@aws-amplify/api";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Header, Form, Table, Segment, TableCell } from "semantic-ui-react";
import { useKpis } from "../../../context/Provider";
import {
  createDailyReport,
  createKpi,
  updateKpi,
} from "../../../graphql/mutations";
import { getDailyReport } from "../../../graphql/queries";
import { getDateOfISOWeek, getYYYYMMDD } from "../../../lib/function";
var currentWeekNumber = require("current-week-number");
//======================
//     + function +
//======================
const ReportTab = ({
  campaignDetails: { status, id, agent, client, dailyReports },
}) => {
  const { dailyReportId } = useParams();
  // console.log(dailyReportId, "DR id");
  console.log("dailyReports:", dailyReports.items, dailyReports.items[0].kpis);
  console.log("    |   |   |   |   |    ");
  // console.log(
  //   dailyReports?.items[0].createdAt
  //     .slice(0, 10)
  //     .split("-")
  //     .reverse()
  //     .join("-"),
  //   "DRs"
  // );
  const { kpis, setKpis } = useKpis();

  const [dailyReport, setDailyReport] = useState({});
  const initialState = { dates: "", kpi: [] };
  const [dailyReportsWeek, setDailyReportsWeek] = useState(initialState);
  const [weekArray, setWeekArray] = useState([]);
  const d = new Date().toString().slice(0, 3);
  // console.log(d, "d");
  // const dt = new Date(17 - 11 - 2021);
  // console.log(dt, "DT");
  //####################################################
  //     GET the first day of the WEEK we are in
  //####################################################
  const startWeekDate = getDateOfISOWeek(
    currentWeekNumber(new Date()),
    new Date().getFullYear()
  );
  const lastDay = startWeekDate.getDate() + 4;
  const endWeekDate = new Date(startWeekDate);
  endWeekDate.setDate(lastDay);
  //#####################################################
  //               WEEK ARRAY DATES
  //#####################################################
  // const dailyReportsArray = async (id) => {
  //   try {
  //     console.log("id:", id);
  //     const dailyReportData = await API.graphql(
  //       graphqlOperation(getDailyReport, { id: id })
  //     );
  //     console.log("succes");
  //     console.log("dailyReportsWeek.kpi:", dailyReportsWeek.kpi);
  //     return await dailyReportData.data.getDailyReport.items;
  //   } catch (error) {
  //     console.log("error get DR", error);
  //   }
  // };
  const getDaysArray = async (start, end) => {
    let i = 0;
    const newTab = [...weekArray];
    console.log("===================================");
    console.log("==                               ==");
    console.log("==                               ==");
    console.log("==      getDaysArray             ==");
    console.log("==                               ==");
    console.log("==                               ==");
    console.log("==                               ==");
    console.log("===================================");
    for (
      var weekArrayLoop = [], dt = new Date(start);
      dt <= end;
      dt.setDate(dt.getDate() + 1)
    ) {
      const daysArray = ["Mon", "Tue", "Wed", "Thu", "Fri"];
      if (dailyReports?.items[i]) {
        console.log("                  0                          ");

        let dateDR = new Date(dailyReports?.items[i]?.createdAt);
        console.log("                  01                          ");

        let dateDRToIsoStr = dateDR.toISOString().split("T")[0];
        console.log("                  1                          ");
        const toISOStr = (date) => {
          return new Date(date).toISOString().split("T")[0];
        };
        let dtToIsoStr = dt.toISOString().split("T")[0];
        // let dtStr = dt.toString().slice(0, 15);
        console.log("dateDRToIso  :", dateDRToIsoStr);
        console.log("dtStr  :", dtToIsoStr);
        let dateDRStr = dateDR.toString().slice(0, 15);
        // let dateDRStr = dateDR.toString().slice(0, 15);
        // let dtStr = dt.toString();
        let comp1 = new Date(dt).getTime();
        let comp2 = dateDR.getTime();
        let minus = comp2 - comp1;
        console.log("                  2                          ");

        let match = dailyReports?.items.filter((e) => {
          const date = toISOStr(e.createdAt);
          return date === dtToIsoStr;
        });
        // console.log(i, "M  A  T  C  H -- 1 :", match[match.length - 1]);
        // // console.log("M  A  T  C  H iii :", match[i]);
        // dailyReportsWeek.drInfo = match[match.length - 1];

        // console.log("M  A  T  C  H :", match);
        console.log(i, "comp1:", comp1, "comp2:", comp2, "minus:", minus);
        console.log("1 dailyReportsWeek:", dailyReportsWeek);

        // if (dtStr === dateDRStr) {
        // }
        console.log("                  3                          ");

        //86400000 miliSecs in 24hours
        //if today
        if (minus <= 86400000 && dailyReports?.items[i]) {
          // console.log(dailyReports?.items[i], "IFFFFFF");
          console.log("           IFFFFF            ");
          console.log("                             ");
          console.log("==                         ==");
          console.log("====     C O U C O U     ====");
          console.log("=======               =======");
          console.log("=============================");
          dailyReportsWeek.kpi = dailyReports?.items[i];
          console.log(dailyReportsWeek.kpi, "dailyReportsWeek.kpi");
          console.log("2 dailyReportsWeek:", { ...dailyReportsWeek });
        } else {
          console.log("ELSE");
          dailyReportsWeek.kpi = null;
        }
        console.log("                  4                          ");
      }
      dailyReportsWeek.dates = `${daysArray[i]}  ${getYYYYMMDD(new Date(dt))
        .split("-")
        .reverse()
        .join("-")}`;

      console.log("dailyReportsWeek.dates:", dailyReportsWeek.dates);
      console.log("3 dailyReportsWeek:", { ...dailyReportsWeek });
      // weekArrayLoop = [...weekArray];
      console.log("weekArrayLoop LOOP0000:", weekArrayLoop);
      console.log("                  5                          ");

      newTab.push({ ...dailyReportsWeek });
      console.log("                  6                          ");
      // console.log("weekArray LOOP[i]:", newTab[i], typeof newTab);
      console.log("newTab LOOP:", newTab, typeof newTab);
      console.log("                  7                          ");
      dailyReportsWeek.dates = "";
      console.log("                  8                          ");

      dailyReportsWeek.kpi = [];
      console.log("                  9                          ");
      dailyReportsWeek.drInfo = {};
      console.log("                  10                          ");

      // setDailyReportsWeek({});
      i++;
      console.log("                  11==                          ");
    }
    console.log("                  12                          ");

    console.log("++ newTab:+ +", newTab, typeof newTab);
    return newTab;
    // setWeekArray(weekArray);
  };
  // weekArray = getDaysArray(startWeekDate, endWeekDate);
  // console.log(weekArray, "WA", typeof weekArray);
  // console.log([weekArray], "WA");
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

        setDailyReport(dailyReportData.data.getDailyReport);
        setKpis(dailyReportData.data.getDailyReport.kpis.items);
        console.log("                 1 1 1                     ");
        const report = await getDaysArray(startWeekDate, endWeekDate);
        console.log("                 2 2 2                          ");

        console.log("===================================");
        console.log(typeof report, report);
        console.log("===================================");
        setWeekArray(report);
        console.log("succes Kpis");
      }
    } catch (error) {
      console.log("There is an error with getDailyReport", error);
    }
  };
  //#####################################################
  //               SUBMIT RES + CREATE NEW DR
  //#####################################################
  const newDailyReport = async () => {
    console.log("===================================");
    console.log("==                               ==");
    console.log("==                               ==");
    console.log("==            Submit             ==");
    console.log("==                               ==");
    console.log("==                               ==");
    console.log("==                               ==");
    console.log("===================================");
    const kpisSaved = dailyReport.kpis.items;
    try {
      for (let i = 0; i < kpis.length; i++) {
        delete kpis[i].createdAt;
        delete kpis[i].updatedAt;
        // delete kpis[i].campaign;
        // delete kpis[i].agent;
        // delete kpis[i].dailyReport;
        console.log(kpis[i], "KPI [iiii]");
        console.log(kpis[i].id, "KPI [ID]");
        console.log(kpis[i].result, "KPI [RES]");
        const updateResult = await API.graphql(
          graphqlOperation(updateKpi, {
            input: kpis[i],
          })
        );
        console.log(`succes with updating ${kpis[i]?.name}`);
        console.log("my K p I", updateResult.data.updateKpi.result);
      }
    } catch (error) {
      console.log("There is an error with update KPIS result", error);
    }
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
      console.log("There is an error with create Daily Report", error);
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

  useEffect(() => {
    fetchDailyReport();
  }, [dailyReportId]);

  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // console.log(kpis, "KPIS");
  // console.log(kpis, "KPIS");
  console.log(kpis, "<==*****==");

  // console.log("weekArray:-=-=-=-=-=", typeof weekArray, weekArray);
  // console.log("===================================");
  // console.log(kpis.result, "KPIS.RESULT");
  // console.log(startWeekDate, "startWeekDate");
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
          {weekArray.map((oneDay, idx) => {
            console.log(idx, "=====", oneDay);
            console.log(idx, "oneDayKPI", oneDay?.kpi);
            console.log(oneDay.dates.slice(0, 3), d);
            console.log(status);
            return (
              <>
                <Table.Row>
                  <Table.Cell>
                    <Header
                      as="h4"
                      inverted
                      color={oneDay.dates.slice(0, 3) === d ? "green" : null}
                    >
                      {oneDay.dates}
                    </Header>
                  </Table.Cell>
                  {oneDay.kpi && oneDay.dates.slice(0, 3) !== d
                    ? // ####################
                      // ooooo
                      // ####################
                      kpis.map((oneKpi) => (
                        <Table.Cell width={2}>{oneKpi.result}</Table.Cell>
                      ))
                    : // ####################
                    // ooooo
                    // ####################
                    oneDay.dates.slice(0, 3) === d && status === "true"
                    ? // ####################
                      // ooooo
                      // ####################
                      kpis.map((oneKpi, idx) => {
                        console.log(idx, "====>kpi:<====", oneKpi);
                        // ####################
                        // ooooo
                        // ####################
                        return !oneKpi.result ? (
                          <Table.Cell width={2}>
                            <Form.Input
                              type="text"
                              style={{ maxWidth: "5vw" }}
                              placeholder={`${oneKpi.name}`}
                              // disabled={oneDay.dates.slice(0, 3) !== d}
                              inverted
                              transparent
                              onChange={(e) => {
                                console.log([e.target.value]);
                                const result = Number(e.target.value);
                                console.log(result, "R  E  S");
                                setKpis((currentKpis) =>
                                  currentKpis.map((x) =>
                                    x.id === oneKpi.id ? { ...x, result } : x
                                  )
                                );
                              }}
                              value={oneKpi.result}
                            />
                          </Table.Cell>
                        ) : (
                          <Table.Cell width={2}>{oneKpi.result}</Table.Cell>
                        );
                        // ####################
                        // ooooo
                        // ####################
                      })
                    : null}
                  {oneDay.dates.slice(0, 3) === d && status === "true" && (
                    <TableCell colSpan="2">
                      <Form.Button type="submit" color="green" fluid>
                        Submit your work
                      </Form.Button>
                    </TableCell>
                  )}
                </Table.Row>
              </>
            );
          })}
        </Table.Body>
      </Table>
    </Form>
  ) : (
    <Segment as={Header}>That Campaign doesn't have a Daily Report</Segment>
  );
};

export default ReportTab;
