import http from "../../utils/http";
import { getAccessToken } from "../../utils/tokenStorage";
import { JobReqBody } from "../../types/jobs.type";

export const updateJob = async (job: JobReqBody, id: string) => {
  try {
    const access_token = getAccessToken();
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    };
    console.log("job requets", job);
    const response = await http.patch<JobReqBody>(`/jobs/${id}`, job, {
      headers,
    });
    console.log("reso", response);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
