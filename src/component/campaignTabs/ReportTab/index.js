import API, { graphqlOperation } from "@aws-amplify/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Header,
  Form,
  Table,
  Segment,
  TableCell,
  TableRow,
  Dimmer,
  Loader,
  Image,
} from "semantic-ui-react";
import { useFetch, useKpis } from "../../../context/Provider";
import useForm from "../../../Forms/useForm";
import { getDailyReports } from "../../../graphql/custom-queries";
import {
  createDailyReport,
  createKpi,
  updateKpi,
} from "../../../graphql/mutations";
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
  campaignDetails,
  setCampaignDetails,
  dailyReports,
  setDailyReports,
  fetchCampaign,
}) => {
  const { status, id, agent, client } = campaignDetails;
  const { dailyReportId, campId } = useParams();
  // console.log(dailyReportId, campName, "params");
  const { setForm, form } = useForm();
  const [isLoading, setIsLoading] = useState(true);
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
  console.log("useState kpis:", kpis);
  // const initialReport = dailyReports[dailyReports.length - 1];
  const [dailyReport, setDailyReport] = useState({});
  console.log("useState dailyReport:", dailyReport);
  const initialState = { date: "", dReport: {} };
  const [dailyReportsWeek, setDailyReportsWeek] = useState(initialState);

  const [weekArray, setWeekArray] = useState([]);
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
  const lastDay = startWeekDate.getDate() + 4;
  const endWeekDate = new Date(startWeekDate);
  endWeekDate.setDate(lastDay);
  //#####################################################
  //               WEEK ARRAY DATES
  //#####################################################
  const getDaysArray = async (start, end, dailyReportArray) => {
    let i = 0;
    console.log("weekArray:", weekArray);
    const newTab = [...weekArray];
    let testFind = false;
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
      console.log("dailyReportArray:", dailyReportArray);
      console.log("dailyReportArray[i]:", dailyReportArray[i]);
      if (dailyReportArray[i]) {
        console.log("                  0                          ");
        // console.log("dt:", dt, typeof dt);
        let dateDR = new Date(dailyReportArray[i]?.createdAt);
        console.log("                  01                          ");
        console.log("dateDR:", dateDR, typeof dateDR);
        console.log(i, "dailyReportArray[i]", dailyReportArray[i]);
        let dateDRToIsoStr = toISOStr(`${dateDR} GMT`);
        console.log("                  1                          ");
        let dtToIsoStr = toISOStr(`${dt} GMT`);
        console.log("dtToIsoStr:", typeof dtToIsoStr);
        //---------+++++++++++++
        let find = dailyReportArray.find((e) => {
          const date = toISOStr(e.createdAt);
          return dtToIsoStr === date;
        });
        console.log("                  02                          ");
        //---------+++++++++++++
        let findNullResult = dailyReportArray.find((e) => {
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
        } else if (findNullResult && !testFind) {
          console.log(" IF ELSE");
          console.log("==                         ==");
          console.log("====        IF ELSE      ====");
          console.log("=======               =======");
          console.log("=============================");

          dailyReportsWeek.dReport = findNullResult;
          testFind = true;
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
    testFind = false;
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
    console.log("C Details", campaignDetails);
    try {
      const listDailyReports = await API.graphql(
        graphqlOperation(getDailyReports, { id: campId })
      );
      console.log(
        "listDailyReports:",
        listDailyReports.data.getCampaign.dailyReports.items
      );
      setDailyReports(listDailyReports.data.getCampaign.dailyReports.items);
      setKpis(
        listDailyReports.data.getCampaign.dailyReports.items[
          listDailyReports.data.getCampaign.dailyReports.items.length - 1
        ].kpis.items
      );
      setDailyReport(
        listDailyReports.data.getCampaign.dailyReports.items[
          listDailyReports.data.getCampaign.dailyReports.items.length - 1
        ]
      );

      console.log("                 1 1 1                     ");
      const report = await getDaysArray(
        startWeekDate,
        endWeekDate,
        listDailyReports.data.getCampaign.dailyReports.items
      );
      console.log("                 2 2 2                          ");

      console.log("===================================");
      console.log(typeof report, report);
      console.log("===================================");
      setWeekArray(report);
      setIsLoading(false);
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
    console.log("==               |               ==");
    console.log("==                               ==");
    console.log("==       -    Submit     -       ==");
    console.log("==                               ==");
    console.log("==               |               ==");
    console.log("==                               ==");
    console.log("===================================");
    setForm(dailyReport);
    console.log("dailyReport:", dailyReport);
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
        console.log("my K p I", updateResult.data.updateKpi);
      }
      // await setKpis([]);
      console.log("kpis update:", kpis);
      // } catch (error) {
      //   console.log("There is an error with update KPIS result", error);
      // }
      let newDReport = {};
      console.log(dailyReport, "dailyreport submit");
      console.log("===================================");
      console.log("==                               ==");
      console.log("==                               ==");
      console.log("==                               ==");
      console.log("===================================");
      // try {
      //~~~~~~~~~ CREATE NEW DR ~~~~~~~~~~
      console.log("coucou");
      //here can choose btween id from campaign or camp of DR
      delete form.kpis;
      delete form.id;
      delete form.campaign;
      delete form.createdAt;
      delete form.updatedAt;
      delete form.weeklyReport;
      delete form.monthlyReport;
      const createNewDR = await API.graphql(
        graphqlOperation(createDailyReport, {
          input: { dailyReportCampaignId: id, ...form },
        })
      );
      newDReport = createNewDR.data.createDailyReport;
      setDailyReport(newDReport);
      console.log(createNewDR.data.createDailyReport, "createNewDR");
      setForm({});
      // } catch (error) {
      //   console.log("There is an error with create Daily Report", error);
      // }
      console.log(kpisSaved, "SAVED2");
      // try {
      //~~~~~~~~~ CREATE NEW KPIS ~~~~~~~~~~
      console.log("1");
      const elem = [];
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
        elem.push(newKpi.data.createKpi);
        console.log("coco");
        console.log(newKpi.data.createKpi, "kpi");
      }
      setKpis(elem);
      console.log("kpis newKPIS:", kpis);
      setDailyReports([...dailyReports, newDReport]);

      // console.log("[...dailyReports, newDReport]:", [
      //   ...dailyReports,
      //   newDReport,
      // ]);
      // await fetchDailyReport();
      // await setTodayResults(!todayResults);
      // const report = await getDaysArray(startWeekDate, endWeekDate);
      // setWeekArray(report);
    } catch (error) {
      console.log("There is an erro with create Kpi ", error);
    }
    console.log("succes with updating A L L RESULTS");
  };

  useEffect(() => {
    fetchDailyReport();
    //  --------------Suscription--------------------
    const subscription = API.graphql(
      graphqlOperation(onCreateDailyReport)
    ).subscribe({
      next: (eventData) => {
        const newDR = eventData.value.data.onCreateClient;
        const reports = [...dailyReports, newDR];
        setDailyReports(reports);
        fetchDailyReport();
      },
    });
    return () => subscription.unsubscribe();
  }, []);
  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // console.log(kpis, "KPIS");
  console.log(kpis, "<==***KPIS**==");
  console.log(dailyReport, "dailyReport");
  console.log("<-- d a i l y   R e p o r t s: -->", dailyReports);

  console.log("weekArray:-=-=-=-=-=", typeof weekArray, weekArray);
  // console.log("===================================");
  // console.log(kpis.result, "KPIS.RESULT");
  // console.log(startWeekDate, "startWeekDate");
  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  return !isLoading && campId && weekArray ? (
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
            {campId &&
              !isLoading &&
              !isLoading &&
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
          {weekArray &&
            weekArray.map((oneDay, idx) => {
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
                        <>
                          <Table.Cell width={2}>{oneKpi.result}</Table.Cell>
                          {/* <Table.Cell>% target</Table.Cell> */}
                        </>
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
                    {
                      oneDay.dReport &&
                        oneDay.dReport?.kpis?.items[0].result !== null && (
                          // dailyReports.map((dr) => (
                          <>
                            <Table.Cell>
                              daily points
                              {/* {oneDay.dReport.result * oneDay.dReport.target} */}
                            </Table.Cell>
                            <Table.Cell>% target</Table.Cell>
                          </>
                        )
                      // ))
                    }
                  </Table.Row>
                </>
              );
            })}
        </Table.Body>
      </Table>
    </Form>
  ) : (
    <>
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
            <Table.HeaderCell>Kpi1</Table.HeaderCell>
            <Table.HeaderCell>Kpi2</Table.HeaderCell>
            <Table.HeaderCell>kpi3</Table.HeaderCell>
            <Table.HeaderCell>Daily Points</Table.HeaderCell>
            <Table.HeaderCell>% Points</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body></Table.Body>
      </Table>
      <Dimmer as={Table.Body} active centered>
        <Loader centered size="massive">
          Loading
        </Loader>
      </Dimmer>
      <Image
        centered
        // inLine
        size="massive"
        src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
      />
    </>
  );
};

export default ReportTab;
