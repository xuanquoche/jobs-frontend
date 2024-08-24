import { OptionsProps } from "../components/common/Select";
import { Levels } from "./enum";

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
