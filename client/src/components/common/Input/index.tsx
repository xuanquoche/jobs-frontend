import React, { memo } from "react";
import { InputAdornment, InputProps } from "@mui/material";
import mailLogo from "../../../assets/icon/mail.png";
import errorIcon from "../../../assets/icon/error.png";
import unionIcon from "../../../assets/icon/Union.png";
import accessIcon from "../../../assets/icon/success.png";
import InputStyle from "./style.ts";
import KeyIcon from "@mui/icons-material/Key";

interface InputPropsCus
  extends InputProps {
  label?: string;
  className?: string;
  icon?: string;
  placeholder?: string;
  type: string;
  isError?: boolean;
  isTrue?: boolean;
  formError?: string;
}

export const Input: React.FC<InputPropsCus> = memo(
  ({
    label,
    className,
    size,
    placeholder,
    isError,
    isTrue,
    type,
    icon,
    formError,
    ...rest
  }) => {
    const { color, ...inputProps } = rest;

    return (
      <>
        {label && <label htmlFor="input">{label}</label>}

        <div className="input-group flex flex-col rounded-xl flex-1">
          <InputStyle
            error={isError}
            className={`input ${className} ${size} ${isError ? "isError " : ""}`}
            type={type}
            placeholder={placeholder}
            {...inputProps}
            startAdornment={
              <InputAdornment position="start">
                {type === "password" ? (
                  <div className="mail-icon flex justify-center items-center border-r-2 pr-2">
                    <KeyIcon />
                  </div>
                ) : type === "email" ? (
                  <div className="mail-icon flex justify-center items-center border-r-2 pr-2">
                    <img src={mailLogo} alt="mail" />
                  </div>
                ) : type === "text" ? (
                  <div></div>
                ): isError ? (
                  <div className="mail-icon flex justify-center items-center pr-2 ml-2">
                    <img src={unionIcon} alt="mail" />
                  </div>
                ): (
                  <div></div>
                )}
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                {isError ? (
                  <div className="mr-2">
                    <img src={errorIcon} alt="icon" />{" "}
                  </div>
                ) : (
                  isTrue && (
                    <div className="mr-2">
                      <img src={accessIcon} alt="icon" />{" "}
                    </div>
                  )
                )}
              </InputAdornment>
            }
          />
          <p className="form-error text-red-500 text-start">{formError}</p>
        </div>
      </>
    );
  }
);

Input.defaultProps = {
  label: "",
  className: "",
  size: "small",
  isTrue: false,
  isError: false,
};


export default Input;
