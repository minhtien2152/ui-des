// import
import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";
import Categories from "views/Dashboard/Categories";
import Instructors from "views/Dashboard/Instructors";
import Tickets from "views/Dashboard/Ticket";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/courses",
    name: "Courses",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/instructors",
    name: "Instructors",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: Instructors,
    layout: "/admin",
  },

  {
    path: "/tickets",
    name: "Tickets",
    rtlName: "آرتيإل",
    icon: <SupportIcon color="inherit" />,
    component: Tickets,
    layout: "/admin",
  },
  {
    path: "/categories",
    name: "Categories",
    rtlName: "آرتيإل",
    icon: <SupportIcon color="inherit" />,
    component: Categories,
    layout: "/admin",
  },
  // {
  //   path: "/signin",
  //   name: "Login",
  //   rtlName: "آرتيإل",
  //   icon: <SupportIcon color="inherit" />,
  //   component: SignIn,
  //   layout: "/auth",
  // },
];
export default dashRoutes;
