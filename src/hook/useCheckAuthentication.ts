import { useEffect, useState } from "react";
import { getAccessToken } from "../utils/tokenStorage";

export function useCheckAuthentication() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const checkAuth = async () => {
    const token = getAccessToken();
    if (token) {
      try {
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  };
  useEffect(() => {
    checkAuth();
    window.addEventListener("storage", checkAuth);
  }, []);

  if (isAuthenticated === null) return null; // Waiting for auth check
  return isAuthenticated;
}
