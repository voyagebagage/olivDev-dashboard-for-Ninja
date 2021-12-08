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
  Icon,
} from "semantic-ui-react";
import { useKpis } from "../../../context/Provider";
import useForm from "../../../Forms/useForm";
import { getDailyReports } from "../../../graphql/custom-queries";
import {
  createDailyReport,
  createKpi,
  updateDailyReport,
} from "../../../graphql/mutations";
import { onUpdateDailyReport } from "../../../graphql/subscriptions";
import { getDateOfISOWeek } from "../../../lib/function";
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
  const { setForm, form } = useForm();
  const [isLoading, setIsLoading] = useState(true);
  const [addDailyReportBool, setAddDailyReportBool] = useState(false);
  const { kpis, setKpis } = useKpis();
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
      let comp1 = new Date(dt).getTime();
      let comp2 = new Date().getTime();
      let minus = comp2 - comp1;
      if (dailyReportArray[i]) {
        let dateDR = new Date(dailyReportArray[i]?.date);
        let dateDRToIsoStr = toISOStr(`${dateDR} GMT`);
        let dtToIsoStr = toISOStr(`${dt} GMT`);
        //---------+++++++++++++
        let find = dailyReportArray.find((e) => {
          return dtToIsoStr === e.date;
        });

        if (find) {
          console.log("==          IFFFFF         ==");
          dailyReportsWeek.dReport = find;
        } else {
          console.log("ELSE");
          dailyReportsWeek.dReport = null;
        }
      }
      if (minus >= 0) dailyReportsWeek.showAddButton = true;
      if (minus < 0) dailyReportsWeek.showAddButton = false;
      if (!dailyReportsWeek.showAddButton) dailyReportsWeek.future = true;
      if (dailyReportsWeek.showAddButton) dailyReportsWeek.future = false;
      dailyReportsWeek.date = `${daysArray[i]}  ${toISOStrDDMMYYY(dt)}`;
      dailyReportsWeek.id = i;
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
      setAddDailyReportBool(false);
      const listDailyReports = await API.graphql(
        graphqlOperation(getDailyReports, { id: campId })
      );
      //---shortening----
      const dailyReportsPath =
        listDailyReports.data.getCampaign.dailyReports.items;
      const itemsLength = dailyReportsPath.length;
      const kpisLastDailyReport = dailyReportsPath[itemsLength - 1]?.kpis.items;
      const kpisOneBeforeLastDailyReport =
        dailyReportsPath[itemsLength - 2]?.kpis.items;
      //------sets-------
      setDailyReports(listDailyReports.data.getCampaign.dailyReports.items);
      if (kpisLastDailyReport) setKpis(kpisLastDailyReport);
      else {
        kpisOneBeforeLastDailyReport.forEach((e) => {
          e.result = null;
        });
        setKpis(kpisOneBeforeLastDailyReport);
      }

      setDailyReport(dailyReportsPath[itemsLength - 1]);
      const report = await getDaysArray(
        startWeekDate,
        endWeekDate,
        listDailyReports.data.getCampaign.dailyReports.items
      );
      setWeekArray(report);
      setIsLoading(false);
      //----------------
      console.log("succes Kpis");
    } catch (error) {
      console.log("There is an error with getDailyReport", error);
    }
  };

  //#####################################################
  //               ON CLICK ADD BUTTON
  //#####################################################
  const addDailyReport = async (idx, date, day) => {
    try {
      setAddDailyReportBool(true);
      const copyWeekArray = [...weekArray];
      copyWeekArray[idx].showAddButton = false;
      setForm({ dailyReport });
      //~~~~~~~~~ CREATE NEW DR ~~~~~~~~~~
      delete form.kpis;
      delete form.id;
      delete form.campaign;
      delete form.createdAt;
      delete form.updatedAt;
      delete form.weeklyReport;
      delete form.monthlyReport;
      form.dailyReportCampaignId = id;
      form.date = date;
      const createNewDR = await API.graphql(
        graphqlOperation(createDailyReport, {
          input: form,
        })
      );
      const newDReport = createNewDR.data.createDailyReport;
      copyWeekArray[idx].dReport = newDReport;
      setDailyReport(newDReport);
      setDailyReports([...dailyReports, newDReport]);
      setWeekArray(copyWeekArray);
      console.log(createNewDR.data.createDailyReport, "createNewDR");
      setForm({});
      console.log("succes");
    } catch (error) {
      console.log("there is an error with create DR :", error);
    }
  };
  //#####################################################
  //               SUBMIT RES + CREATE NEW DR
  //#####################################################
  const newDailyReport = async (e) => {
    e.preventDefault();
    try {
      //~~~~~~~~~ CREATE NEW KPIS ~~~~~~~~~~
      let total = 0;
      const elem = [];
      for (let i = 0; i < kpis.length; i++) {
        delete kpis[i].createdAt;
        delete kpis[i].updatedAt;
        delete kpis[i].id;
        total += kpis[i].result * kpis[i].coeff;
        const newKpi = await API.graphql(
          graphqlOperation(createKpi, {
            input: {
              kpiAgentId: agent.id,
              kpiCampaignId: id,
              kpiDailyReportId: dailyReport.id,
              ...kpis[i],
            },
          })
        );
        elem.push(newKpi.data.createKpi);
        console.log(newKpi.data.createKpi, "kpi");
      }
      setKpis(elem.reverse());
      const updateDailyPoints = await API.graphql(
        graphqlOperation(updateDailyReport, {
          input: { id: dailyReport.id, dailyPoints: total },
        })
      );
      console.log("succes ! up DR:", updateDailyPoints.data.updateDailyReport);
      setDailyReports([
        ...dailyReports,
        updateDailyPoints.data.updateDailyReport,
      ]);
      // setWeekArray(copyWeekArray);
      console.log("succes with updating A L L RESULTS");
    } catch (error) {
      console.log("There is an error with create Kpi ", error);
    }
  };

  useEffect(() => {
    fetchDailyReport();
    //  --------------Suscription--------------------
    const subscription = API.graphql(
      graphqlOperation(onUpdateDailyReport)
    ).subscribe({
      next: (eventData) => {
        console.log("N   E  X  T");
        fetchDailyReport();
      },
    });
    return () => subscription.unsubscribe();
  }, []);
  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  console.log(kpis, "<==***KPIS**==");
  console.log(dailyReport, "dailyReport");
  console.log("<-- d a i l y   R e p o r t s: -->", dailyReports);
  console.log("weekArray:-=-=-=-=-=", typeof weekArray, weekArray);
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
              console.log("0 R E P O R T :", oneDay.dReport?.kpis);
              console.log(idx, "d d d", d, typeof d);
              return (
                <>
                  <Table.Row>
                    <Table.Cell width={3}>
                      <Header
                        as="h4"
                        inverted
                        color={oneDay.date.slice(5, 15) === d ? "green" : null}
                      >
                        {oneDay.date}
                      </Header>
                    </Table.Cell>
                    {oneDay.dReport &&
                      oneDay.dReport.dailyPoints &&
                      oneDay.dReport?.kpis?.items.map((oneKpi) => (
                        <Table.Cell>{oneKpi.result}</Table.Cell>
                      ))}
                    {(!oneDay.showAddButton && !oneDay.future) ||
                    oneDay.dReport?.dailyPoints ? (
                      <>
                        {!oneDay.dReport?.kpis?.items[0] &&
                          status === "true" &&
                          kpis.map((oneKpi, idx) => {
                            return (
                              <Table.Cell width={2}>
                                <Form.Input
                                  type="number"
                                  style={{ maxWidth: "5vw" }}
                                  placeholder={`${oneKpi.name}`}
                                  disabled={oneDay.future}
                                  inverted
                                  transparent
                                  onChange={(e) => {
                                    console.log([e.target.value]);
                                    const result = e.target.value;
                                    console.log(result, "R  E  S");
                                    setKpis((currentKpis) =>
                                      currentKpis.map((x) =>
                                        x.id === oneKpi.id
                                          ? { ...x, result }
                                          : x
                                      )
                                    );
                                  }}
                                  value={oneKpi.result || ""}
                                />
                              </Table.Cell>
                            );
                          })}
                        {oneDay.dReport &&
                        !oneDay.dReport?.kpis?.items[0] &&
                        status === "true" ? (
                          <TableCell colSpan="2">
                            <Form.Button type="submit" color="green" fluid>
                              Submit your work
                            </Form.Button>
                          </TableCell>
                        ) : (
                          oneDay.dReport && (
                            <>
                              <Table.Cell width={3}>
                                {oneDay.dReport?.dailyPoints}
                              </Table.Cell>
                              <Table.Cell width={3}>% target</Table.Cell>
                            </>
                          )
                        )}
                      </>
                    ) : (
                      oneDay.showAddButton && (
                        <Table.Cell
                          colSpan="5"
                          style={{ backgroundColor: "#333333" }}
                        >
                          <div className="dFlex-center">
                            <Icon
                              size="big"
                              name="add circle"
                              // color="green"
                              style={{ color: "#8CABA0" }}
                              onClick={() =>
                                addDailyReport(
                                  idx,
                                  oneDay.date
                                    .slice(5, 15)
                                    .split("-")
                                    .reverse()
                                    .join("-"),
                                  oneDay
                                )
                              }
                            />
                          </div>
                        </Table.Cell>
                      )
                    )}
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
