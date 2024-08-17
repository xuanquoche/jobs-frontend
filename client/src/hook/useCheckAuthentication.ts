import { useEffect, useState } from "react";
import { getAccessToken } from "../utils/tokenStorage";
import { VerifiedToken } from "../api/verifiedToken";

export function useCheckAuthentication() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const checkAuth = async () => {
    const token = getAccessToken();
    console.log(token);
    if (token) {
      try {
        // const response = await VerifiedToken();
        // if (response) {

        // } else {
        //   setIsAuthenticated(false);
        // }

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
