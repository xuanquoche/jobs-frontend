import React, { memo } from "react";
import CardMui from "./style";
import {
  TyographyCustom,
  CardContentCustome,
  CardActionsCustome,
  IconButtonCustom,
  DivCustom,
} from "./style";
import { CardMedia } from "@mui/material";
import Tick from "../TickList";
import star from "../../../assets/icon/star.png";
import Edit from "../../../assets/icon/Edit.png";
import Delete from "../../../assets/icon/del.png";
import RightIcon from "../../../assets/icon/detail.png";

interface CardProps {
  image: string;
  title: string;
  className?: string;
  rating?: number;
  price?: number;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = memo(
  ({ image, title, className, rating, price, onClick }) => {
    const iconHoverArr = [
      { id: 1, icon: Edit },
      { id: 2, icon: Delete },
      { id: 3, icon: RightIcon },
    ];
    return (
      <CardMui className={`card ${className}`}>
        <DivCustom className="wrap-img-overlay">
          <CardMedia
            component="img"
            height="194"
            image={image}
            alt="Paella dish"
            className="static"
            data-testid="card"
          />
          <DivCustom className="overlay absolute">
            {iconHoverArr.map((icon, index) => (
              <DivCustom  className="action-icon"  key={index}>
                <Tick clasname={`icon-action tick-${icon.id} `} icon={icon.icon}  onClick={onClick} />
              </DivCustom>
            ))}
          </DivCustom>
        </DivCustom>
        <CardContentCustome className="content-product flex justify-between">
          <div className="description flex flex-col">
            <TyographyCustom className="product-name text-left">
              {title}
            </TyographyCustom>
            <CardActionsCustome disableSpacing>
              <IconButtonCustom aria-label="add to rating" className="p-none">
                <div className="rating flex">
                  <div className="rating-icon self-center mr-2">
                    <img src={star} alt="star" />
                  </div>
                  <p className="rating-number">{rating}</p>
                </div>
              </IconButtonCustom>
            </CardActionsCustome>
          </div>
          <TyographyCustom className="price">${price}</TyographyCustom>
        </CardContentCustome>
      </CardMui>
    );
  }
);

export default Card;
