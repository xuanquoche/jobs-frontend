import Login from "../pages/Login";
import Register from "../pages/Register";
import HomePage from "../pages/HomePage";
import Shop from "../pages/Shop";
import Product from "../pages/Product";

export const publicRoutes = [
  { path: "/", component: Login },
  { path: "/register", component: Register },
];

export const privateRoutes = [
  { path: "/home", component: HomePage },
  { path: "/shop", component: Shop },
  { path: "/product", component: Product },
];
