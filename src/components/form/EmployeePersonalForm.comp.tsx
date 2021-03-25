import React from "react";
import { GenderOptions, MartialOptions, NationalityOption } from "../../static/StaticOptions";
import InputField from "../FormElements/InputField";
import OptionInputField from "../FormElements/OptionInputField";

interface PersonalFormProps {
  initialValues?: {
    name: string;
    civil_id: string;
    gender: string;
    nationality: string;
    martial: string;
    email: string;
    mew_email: string;
  };
}

const PersonalForm: React.FC<PersonalFormProps> = ({ initialValues }) => {
  const [value, setValue] = React.useState({
    name: initialValues?.name || "",
    civil_id: initialValues?.civil_id || "",
    gender: initialValues?.gender || "",
    nationality: initialValues?.nationality || "",
    martial: initialValues?.martial || "",
    email: initialValues?.email || "",
    mew_email: initialValues?.mew_email || "",
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
      <div className="columns is-multiline has" style={{ borderRadius: "12px" }}>
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
            options={GenderOptions}
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
            options={MartialOptions}
            value={martial}
            onChange={handleState}
          />
        </div>
        <div className="column is-5">
          <InputField label="Email" name="email" type="mail" value={email} onChange={handleState} />
        </div>
        <div className="column is-5">
          <InputField
            label="MEW Email"
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

export default PersonalForm;