import { JobReqBody } from "../../types/jobs.type";
import http from "../../utils/http";
import { getAccessToken } from "../../utils/tokenStorage";

interface ResponseGetJobById {
  data: JobReqBody;
}
export const getJobById = async ({
  queryKey,
}: {
  queryKey: [string, string];
}) => {
  try {
    const [, jobId] = queryKey;
    const access_token = getAccessToken();
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    };

    const response = await http.get<ResponseGetJobById>(`/jobs/${jobId}`, {
      headers,
    });
    return response.data.data;
  } catch (error: any) {
    console.log("fail to get job by id", error);
  }
};
