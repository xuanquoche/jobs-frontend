import dayjs from "dayjs";
import { OptionsProps } from "../components/common/Select";
import { JobReqBody } from "../types/jobs.type";
import { JobStatus, JobTypes, Levels } from "./enum";

export const SKILLS: OptionsProps[] = [
  {
    keyvalue: "",
    textValue: "Select",
  },
  {
    keyvalue: "React",
    textValue: "React",
  },
  {
    keyvalue: "Nodejs",
    textValue: "Nodejs",
  },
  {
    keyvalue: "Go",
    textValue: "Go",
  },
  {
    keyvalue: "SQL",
    textValue: "SQL",
  },
  {
    keyvalue: "Angular",
    textValue: "Angular",
  },
  {
    keyvalue: "PHP",
    textValue: "PHP",
  },
  {
    keyvalue: "NextJs",
    textValue: "NextJs",
  },
];

export const LEVELS: OptionsProps[] = [
  {
    keyvalue: Levels.FRESHER,
    textValue: Levels.FRESHER,
  },
  {
    keyvalue: Levels.INTERN,
    textValue: Levels.INTERN,
  },
  {
    keyvalue: Levels.JUNIOR,
    textValue: Levels.JUNIOR,
  },
  {
    keyvalue: Levels.MIDDLE,
    textValue: Levels.MIDDLE,
  },
  {
    keyvalue: Levels.SENIOR,
    textValue: Levels.SENIOR,
  },
];

export const initialJob: JobReqBody = {
  name: "",
  location: "",
  salary: 0,
  quantity: 0,
  level: Levels.FRESHER,
  status: JobStatus.INACTIVE,
  thumbnail: "",
  type: JobTypes.PARTTIME,
  description: "",
  skills: [],
  start_date: dayjs().toISOString(),
  end_date: dayjs().toISOString(),
};
