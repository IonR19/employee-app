import React from "react";
import { OptionInputProps } from "../../static/StaticOptions";

interface OptionInputFieldProps {
  label: string;
  name: string;
  options: OptionInputProps[];
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

const OptionInputField: React.FC<OptionInputFieldProps> = ({
  label = "",
  name = "",
  options = [],
  onChange,
  value,
}) => {
  return (
    <div className="field">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <div className="select">
        <select name={name} id={name} value={value} onChange={onChange}>
          <option value="">Select an option</option>
          {options && options.map((opt) => <option key={opt.value}>{opt.title ?? opt.value}</option>)}
        </select>
      </div>
    </div>
  );
};

export default OptionInputField;
