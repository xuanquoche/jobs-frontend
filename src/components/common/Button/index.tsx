/* eslint-disable react/display-name */
/* eslint-disable import/named */
/* eslint-disable react/prop-types */
import React, { memo, ReactElement } from "react";
import { ButtonProps } from "@mui/material";
import ButtonMui from "./style";

interface ButtonPropsCus extends ButtonProps {
  text?: string;
  icon?: ReactElement;
  kind?:
    | "primary"
    | "inherit"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  className?: string;
  variant: "text" | "contained" | "outlined";
  onClick?: () => void;
}

export const Button: React.FC<ButtonPropsCus> = memo(
  ({ text, className, variant, disabled = false, onClick, kind, icon }) => {
    return (
      <ButtonMui
        className={`bttn ${className} ${variant} ${kind} ${disabled ? "disabled" : ""} rounded-xl`}
        color={kind}
        disabled={disabled}
        endIcon={icon}
        onClick={onClick}
        variant={variant}
      >
        {text}
      </ButtonMui>
    );
  }
);

export default Button;

Button.defaultProps = {
  variant: "contained",
  kind: "primary",
  className: "",
  children: "",
};
