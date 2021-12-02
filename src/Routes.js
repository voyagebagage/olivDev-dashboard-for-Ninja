import Campaigns from "./views/Campaigns";
import Dashboard from "./views/Dashboard";
import Agent from "./views/Agent";
import Reports from "./views/Reports";
import ClientList from "./views/ClientList";
import Stats from "./views/Stats";
import ClientDetails from "./views/ClientDetails";
import CampaignDetails from "./views/CampaignDetails";
// import Client from "../../views/ClientDetails";
// import Dashboard from "./views/Dashboard";
import AgentReport from "./views/AgentReport";

export const Routes = [
  {
    title: "LeaderBoard",
    path: "/",
    exact: true,
    component: Dashboard,
    iconName: "dashboard",
    cName: "nav-text",
  },
  {
    title: "Clients",
    path: "/client-list",
    component: ClientList,
    iconName: "user",
    cName: "nav-text",
  },
  {
    title: "Client",
    path: "/client/:firstName/:companyName/:id",
    component: ClientDetails,
    // iconName: "user",
    cName: "nav-text",
  },
  {
    title: "Campaigns",
    path: "/campaigns",
    component: Campaigns,
    iconName: "gem",
    cName: "nav-text",
  },
  {
    title: "Campaign",
    path: "/campaign/:name/:id",
    component: CampaignDetails,
    // iconName: "user",
    cName: "nav-text",
  },
  // {
  //   title: "Reports",
  //   path: "/reports",
  //   component: Reports,
  //   iconName: "fork",
  //   cName: "nav-text",
  // },
  {
    title: "Agent",
    path: "/agent",
    component: Agent,
    iconName: "hand point right",
    cName: "nav-text",
  },
  {
    title: "Agent Report",
    path: "/agent-report/:agentName/:campaignName/:id",
    component: AgentReport,
    cName: "nav-text",
  },
  {
    title: "Stats",
    path: "/stats",
    component: Stats,
    iconName: "chart bar",
    cName: "nav-text",
  },
];
