import http from "../utils/http";
import { getAccessToken } from "../utils/tokenStorage";

export const VerifiedToken = async () => {
  try {
    const access_token = getAccessToken();
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    };
    const response = await http.post(
      "/users/verify-access-token",
      {},
      { headers }
    );

    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("Server response:", error.response.data); // Log lỗi trả về từ server
    } else {
      console.error("Error verifying token:", error.message);
    }
    throw error;
  }
};
