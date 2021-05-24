import React, { useEffect } from "react";
import { Form } from "react-bulma-components";
import { useTranslation } from "react-i18next";
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
    phone: string;
  };
}

const PersonalForm: React.FC<PersonalFormProps> = ({ initialValues }) => {
  const [value, setValue] = React.useState({
    name: "",
    civil_id: "",
    gender: "",
    nationality: "",
    martial: "",
    email: "",
    mew_email: "",
    phone: "",
  });
  React.useEffect(() => {
    setValue({
      ...value,
      name: initialValues?.name || "",
      civil_id: initialValues?.civil_id || "",
      gender: initialValues?.gender || "",
      nationality: initialValues?.nationality || "",
      martial: initialValues?.martial || "",
      email: initialValues?.email || "",
      mew_email: initialValues?.mew_email || "",
      phone: initialValues?.phone || "",
    });
  }, [initialValues]);
  const { civil_id, email, gender, martial, mew_email, name, nationality, phone } = value;

  const handleState = (e: any) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const { t } = useTranslation();
  return (
    <div className="box">
      <h1 className="title has-text-centered">{t("personal_data")}</h1>
      <div className="columns is-multiline has" style={{ borderRadius: "12px" }}>
        <div className="column is-6">
          <InputField
            required
            label={t("name")}
            name="name"
            type="text"
            value={name}
            onChange={handleState}
          />
        </div>
        <div className="column is-3">
          <InputField
            required
            label={t("civil_id")}
            name="civil_id"
            type="number"
            value={civil_id}
            onChange={handleState}
          />
        </div>
        <div className="column is-2">
          <Form.Label htmlFor="phone">{t("phone")}</Form.Label>
          <Form.Input id="phone" name="phone" value={phone} onChange={handleState} />
        </div>
        <div className="column is-1">
          <OptionInputField
            label={t("gender")}
            name="gender"
            options={GenderOptions}
            value={gender}
            onChange={handleState}
          />
        </div>
        <div className="column is-2">
          <OptionInputField
            label={t("nationality")}
            name="nationality"
            options={NationalityOption}
            value={nationality}
            onChange={handleState}
            includeEmpty
          />
        </div>
        <div className="column is-2">
          <OptionInputField
            label={t("martial_state")}
            name="martial"
            options={MartialOptions}
            value={martial}
            onChange={handleState}
            includeEmpty
          />
        </div>
        <div className="column is-4">
          <InputField label={t("email")} name="email" type="mail" value={email} onChange={handleState} />
        </div>
        <div className="column is-4">
          <InputField
            label={t("mew_email")}
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
