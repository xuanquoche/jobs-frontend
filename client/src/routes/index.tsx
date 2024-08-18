import Login from "../pages/Login";
import Register from "../pages/Register";
import HomePage from "../pages/HomePage";
import Shop from "../pages/Shop";
import Product from "../pages/Product";
import { CreatorProfile } from "../pages/Creator/Profile";

export const publicRoutes = [
  { path: "/", component: Login },
  { path: "/register", component: Register },
];

export const privateRoutes = [
  { path: "/home", component: HomePage, isShowSidebar: true },
  { path: "/shop", component: Shop, isShowSidebar: true },
  { path: "/product", component: Product, isShowSidebar: true },
  { path: "/creator/profile", component: CreatorProfile, isShowSidebar: true },
];
