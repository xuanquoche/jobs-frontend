/* eslint-disable react/display-name */
/* eslint-disable import/named */
/* eslint-disable react/prop-types */
import React, { memo } from "react";
import { SelectCustom } from "./style";

export interface OptionsProps {
  keyvalue: number | string;
  textValue: string;
}

interface SelectProp extends React.HTMLAttributes<HTMLSelectElement> {
  options: OptionsProps[];
  className?: string;
  name?: string;
  value?: string | number;
}

export const Select: React.FC<SelectProp> = memo(
  ({ className, options, name, onChange }) => {
    return (
      <SelectCustom
        name={name}
        defaultValue={30}
        className={className}
        onChange={onChange}
      >
        {options.map((option) => {
          return (
            <option key={option.keyvalue} value={option.keyvalue}>
              {option.textValue}
            </option>
          );
        })}
      </SelectCustom>
    );
  }
);

export default Select;
