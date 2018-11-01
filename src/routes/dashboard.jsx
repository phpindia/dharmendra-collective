import Dashboard from "views/Dashboard/Dashboard";
import Users from "views/Users/Users";
import EditUser from "views/Users/EditUser";
import Winners from "views/Winners/Winners";
import AddWelcomeScreen from "views/WelcomeScreen/AddWelcomeScreen";
import WelcomeScreen from "views/WelcomeScreen/WelcomeScreen";
import EditWelcomeScreen from "views/WelcomeScreen/EditWelcomeScreen";
import PrivacyAndSecurity from "views/PrivacyAndSecurity/PrivacyAndSecurity";
import AddPrivacyAndSecurity from "views/PrivacyAndSecurity/AddPrivacyAndSecurity";
import EditPrivacyAndSecurity from "views/PrivacyAndSecurity/EditPrivacyAndSecurity";
import AddPoll from "views/CreatePoll/AddPoll";
import EditPoll from "views/CreatePoll/EditPoll";
import PollsList from "views/TableList/PollsList";
import PollDetails from "views/PollDetails/PollDetails";
//import EditPoll from "views/PollDetails/PollDetails";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/users",
    name: "Users",
    icon: "pe-7s-user",
    component: Users
  },
  {
    path: "/winners",
    name: "Winners",
    icon: "pe-7s-smile",
    component: Winners
  },
  {
    path: "/welcomeScreen",
    name: "Welcome Screen",
    icon: "pe-7s-monitor",
    component: WelcomeScreen
  },
  {
    path: "/privacyAndSecurity",
    name: "Privacy And Security",
    icon: "pe-7s-config",
    component: PrivacyAndSecurity
  },
  {
    path: "/pollsList",
    name: "Polls",
    icon: "pe-7s-note2",
    component: PollsList
  },
  {
    path: "/editPrivacyAndSecurity",
    //name: "Edit Privacy And Security",
    //icon: "pe-7s-user",
    component: EditPrivacyAndSecurity
  },
  {
    path: "/editUser",
    //name: "Edit User Info",
    //icon: "pe-7s-user",
    component: EditUser
  },
  {
    path: "/editWelcomeScreen",
    //name: "Edit Screen",
    //icon: "pe-7s-user",
    component: EditWelcomeScreen
  },
  {
    path: "/addPrivacyAndSecurity",
    //name: "Add Privacy And Security",
    //icon: "pe-7s-user",
    component: AddPrivacyAndSecurity
  },
  {
    path: "/AddWelcomeScreen",
    //name: "Welcome Screen",
    //icon: "pe-7s-user",
    component: AddWelcomeScreen
  },
  
  {
    path: "/addPoll",
    //name: "Create Poll",
    //icon: "pe-7s-user",
    component: AddPoll
  },
  {
    path: "/editPoll",
    //name: "Edit Poll",
    //icon: "pe-7s-user",
    component: EditPoll
  },
  
  {
    path: "/pollDetails",
    //name: "Polls Details",
    //icon: "pe-7s-note2",
    component: PollDetails
  },
  /*{
    path: "/vote",
    name: "Polls vote",
    icon: "pe-7s-note2",
    component: VotePoll
  },*/
  /*{
    path: "/polls",
    name: "Polls",
    icon: "pe-7s-note2",
    component: Polls
  },*/
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "pe-7s-news-paper",
  //   component: Typography
  // },
  // { path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
  // { path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "pe-7s-bell",
  //   component: Notifications
  // },
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "pe-7s-rocket",
  //   component: Upgrade
  // },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
