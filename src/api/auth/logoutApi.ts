import http from "../../utils/http";
import { getAccessToken, getRefreshToken } from "../../utils/tokenStorage";

interface LogoutResponse {
  message: string;
  data: {
    acknowledged: boolean;
    deletedCount: number;
  };
}
export const Logout = async () => {
  try {
    const access_token = getAccessToken();
    const refresh_token = getRefreshToken();
    const body = {
      refresh_token,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    };
    const res = await http.post<LogoutResponse>("/logout", body, {
      headers: headers,
    });

    console.log("logout", res);

    return res;
  } catch (error) {
    console.log("error logout account", error);
  }
};
