import { JobReqBody } from "../types/jobs.type";
import http from "../utils/http";
import { getAccessToken } from "../utils/tokenStorage";

interface ResponseFetchJob {
  data: {
    jobs: JobReqBody[];
    page: number;
    limit: number;
    total_page: number;
  };
}

export const fetchJob = async ({
  queryKey,
}: {
  queryKey: [string, number, number];
}) => {
  const [, page, limit] = queryKey;
  try {
    const access_token = getAccessToken();
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    };
    const response = await http.get<ResponseFetchJob>(
      `/jobs?limit=${limit}&page=${page}`,
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    console.log("fetch job fail", error);
    throw error;
  }
};
