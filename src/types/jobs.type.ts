import { JobStatus, JobTypes, Levels } from "../constant/enum";

export interface JobReqBody {
  name: string;
  location: string;
  salary: number;
  quantity: number;
  level: Levels;
  status: JobStatus;
  thumbnail: string;
  type: JobTypes;
  description: string;
  skills: string[];
  start_date: string;
  end_date: string;
  _id?: string;
  user?: {
    fullname?: string;
    id?: string;
  };
}

export { JobStatus, JobTypes, Levels };
