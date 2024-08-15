/* eslint-disable react/display-name */
import React, { memo } from "react";
import {
  CardMui,
  CardHeaderCustom,
  AvatarCustom,
  CardContentCustom,
  CardActionsCustom,
} from "./style";
import Button from "../Button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Tag from "../Tag";

interface CardProps {
  image?: string;
  companyName?: string;
  className?: string;
  jobName?: string;
  description?: string;
  salary?: number;
  location?: string;
  status?: string;
  type?: string;
  endDate?: Date;
  startDate?: Date;
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
    onClick,
  }) => {
    return (
      <CardMui className={`card ${className}`}>
        <CardHeaderCustom
          avatar={<AvatarCustom>R</AvatarCustom>}
          action={<Button icon={<ArrowOutwardIcon />} />}
          title={"Helo"}
        />
        <CardContentCustom>
          <div className="jobName">
            <h2>Senior Product Designer</h2>
          </div>
          <div className="jobDescription">
            Looking for an experienced Web Designer for an our company.
          </div>
        </CardContentCustom>
        <CardActionsCustom>
          <Tag text="WFH" />
          <Tag text="WFH" />
          <Tag text="WFH" />
          <Tag text="WFH" />
        </CardActionsCustom>
      </CardMui>
    );
  }
);

export default Card;
