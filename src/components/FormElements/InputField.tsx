import React, { ChangeEventHandler } from "react";

interface InputFieldProps {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputField: React.FC<InputFieldProps> = ({
  required = false,
  name,
  label = "",
  type = "text",
  placeholder = "",
  value,
  onChange,
}) => {
  return (
    <div className="field">
      <label className="label is-normal" htmlFor={name}>
        {label}
      </label>
      <div className="field">
        <div className="control">
          <input
            required={required}
            className="input"
            value={value}
            onChange={onChange}
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default InputField;
