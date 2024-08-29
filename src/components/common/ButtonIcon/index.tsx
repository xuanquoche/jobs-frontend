/* eslint-disable react/display-name */
/* eslint-disable import/named */
/* eslint-disable react/prop-types */
import React, { memo } from "react";
import { ButtonProps } from "@mui/material";
import IconButtonMui from "./style";

interface ButtonPropsCus extends ButtonProps {
  kind?:
    | "default"
    | "inherit"
    | "success"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "warning";
  className?: string;
  onClick?: () => void;
}

export const ButtonIcon: React.FC<ButtonPropsCus> = memo(
  ({ className, variant, disabled = false, onClick, kind, children }) => {
    return (
      <IconButtonMui
        className={`bttn ${className} ${variant} ${kind} ${disabled ? "disabled" : ""} rounded-xl`}
        color={kind}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </IconButtonMui>
    );
  }
);

export default ButtonIcon;

ButtonIcon.defaultProps = {
  variant: "contained",
  kind: "primary",
  className: "",
  children: "",
};
