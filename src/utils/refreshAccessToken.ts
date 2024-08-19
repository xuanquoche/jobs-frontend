import axios from "axios";
import { clearTokens, getRefreshToken, setTokens } from "./tokenStorage";

export const refreshAccessToken = async () => {
  try {
    const refreshToken = getRefreshToken();
    const response = await axios.post("/api/refresh-token", {
      refreshToken,
    });

    if (response.data.access_token) {
      setTokens(response.data.access_token, response.data.refresh_token);
      axios.defaults.headers.common["Authorization"] =
        `Bearer ${response.data.accessToken}`;
      return response.data.accessToken;
    } else {
      clearTokens();
      throw new Error("Unable to refresh token");
    }
  } catch (error) {
    clearTokens();
    throw error;
  }
};
