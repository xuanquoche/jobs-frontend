/* eslint-disable react/display-name */
/* eslint-disable import/named */
/* eslint-disable react/prop-types */
import React, { memo } from "react";
import NativeSelect from "@mui/material/NativeSelect";

export interface OptionsProps {
  keyvalue: number;
  textValue: string;
}

interface SelectProp extends React.HTMLAttributes<HTMLSelectElement> {
  options: OptionsProps[];
  className?: string;
}

export const Select: React.FC<SelectProp> = memo(
  ({ className, options, onChange }) => {
    return (
      <NativeSelect defaultValue={30} className={className} onChange={onChange}>
        {options.map((option) => {
          return (
            <option key={option.keyvalue} value={option.keyvalue}>
              {option.textValue}
            </option>
          );
        })}
      </NativeSelect>
    );
  }
);

export default Select;
