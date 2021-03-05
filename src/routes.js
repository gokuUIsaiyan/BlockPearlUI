/*!

=========================================================
* Material Signals React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import WarningIcon from '@material-ui/icons/Warning';
import BarChartIcon from '@material-ui/icons/BarChart';
import TableChartIcon from '@material-ui/icons/TableChart';
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import SignalPage from "views/Signals/Signals.js";
import Chart from "views/Chart/Chart.js";
import TableList from "views/Transaction/TableList.js";

// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/signals",
    name: "Signals",
    icon: WarningIcon,
    component: SignalPage,
    layout: "/admin"
  },
  {
    path: "/chart",
    name: "Chart",
    icon: BarChartIcon,
    component: Chart,
    layout: "/admin"
  },
  {
    path: "/transactions",
    name: "Transactions",
    icon: TableChartIcon,
    component: TableList,
    layout: "/admin"
  }
];

export default dashboardRoutes;
