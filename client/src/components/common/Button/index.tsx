import React, { memo } from "react";
import {ButtonProps} from "@mui/material"
import ButtonMui from './style'

interface ButtonPropsCus extends ButtonProps {
  text?: string;
  kind?: "primary" | "error"  ;
  className?: string;
  onClick?: () => void;
}



export const Button: React.FC<ButtonPropsCus> = memo(
  ({ text, className, variant, disabled = false, onClick, kind }) => {
    return (
      <ButtonMui
        className={`bttn ${className} ${variant} ${kind} ${disabled ? "disabled" : ""} rounded-xl`}
        color={kind}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </ButtonMui>
    );
  },
);

export default Button

Button.defaultProps = {
  variant: "contained",
  kind: "primary",
  className: "",
  children: "",
}
