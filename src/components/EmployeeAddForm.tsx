import React from "react";

const InputField = ({ name, label = "", type = "text", placeholder = "" }) => {
  return (
    <div className="field">
      <label className="label is-normal" htmlFor={name}>
        {label}
      </label>
      <div className="field">
        <div className="control">
          <input className="input" id={name} name={name} type={type} placeholder={placeholder} />
        </div>
      </div>
    </div>
  );
};

export default function EmployeeAddForm() {
  return (
    <div>
      <div className="box">
        <div className="columns is-multiline">
          <div className="column is-4">
            <InputField label="Name" name="email" type="text" placeholder="write your name" />
          </div>
          <div className="column is-3">
            <InputField label="Civil ID" name="civil_id" type="text" placeholder="write your email" />
          </div>
          <div className="column">
            <InputField label="Gender" name="gender" type="text" />
          </div>
          <div className="column is-3">
            <InputField label="Nationality" name="nationality" type="text" />
          </div>
          <div className="column is-2">
            <InputField label="Martial State" name="martial" type="text" />
          </div>
          <div className="column is-5">
            <InputField label="Mail" name="email" type="mail" />
          </div>
          <div className="column is-5">
            <InputField label="MEW Mail" name="email" type="mew_mail" />
          </div>
        </div>
      </div>
      <div className="box">
        <div className="columns is-multiline">
          <div className="column is-4">
            <InputField label="Job Title" name="email" type="text" />
          </div>
          <div className="column is-4">
            <InputField label="Education Level" name="email" type="text" />
          </div>
          <div className="column is-4">
            <InputField label="Authority" name="authority" type="text" />
          </div>
          <div className="column ">
            <InputField label="Move in Date" name="movein_date" type="date" />
          </div>
          <div className="column">
            <InputField label="Hire Date" name="hire_date" type="date" />
          </div>
          <div className="column">
            <InputField label="Years of Experience" name="work_exp" type="number" />
          </div>
        </div>
      </div>
      <div className="box">
        <div className="columns is-is-multiline">
          <div className="column">
            <InputField label="Capital" name="capital" type="text" />
          </div>
          <div className="column">
            <InputField label="City" name="city" type="text" />
          </div>
          <div className="column">
            <InputField label="Street" name="street" type="text" />
          </div>
          <div className="column">
            <InputField label="House" name="house" type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}
