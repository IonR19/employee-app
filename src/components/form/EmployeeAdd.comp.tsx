import React from "react";
import LocationForm from "./EmployeeLocationForm.comp";
import PersonalForm from "./EmployeePersonalForm.comp";
import WorkForm from "./EmployeeWorkForm.comp";

/**
 *
 * @deprecated FormContainer
 * should be ComponentWrapper, which handles update and create
 */
export default function FormContainer() {
  const handleSubmit: React.FormEventHandler<EventTarget> = (e) => {
    e.preventDefault();
    [...(e.target as HTMLFormElement).elements!].forEach((el: any) => {
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
