import API, { graphqlOperation } from "@aws-amplify/api";
import { Link, useHistory, Route, useParams, NavLink } from "react-router-dom";
// import { panes } from "../arrayLists/index";
import { getCampaign } from "../graphql/queries";
import {
  Card,
  Button,
  Segment,
  Header,
  Form,
  Table,
  Confirm,
  Grid,
  Radio,
  Tab,
  Icon,
  Label,
} from "semantic-ui-react";
import { useState, useEffect } from "react";
import InfoTab from "../component/campaignTabs/InfoTab";
import ReportTab from "../component/campaignTabs/ReportTab";
import WeeklySummaryTab from "../component/campaignTabs/WeeklySummaryTab";
import MonthlyTotalsTab from "../component/campaignTabs/MonthlyTotalsTab";
import KpiPointsTab from "../component/campaignTabs/KpiPointsTab";
import TargetSummaryTab from "../component/campaignTabs/TargetsSummaryTab";
//x
function CampaignDetails() {
  const { name, id } = useParams();
  const [campaignDetails, setCampaignDetails] = useState({});
  const [edit, setEdit] = useState(false);
  // const [status, setStatus] = useState(false);
  console.log({ name, id }, "params");
  var currentWeekNumber = require("current-week-number");

  //--
  const fetchCampaign = async () => {
    try {
      const campaignData = await API.graphql(
        graphqlOperation(getCampaign, { id: id })
      );
      //xxxxxxxxxxxxxxxxxxxx Status xxxxxxxxxx
      const start = currentWeekNumber(campaignData.data.getCampaign.startDate);
      const end = currentWeekNumber(campaignData.data.getCampaign.endDate);
      const now = currentWeekNumber(new Date());
      console.log(start, end, now, "startendnow");
      // const status = "false";
      if (now >= start && now <= end) {
        campaignData.data.getCampaign.status = "true";
      }
      //xxxxxxxxxxxxxxxxxxxx xxxxxxxxxx xxxxxxxxxx
      console.log(campaignData.data.getCampaign.status, "status");
      setCampaignDetails(campaignData.data.getCampaign);
      console.log(campaignData.data.getCampaign, "campaignData");
      console.log("succes campaignData");
    } catch (error) {
      console.log("there is an error with getCampaign", error);
    }
  };
  useEffect(() => fetchCampaign(), []);

  const {
    length,
    startDate,
    endDate,
    updatedAt,
    createdAt,
    dailyReports,
    notes,
    client,
    agent,
    status,
  } = campaignDetails;
  console.log(status, "STA TUS");
  console.log(dailyReports?.items[0], "dailyReports");
  const panes = [
    {
      menuItem: {
        as: NavLink,
        id: "tab1",
        content: "Info",
        to: `/campaign/${name}/${id}/info`,
        exact: true,
        key: "info",
      },
      pane: (
        <Route
          path={`/campaign/${name}/${id}/info`}
          exact
          render={() => (
            <Tab.Pane basic attached={false}>
              <InfoTab
                edit={edit}
                setEdit={setEdit}
                campaignDetails={campaignDetails}
              />
            </Tab.Pane>
          )}
        />
      ),
    },
    {
      menuItem: {
        as: NavLink,
        id: "tab2",
        content: "Reports",
        to: `/campaign/${name}/${id}/report/${dailyReports?.items[0].id}`,
        exact: true,
        key: "reports",
      },
      pane: (
        <Route
          path={`/campaign/${name}/${id}/report/:dailyReportId`}
          exact
          render={() => (
            <Tab.Pane basic attached={false}>
              <ReportTab campaignDetails={campaignDetails} />
            </Tab.Pane>
          )}
        />
      ),
    },
    {
      menuItem: {
        as: NavLink,
        id: "tab3",
        content: "Weekly Summary",
        to: `/campaign/${name}/${id}/weeklySummary`,
        exact: true,
        key: "weeklySummary",
      },
      pane: (
        <Route
          path={`/campaign/${name}/${id}/weeklySummary`}
          exact
          render={() => (
            <Tab.Pane basic attached={false}>
              <WeeklySummaryTab />
            </Tab.Pane>
          )}
        />
      ),
    },
    {
      menuItem: {
        as: NavLink,
        id: "tab4",
        content: "Monthly Totals",
        to: `/campaign/${name}/${id}/monthlyTotals`,
        exact: true,
        key: "monthlyTotals",
      },
      pane: (
        <Route
          path={`/campaign/${name}/${id}/monthlyTotals`}
          exact
          render={() => (
            <Tab.Pane basic attached={false}>
              <MonthlyTotalsTab />
            </Tab.Pane>
          )}
        />
      ),
    },
    {
      menuItem: {
        as: NavLink,
        id: "tab5",
        content: "Targets Summary",
        to: `/campaign/${name}/${id}/targetsSummary`,
        exact: true,
        key: "targetsSummary",
      },
      pane: (
        <Route
          path={`/campaign/${name}/${id}/targetsSummary`}
          exact
          render={() => (
            <Tab.Pane basic attached={false}>
              <TargetSummaryTab />
            </Tab.Pane>
          )}
        />
      ),
    },
    {
      menuItem: {
        as: NavLink,
        id: "tab6",
        content: "Kpi Points",
        to: `/campaign/${name}/${id}/kpiPoints`,
        exact: true,
        key: "kpiPoints",
      },
      pane: (
        <Route
          path={`/campaign/${name}/${id}/kpiPoints`}
          exact
          render={() => (
            <Tab.Pane basic attached={false}>
              <KpiPointsTab />
            </Tab.Pane>
          )}
        />
      ),
    },
  ];
  return (
    <>
      <Link to="/campaigns" style={{ color: "#566A63" }}>
        <Icon name="arrow left" size="large" />
        BACK
      </Link>
      {/* <div className="dFlex"> */}
      <Header as="h2" textAlign="center" dividing>
        <div className="dFlex">{name}</div>
      </Header>

      <Segment basic as={Header} className="dFlex-sAround" centered>
        <div className="dFlex">{`${client?.firstName}  ${client?.lastName}`}</div>
        <div className="dFlex">
          status :
          <Icon
            as={Icon}
            name="circle thin"
            color={status ? "green" : "grey"}
          />
        </div>
        <div className="dFlex" as="h3">
          {agent?.name}
        </div>
      </Segment>
      {/* <div className="dFlex-sBetween"> */}
      <Tab
        renderActiveOnly={false}
        activeIndex={-1}
        menu={{ fluid: true, vertical: true }}
        menuPosition="right"
        panes={panes}
        onTabChange={(event, value) => console.log(value, "TAB")}
        // className="dFlex"
        // style={{ maxWidth: "80%", right: "80%" }}
      />
      {/* </div> */}
    </>
  );
}

export default CampaignDetails;
