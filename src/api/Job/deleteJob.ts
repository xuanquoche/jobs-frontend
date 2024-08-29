import http from "../../utils/http";
import { getAccessToken } from "../../utils/tokenStorage";
import { JobReqBody } from "../../types/jobs.type";

export const deleteJob = async (id: string) => {
  try {
    const access_token = getAccessToken();
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    };
    const response = await http.delete<JobReqBody>(`/jobs/${id}`, {
      headers,
    });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
