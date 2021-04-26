import React from "react";
import { useTranslation } from "react-i18next";
import InputField from "../FormElements/InputField";

interface LocationFormProps {
  initialValues?: {
    city: string;
    block: string;
    street: string;
    house: string;
  };
}
const LocationForm: React.FC<LocationFormProps> = ({ initialValues }) => {
  const [value, setValue] = React.useState({
    city: initialValues?.city || "",
    block: initialValues?.block || "",
    street: initialValues?.street || "",
    house: initialValues?.house || "",
  });

  const handleState = (e: any) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const { t } = useTranslation();

  return (
    <div className="box">
      <h1 className="title has-text-centered">Location Data</h1>
      <div className="columns is-multiline" style={{ borderRadius: "12px" }}>
        <div className="column">
          <InputField label={t("city")} name="city" onChange={handleState} />
        </div>
        <div className="column">
          <InputField label={t("block")} name="block" onChange={handleState} />
        </div>
        <div className="column">
          <InputField label={t("street")} name="street" onChange={handleState} />
        </div>
        <div className="column">
          <InputField label={t("house")} name="house" onChange={handleState} />
        </div>
      </div>
    </div>
  );
};

export default LocationForm;
