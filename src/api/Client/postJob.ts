import { JobReqBody } from "../../types/jobs.type";
import http from "../../utils/http";
import { getAccessToken } from "../../utils/tokenStorage";

export const postJob = async (job: JobReqBody) => {
  try {
    const access_token = getAccessToken();
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    };
    console.log("reso", job);
    const response = await http.post<JobReqBody>("/jobs/", job, {
      headers,
    });
    return response.data;
  } catch (error: any) {
    console.log("Chi tiết lỗi từ server:", error);
    throw error;
  }
};
