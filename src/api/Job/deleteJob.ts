import http from "../../utils/http";
import { getAccessToken } from "../../utils/tokenStorage";

export const deleteJob = async (id: string) => {
  try {
    const access_token = getAccessToken();
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    };
    console.log("delete", id);
    const response = await http.delete(`/jobs/${id}`, {
      headers,
    });
    console.log("response delete", response);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
