/* eslint-disable react/display-name */
import React, { memo, useEffect } from "react";
import {
  CardMui,
  CardHeaderCustom,
  AvatarCustom,
  CardContentCustom,
  CardActionsCustom,
} from "./style";
import IconButtonMui from "../ButtonIcon/style";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Tag from "../Tag";
import { Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CardProps {
  clientName?: string;
  image?: string;
  companyName?: string;
  className?: string;
  jobName?: string;
  description?: string;
  salary?: number;
  location?: string;
  status?: string;
  type: string;
  endDate?: Date;
  startDate?: Date;
  skills?: string[];
  _id?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = memo(
  // eslint-disable-next-line react/prop-types
  ({
    image,
    companyName,
    className,
    jobName,
    description,
    salary,
    location,
    status,
    type,
    endDate,
    startDate,
    skills,
    clientName,
    _id,
    onClick,
  }) => {
    const navigate = useNavigate();

    const getColor = (type: string) => {
      switch (type) {
        case "PARTTIME":
          return "success";
        case "FULLTIME":
          return "secondary";
        default:
          return "error"; // Fallback color
      }
    };

    const moveToDetailPage = (id: string) => {
      navigate(`/client/job-detail/${id}`);
    };

    return (
      <CardMui className={`card ${className}`}>
        <CardHeaderCustom
          avatar={<AvatarCustom sx={{ width: 56, height: 56 }}>R</AvatarCustom>}
          action={
            <IconButtonMui
              color="primary"
              className="iconButtonDetail"
              onClick={() => moveToDetailPage(_id as string)}
            >
              <ArrowOutwardIcon />
            </IconButtonMui>
          }
          title={clientName}
        />
        <CardContentCustom>
          <div className="jobName">
            <h2>{jobName}</h2>
          </div>
          <CardActionsCustom>
            {skills?.map((skill, index) => (
              <Tag key={index} text={skill.name} variant="contained" />
            ))}
          </CardActionsCustom>
          <div className="jobDescription">{description}</div>
          <div className="salryStatus flex justify-between">
            <div className="salary text-left">
              <span style={{ fontWeight: "800" }}>Salary: </span>
              {salary}$/h
            </div>
            <Chip className="left-0" label={status} color="error" />
          </div>
          <Tag
            text={type}
            variant="contained"
            color={getColor(type)}
            // disabled={true}
          />
        </CardContentCustom>
      </CardMui>
    );
  }
);

export default Card;
