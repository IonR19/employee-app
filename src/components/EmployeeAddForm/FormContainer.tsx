import React, { useState } from "react";
import LocationForm from "./LocationForm";
import PersonalForm from "./PersonalForm";
import WorkForm from "./WorkForm";

export default function FormContainer() {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    [...e.target.elements!].forEach((el: HTMLInputElement) => {
      console.log(`${el.name} ~ ${el.value}`);
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <PersonalForm />
        <WorkForm />
        <LocationForm />

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
