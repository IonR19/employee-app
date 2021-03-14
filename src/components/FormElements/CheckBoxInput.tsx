import React from "react";

interface CheckBoxInputProps {
  label: string;
}
const CheckBoxInput: React.FC<CheckBoxInputProps> = ({ label }) => {
  return (
    <label className="checkbox">
      <input type="checkbox" />
      {label}
    </label>
  );
};

export default CheckBoxInput;
