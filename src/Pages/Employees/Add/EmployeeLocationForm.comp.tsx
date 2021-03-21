import React from "react";
import InputField from "../../../components/FormElements/InputField";

const LocationForm = () => {
  const [value, setValue] = React.useState({
    city: "",
    block: "",
    street: "",
    house: "",
  });

  const handleState = (e: any) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="box">
      <h1 className="title has-text-centered">Location Data</h1>
      <div className="columns is-multiline has-background-info-light" style={{ borderRadius: "12px" }}>
        <div className="column">
          <InputField label="City" name="city" onChange={handleState} />
        </div>
        <div className="column">
          <InputField label="Block" name="block" onChange={handleState} />
        </div>
        <div className="column">
          <InputField label="Street" name="street" onChange={handleState} />
        </div>
        <div className="column">
          <InputField label="House" name="house" onChange={handleState} />
        </div>
      </div>
    </div>
  );
};

export default LocationForm;
