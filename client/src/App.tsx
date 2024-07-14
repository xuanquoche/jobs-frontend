import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import { privateRoutes, publicRoutes } from "./routes";
import { ThemeProvider } from "@mui/material";
import theme from "./assets/themes/colors";
import SidebarHome from "./components/modules/sidebarHome";
function isUserLoggedIn() {
  const token = localStorage.getItem("token");
  console.log("hello", token);
  return !!token;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedIn());

  useEffect(() => {
    window.addEventListener("storage", () => {
      setIsLoggedIn(isUserLoggedIn());
    });
  }, [isUserLoggedIn]);

  return (
    <ThemeProvider theme={theme}>
      <div className="md:container mx-auto">
        <ReactQueryDevtools initialIsOpen={false} />
        <Routes>
          {publicRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
          {privateRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                isLoggedIn ? (
                  <div className="flex flex-row">
                    <div className="sidebar">
                      <SidebarHome />
                    </div>
                    <route.component />
                  </div>
                ) : (
                  <Navigate to="/" />
                )
              }
            />
          ))}
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
