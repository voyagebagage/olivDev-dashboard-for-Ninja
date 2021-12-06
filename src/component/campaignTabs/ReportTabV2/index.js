import API, { graphqlOperation } from "@aws-amplify/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Header,
  Form,
  Table,
  TableCell,
  Dimmer,
  Loader,
  Image,
} from "semantic-ui-react";
import { useKpis } from "../../../context/Provider";
import useForm from "../../../Forms/useForm";
import { getDailyReports } from "../../../graphql/custom-queries";
import {
  createDailyReport,
  createKpi,
  updateDailyReport,
  updateKpi,
} from "../../../graphql/mutations";
import { onCreateDailyReport } from "../../../graphql/subscriptions";
import { getDateOfISOWeek } from "../../../lib/function";
var currentWeekNumber = require("current-week-number");
//======================
//     + function +
//======================
const ReportTabV2 = ({
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

  const { kpis, setKpis } = useKpis();
  // const initialReport = dailyReports[dailyReports.length - 1];
  const [dailyReport, setDailyReport] = useState({});
  const [dailyPoints, setDailyPoints] = useState(0);
  const initialState = { date: "", dReport: {} };
  const [dailyReportsWeek, setDailyReportsWeek] = useState(initialState);

  const [weekArray, setWeekArray] = useState([]);
  const d = toISOStrDDMMYYY(new Date());

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
    const newTab = [...weekArray];
    let testFind = false;
    for (
      var weekArrayLoop = [], dt = new Date(start);
      dt <= end;
      dt.setDate(dt.getDate() + 1)
    ) {
      const daysArray = ["Mon", "Tue", "Wed", "Thu", "Fri"];
      if (dailyReportArray[i]) {
        let dateDR = new Date(dailyReportArray[i]?.createdAt);
        let dateDRToIsoStr = toISOStr(`${dateDR} GMT`);
        let dtToIsoStr = toISOStr(`${dt} GMT`);
        //---------+++++++++++++
        let find = dailyReportArray.find((e) => {
          const date = toISOStr(e.createdAt);
          return dtToIsoStr === date;
        });
        //---------+++++++++++++
        let findNullResult = dailyReportArray.find((e) => {
          const nullResult = e.kpis?.items[0]?.result;
          return nullResult === null;
        });
        //---------+++++++++++++
        console.log("find:", find);
        console.log("findNullResult:", findNullResult);
        // let comp1 = new Date(dt).getTime();
        // let comp2 = dateDR.getTime();
        //if today
        //86400000 miliSecs in 24hours
        if (find) {
          console.log("==          IFFFFF         ==");
          dailyReportsWeek.dReport = find;
        } else if (findNullResult && !testFind) {
          console.log(" IF ELSE");
          dailyReportsWeek.dReport = findNullResult;
          testFind = true;
        } else {
          console.log("ELSE");

          dailyReportsWeek.dReport = null;
        }
      }
      dailyReportsWeek.date = `${daysArray[i]}  ${toISOStrDDMMYYY(dt)}`;
      newTab.push({ ...dailyReportsWeek });
      dailyReportsWeek.date = null;
      dailyReportsWeek.dReport = null;
      i++;
    }
    testFind = false;
    return newTab;
  };
  //#####################################################
  //               FETCH DAILY-REPORT
  //#####################################################
  const fetchDailyReport = async () => {
    try {
      const listDailyReports = await API.graphql(
        graphqlOperation(getDailyReports, { id: campId })
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
      const report = await getDaysArray(
        startWeekDate,
        endWeekDate,
        listDailyReports.data.getCampaign.dailyReports.items
      );
      setWeekArray(report);
      setIsLoading(false);
      console.log("succes Kpis");
    } catch (error) {
      console.log("There is an error with getDailyReport", error);
    }
  };
  //#####################################################
  //               SUBMIT RES + CREATE NEW DR
  //#####################################################
  const newDailyReport = async () => {
    setForm(dailyReport);
    const kpisSaved = dailyReport.kpis.items;
    try {
      //~~~~~~~~~ UPDATE KPI ~~~~~~~~~~
      //   let total = 0;
      //   for (let i = 0; i < kpis.length; i++) {
      //     delete kpis[i].createdAt;
      //     delete kpis[i].updatedAt;
      //     total += kpis[i].result * kpis[i].coeff;
      //     const updateResult = await API.graphql(
      //       graphqlOperation(updateKpi, {
      //         input: kpis[i],
      //       })
      //     );
      //     console.log(`succes with updating ${kpis[i]?.name}`);
      //     console.log("my K p I", updateResult.data.updateKpi);
      //   }
      //   const updateDailyPoints = await API.graphql(
      //     graphqlOperation(updateDailyReport, {
      //       input: { id: dailyReport.id, dailyPoints: total },
      //     })
      //   );
      //   console.log("succes ! up DR:", updateDailyPoints.data.updateDailyReport);
      let newDReport = {};
      //~~~~~~~~~ CREATE NEW DR ~~~~~~~~~~
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
      //~~~~~~~~~ CREATE NEW KPIS ~~~~~~~~~~
      const elem = [];
      for (let i = 0; i < kpisSaved.length; i++) {
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
        console.log(newKpi.data.createKpi, "kpi");
      }
      setKpis(elem);
      setDailyReports([...dailyReports, newDReport]);
      console.log("succes with updating A L L RESULTS");
    } catch (error) {
      console.log("There is an erro with create Kpi ", error);
    }
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
        <Table.Body style={{ backgroundColor: "#566A63" }}>
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
                    {
                      oneDay.dReport &&
                        oneDay.dReport?.kpis?.items[0].result !== null && (
                          // dailyReports.map((dr) => (
                          <>
                            <Table.Cell>
                              {oneDay.dReport.dailyPoints}
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

export default ReportTabV2;
