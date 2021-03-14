import React, { useState } from "react";
import { genderOptions, MartialOtions, NationalityOption } from "../../StaticOptions";
import InputField from "./FormElements/InputField";
import OptionInputField from "./FormElements/OptionInputField";

const PersonalDataForm = () => {
  const [value, setValue] = useState({
    name: "",
    civil_id: "",
    gender: "",
    nationality: "",
    martial: "",
    email: "",
    mew_email: "",
  });
  const { civil_id, email, gender, martial, mew_email, name, nationality } = value;
  const handleState = (e: any) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="box">
      <h1 className="title has-text-centered">Personal Data</h1>
      <div className="columns is-multiline has-background-info-light" style={{borderRadius: '12px'}}>
        <div className="column is-4">
          <InputField
            label="Name"
            name="name"
            type="text"
            value={name}
            onChange={handleState}
            placeholder="Full name"
          />
        </div>
        <div className="column is-3">
          <InputField
            label="Civil ID"
            name="civil_id"
            type="number"
            value={civil_id}
            onChange={handleState}
          />
        </div>
        <div className="column">
          <OptionInputField
            label="Gender"
            name="gender"
            options={genderOptions}
            value={gender}
            onChange={handleState}
          />
        </div>
        <div className="column is-3">
          <OptionInputField
            label="Nationality"
            name="nationality"
            options={NationalityOption}
            value={nationality}
            onChange={handleState}
          />
        </div>
        <div className="column is-2">
          <OptionInputField
            label="Martial State"
            name="martial"
            options={MartialOtions}
            value={martial}
            onChange={handleState}
          />
        </div>
        <div className="column is-5">
          <InputField label="eMail" name="email" type="mail" value={email} onChange={handleState} />
        </div>
        <div className="column is-5">
          <InputField
            label="MEW eMail"
            name="mew_email"
            type="email"
            value={mew_email}
            onChange={handleState}
          />
        </div>
      </div>
    </div>
  );
};

export default function EmployeeAddForm() {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <PersonalDataForm />
        <div className="box">
          <h1 className="title has-text-centered mb-4">Work Data</h1>
          <div className="columns is-multiline">
            <div className="column is-4">
              <InputField label="Job Title" name="email" type="text" />
            </div>
            <div className="column is-4">
              <InputField label="Education Level" name="education" type="text" />
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
          <h1 className="title has-text-centered mb-4">Location Data</h1>
          <div className="columns is-is-multiline">
            <div className="column">
              <InputField label="City" name="city" type="text" />
            </div>
            <div className="column">
              <InputField label="Block" name="block" type="text" />
            </div>
            <div className="column">
              <InputField label="Street" name="street" type="text" />
            </div>
            <div className="column">
              <InputField label="House" name="house" type="text" />
            </div>
          </div>
        </div>
        <div className="box">
          <div className="field is-grouped is-grouped-centered">
            <p className="control">
              <input type="submit" className="button is-primary" />
            </p>
            <p className="control">
              <input type="reset" className="button" />
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
