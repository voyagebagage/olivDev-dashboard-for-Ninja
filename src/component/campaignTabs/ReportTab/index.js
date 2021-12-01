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
import {
  onCreateDailyReport,
  onCreateKpi,
} from "../../../graphql/subscriptions";
import { getDateOfISOWeek, getYYYYMMDD } from "../../../lib/function";
var currentWeekNumber = require("current-week-number");
//======================
//     + function +
//======================
const ReportTab = ({
  campaignDetails: { status, id, agent, client },
  dailyReports,
  setDailyReports,
}) => {
  const { dailyReportId } = useParams();
  // console.log(dailyReportId, "DR id");
  // console.log("dailyReports:", dailyReports.items, dailyReports.items[0].kpis);
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
  const initialReport = dailyReports[dailyReports.length - 1];
  const [dailyReport, setDailyReport] = useState(initialReport);
  const initialState = { date: "", dReport: {} };
  const [dailyReportsWeek, setDailyReportsWeek] = useState(initialState);

  const [weekArray, setWeekArray] = useState([]);
  const [todayResults, setTodayResults] = useState(false);
  const d = toISOStrDDMMYYY(new Date());
  // console.log(d, "d");
  // const dt = new Date(17 - 11 - 2021);
  // console.log(dt, "DT");
  function toISOStr(date) {
    return new Date(date).toISOString().split("T")[0];
  }
  function toISOStrDDMMYYY(date) {
    return new Date(`${date} GMT`)
      .toISOString()
      .split("T")[0]
      .split("-")
      .reverse()
      .join("-");
  }
  //####################################################
  //     GET the first day of the WEEK we are in
  //####################################################
  const startWeekDate = getDateOfISOWeek(
    currentWeekNumber(new Date()),
    new Date().getFullYear()
  );
  console.log("startWeekDate", startWeekDate);
  const lastDay = startWeekDate.getDate() + 4;
  console.log("lastDay", lastDay);
  const endWeekDate = new Date(startWeekDate);
  console.log("endWeekDate1", endWeekDate);
  endWeekDate.setDate(lastDay);
  console.log("endWeekDate2", endWeekDate);
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
      console.log("  ========================================== ");
      if (dailyReports[i]) {
        console.log("                  0                          ");
        // console.log("dt:", dt, typeof dt);
        let dateDR = new Date(dailyReports[i]?.createdAt);
        console.log("                  01                          ");
        console.log("dateDR:", dateDR, typeof dateDR);

        let dateDRToIsoStr = toISOStr(`${dateDR} GMT`);
        console.log("                  1                          ");
        let dtToIsoStr = toISOStr(`${dt} GMT`);
        console.log("dtToIsoStr:", typeof dtToIsoStr);
        //---------+++++++++++++
        let find = dailyReports.find((e) => {
          const date = toISOStr(e.createdAt);
          return dtToIsoStr === date;
        });
        console.log("                  02                          ");

        //---------+++++++++++++
        let findNullResult = dailyReports.find((e) => {
          const nullResult = e.kpis?.items[0]?.result;
          return nullResult === null;
        });
        console.log("                  002                          ");
        //---------+++++++++++++
        console.log("find:", find);
        console.log("findNullResult:", findNullResult);
        // let dateDRStr = dateDR.toString().slice(0, 15);
        // let comp1 = new Date(dt).getTime();
        // let comp2 = dateDR.getTime();
        //86400000 miliSecs in 24hours
        //if today
        // let minus = comp2 - comp1;
        console.log("                  2                          ");
        // console.log(i, "comp1:", comp1, "comp2:", comp2, "minus:", minus);
        console.log(
          i,
          "dt:",
          dt,
          "dtToIsoStr:",
          dtToIsoStr,
          "dateDR:",
          dateDR,
          "dateDRToIsoStr:",
          dateDRToIsoStr,
          "dailyReports[i]?.createdAt:",
          dailyReports[i]?.createdAt
        );
        console.log("1 dailyReportsWeek:", dailyReportsWeek);
        console.log("                  3                          ");
        console.log("n e wTab:", newTab);
        if (find) {
          console.log("==          IFFFFF         ==");
          console.log("====     C O U C O U     ====");
          console.log("=======               =======");
          console.log("=============================");
          dailyReportsWeek.dReport = find;
          console.log(dailyReportsWeek.dReport, "dailyReportsWeek.dReport");
          console.log("2 dailyReportsWeek:", { ...dailyReportsWeek });
        } else if (
          !find &&
          findNullResult &&
          findNullResult !== newTab[newTab.length - 2].dReport
        ) {
          console.log(" IF ELSE");
          console.log("==                         ==");
          console.log("====        IF ELSE      ====");
          console.log("=======               =======");
          console.log("=============================");
          dailyReportsWeek.dReport = findNullResult;
        } else {
          console.log("ELSE");
          console.log("==                         ==");
          console.log("====           ELSE      ====");
          console.log("=======               =======");
          console.log("=============================");
          dailyReportsWeek.dReport = null;
        }
        console.log("                  4                          ");
      }
      dailyReportsWeek.date = `${daysArray[i]}  ${toISOStrDDMMYYY(dt)}`;

      console.log(
        "dailyReportsWeek.date:",
        dailyReportsWeek.date,
        typeof dailyReportsWeek.date
      );
      console.log("3 dailyReportsWeek:", { ...dailyReportsWeek });
      // weekArrayLoop = [...weekArray];
      console.log("weekArrayLoop LOOP0000:", weekArrayLoop);
      console.log("                  5                          ");

      newTab.push({ ...dailyReportsWeek });
      console.log("                  6                          ");
      // console.log("weekArray LOOP[i]:", newTab[i], typeof newTab);
      console.log("newTab LOOP:", newTab, typeof newTab);
      console.log("                  7                          ");
      dailyReportsWeek.date = null;
      console.log("                  8                          ");

      dailyReportsWeek.dReport = null;
      console.log("                  9                          ");
      // dailyReportsWeek.dReport = {};
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
    // setTodayResults(false);
    try {
      console.log("                 1 1 1                     ");
      const report = await getDaysArray(startWeekDate, endWeekDate);
      console.log("                 2 2 2                          ");

      console.log("===================================");
      console.log(typeof report, report);
      console.log("===================================");
      setWeekArray(report);
      console.log("succes Kpis");
      // }
    } catch (error) {
      console.log("There is an error with getDailyReport", error);
    }
  };
  //#####################################################
  //               SUBMIT RES + CREATE NEW DR
  //#####################################################
  const newDailyReport = async () => {
    // setTodayResults(true);
    console.log("===================================");
    console.log("==                               ==");
    console.log("==                               ==");
    console.log("==            Submit             ==");
    console.log("==                               ==");
    console.log("==                               ==");
    console.log("==                               ==");
    console.log("===================================");
    const kpisSaved = dailyReport.kpis.items;
    console.log("kpisSaved:", kpisSaved);
    try {
      //~~~~~~~~~ UPDATE KPI ~~~~~~~~~~
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
      setKpis([]);
    } catch (error) {
      console.log("There is an error with update KPIS result", error);
    }
    let newDReport = {};
    console.log(dailyReport, "dailyreport submit");
    try {
      //~~~~~~~~~ CREATE NEW DR ~~~~~~~~~~
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
      newDReport = createNewDR.data.createDailyReport;

      console.log(createNewDR.data.createDailyReport, "createNewDR");
    } catch (error) {
      console.log("There is an error with create Daily Report", error);
    }
    console.log(kpisSaved, "SAVED");
    try {
      //~~~~~~~~~ CREATE NEW KPIS ~~~~~~~~~~
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
              kpiDailyReportId: newDReport.id,
              ...kpisSaved[i],
            },
          })
        );
        kpis.push(newKpi.data.createKpi);
        console.log("coco");
        console.log(newKpi.data.createKpi, "kpi");
      }
      console.log("[...dailyReports, newDReport]:", [
        ...dailyReports,
        newDReport,
      ]);
      await setDailyReports([...dailyReports, newDReport]);
      // await fetchDailyReport();
    } catch (error) {
      console.log("There is an erro with create Kpi ", error);
    }

    console.log("succes with updating A L L RESULTS");
  };

  useEffect(() => {
    fetchDailyReport();
    //  --------------Suscription--------------------
  }, [dailyReports]);
  // useEffect(() => {
  //   const subscription = API.graphql(graphqlOperation(onCreateKpi)).subscribe({
  //     next: (eventData) => {
  //       const newDailyR = eventData.value.data.onCreateDailyReport;
  //       setDailyReports([...dailyReports, newDailyR]);
  //     },
  //   });
  //   return () => subscription.unsubscribe();
  // }, []);
  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // console.log(kpis, "KPIS");
  console.log(kpis, "<==***KPIS**==");
  console.log(dailyReport, "dailyReport");
  console.log("<-- d a i l y   R e p o r t s: -->", dailyReports);

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
            console.log(idx, "oneDaydReport", oneDay.dReport?.kpis?.items);
            console.log(
              idx,
              "oneDay.date sliced",
              oneDay.date.slice(5, 15),
              typeof oneDay.date
            );
            console.log(idx, "d d d", d, typeof d);
            console.log(status);
            return (
              <>
                <Table.Row>
                  <Table.Cell>
                    <Header
                      as="h4"
                      inverted
                      color={oneDay.date.slice(5, 15) === d ? "green" : null}
                    >
                      {oneDay.date}
                    </Header>
                  </Table.Cell>
                  {oneDay.dReport &&
                    oneDay.dReport?.kpis?.items[0].result !== null && // ####################
                    // ooooo
                    // ####################
                    oneDay.dReport?.kpis?.items.map((oneKpi) => (
                      <Table.Cell width={2}>{oneKpi.result}</Table.Cell>
                    ))}
                  {!oneDay.dReport && <Table.Cell>bit au cul</Table.Cell>}
                  {oneDay.dReport &&
                    oneDay.dReport?.kpis?.items[0].result === null &&
                    oneDay.date.slice(5, 15) === d &&
                    status === "true" &&
                    // ####################
                    // ooooo
                    // ####################
                    kpis.map((oneKpi, idx) => {
                      console.log(idx, "====>kpi:<====", oneKpi);
                      // ####################
                      // ooooo
                      // ####################
                      return (
                        <Table.Cell width={2}>
                          <Form.Input
                            type="text"
                            style={{ maxWidth: "5vw" }}
                            placeholder={`${oneKpi.name}`}
                            disabled={oneDay.date.slice(5, 15) !== d}
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
                            value={oneKpi.result || ""}
                          />
                        </Table.Cell>
                      );
                      // ####################
                      // ooooo
                      // ####################
                    })}
                  {oneDay.dReport &&
                    oneDay.dReport?.kpis?.items[0].result === null &&
                    oneDay.date.slice(5, 15) === d &&
                    status === "true" && (
                      <TableCell colSpan="2">
                        <Form.Button type="submit" color="green" fluid>
                          Submit your work
                        </Form.Button>
                      </TableCell>
                    )}
                  {oneDay.dReport &&
                    oneDay.dReport?.kpis?.items[0].result !== null && (
                      <>
                        <TableCell>DailyPoints</TableCell>
                        <TableCell>TotalPoint</TableCell>
                      </>
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
// if (dailyReportId) {
//   const dailyReportData = await API.graphql(
//     graphqlOperation(getDailyReport, {
//       id: dailyReportId,
//     })
//   );
//   console.log(dailyReportData.data.getDailyReport.kpis.items, "setKPIS");

//   setDailyReport(dailyReportData.data.getDailyReport);
// setKpis(dailyReportData.data.getDailyReport.kpis.items);
