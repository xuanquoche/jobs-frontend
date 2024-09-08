import Login from "../pages/Login";
import Register from "../pages/Register";
import HomePage from "../pages/Creator/HomePage";
import { CreatorProfile } from "../pages/Creator/Profile";
import { HomePageClient } from "../pages/Client/HomePage";
import { AdminJobManagement } from "../pages/Admin/HomePageJobManagement";
import DetailJob from "../pages/Client/DetailJob";

export const publicRoutes = [
  { path: "/", component: Login },
  { path: "/register", component: Register },
];

export const privateRoutes = [
  //admin

  {
    path: "/admin/",
    component: AdminJobManagement,
    isShowSidebar: true,
    isShowNavbar: false,
  },

  //creator

  { path: "creator/home", component: HomePage, isShowSidebar: true },
  {
    path: "/creator/profile",
    component: CreatorProfile,
    isShowSidebar: true,
    isShowNavbar: false,
  },

  //client

  {
    path: "/client",
    component: HomePageClient,
    isShowSidebar: true,
    isShowNavbar: true,
  },
  {
    path: "/client/job-detail/:jobId",
    component: DetailJob,
    isShowSidebar: false,
    isShowNavbar: true,
  },
];
