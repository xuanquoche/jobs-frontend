import Login from "../pages/Login";
import Register from "../pages/Register";
import HomePage from "../pages/Creator/HomePage";
import { CreatorProfile } from "../pages/Creator/Profile";
import { HomePageClient } from "../pages/Client/HomePage";
import { AdminJobManagement } from "../pages/Admin/HomePageJobManagement";
import DetailJob from "../pages/Client/DetailJob";
import { useCheckRole } from "../hook/useCheckRole";
import { useEffect, useState } from "react";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import ErrorPage from "../pages/Error";

// Định nghĩa interface cho route
interface Route {
  path: string;
  component: () => JSX.Element;
  isShowSidebar: boolean;
  isShowNavbar: boolean;
}

// Function to determine routes based on role
export const useRoutes = () => {
  const { role, isLoading, isSuccess } = useCheckRole(); // Fetch the user role
  const [privateRoutes, setPrivateRoutes] = useState<Route[]>([]);
  const [publicRoutes, setPublicRoutes] = useState<Route[]>([]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Định nghĩa các route public
    const publicRoutesList = [
      {
        path: "/",
        component: Login,
        isShowNavbar: false,
        isShowSidebar: false,
      },
      {
        path: "/register",
        component: Register,
        isShowNavbar: false,
        isShowSidebar: false,
      },
      {
        path: "/error",
        component: ErrorPage,
        isShowNavbar: false,
        isShowSidebar: false,
      },
    ];
    setPublicRoutes(publicRoutesList);

    // Initialize allowedPaths with the paths of public routes
    let allowedPaths: string[] = publicRoutesList.map((route) => route.path);

    // Kiểm tra role và cập nhật route
    if (isSuccess && !isLoading && role != null) {
      if (role === "ADMIN") {
        const adminRoutes = [
          {
            path: "/admin/",
            component: AdminJobManagement,
            isShowSidebar: true,
            isShowNavbar: false,
          },
        ];
        setPrivateRoutes(adminRoutes);
        allowedPaths = [
          ...allowedPaths,
          ...adminRoutes.map((route) => route.path),
        ];
      }

      if (role === "CREATOR") {
        const creatorRoutes = [
          {
            path: "/creator/home",
            component: HomePage,
            isShowSidebar: true,
            isShowNavbar: true,
          },
          {
            path: "/creator/profile",
            component: CreatorProfile,
            isShowSidebar: true,
            isShowNavbar: false,
          },
        ];
        setPrivateRoutes(creatorRoutes);
        allowedPaths = [
          ...allowedPaths,
          ...creatorRoutes.map((route) => route.path),
        ];
      }

      if (role === "CLIENT") {
        const clientRoutes = [
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
        setPrivateRoutes(clientRoutes);
        allowedPaths = [
          ...allowedPaths,
          ...clientRoutes.map((route) => route.path),
        ];
      }

      const currentPath = location.pathname;
      console.log("Allowed paths:", allowedPaths);
      console.log("Current path:", currentPath);

      // Use matchPath for more robust path matching
      const isAllowedPath = allowedPaths.some((path) =>
        matchPath(path, currentPath)
      );

      // If the current path is not allowed, navigate to the error page
      if (!isAllowedPath) {
        console.log("Navigating to error page...");
        navigate("/error");
      }
    }
  }, [role, isLoading, isSuccess, navigate, location]);

  return { privateRoutes, isLoading, publicRoutes };
};
