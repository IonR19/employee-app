import React from "react";
import { useTranslation } from "react-i18next";
import { OptionInputProps } from "../../static/StaticOptions";

interface OptionInputFieldProps {
  label: string;
  name: string;
  options: OptionInputProps[];
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  includeEmpty?: boolean;
}

const OptionInputField: React.FC<OptionInputFieldProps> = ({
  includeEmpty = false,
  label = "",
  name = "",
  options = [],
  onChange,
  value,
}) => {
  const { t } = useTranslation();
  return (
    <div className="field">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <div className="select">
        <select name={name} id={name} value={value} onChange={onChange}>
          {includeEmpty && <option value="">Select an option</option>}
          {options &&
            options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {t(opt.title ?? opt.value)}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default OptionInputField;
