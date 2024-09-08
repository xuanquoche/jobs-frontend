import { JobReqBody } from "../../types/jobs.type";
import http from "../../utils/http";

interface ResponseSearchData {
  data: JobReqBody[];
}

export const findingJobs = async ({ content }: { content: string }) => {
  try {
    const response = await http.get<ResponseSearchData>(
      `/search?content=${content}`
    );
    return response.data;
  } catch (error) {
    console.log("fetch user fail", error);
    throw error;
  }
};
