import React, { useRef } from "react";
import { IEmployee } from "../../models";
import LocationForm from "./EmployeeLocationForm.comp";
import PersonalForm from "./EmployeePersonalForm.comp";
import WorkForm from "./EmployeeWorkForm.comp";

interface EmployeeFormWrapperProps {
  initialValues?: any;
  onSubmit: Function;
  type: "create" | "update";
}

const EmployeeFormWrapper: React.FC<EmployeeFormWrapperProps> = ({ initialValues, onSubmit, type }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit: React.FormEventHandler<EventTarget> = (e) => {
    e.preventDefault();
    let Employee: any = {};

    if (formRef.current) {
      [...formRef.current!.elements].forEach(({ name, value }: any) => {
        if (name) {
          Employee[name] = value;
        }
      });
    }

    onSubmit(Employee as IEmployee);
  };

  return (
    <form className="form" onSubmit={handleSubmit} ref={formRef}>
      <PersonalForm initialValues={initialValues} />
      <WorkForm initialValues={initialValues} />
      <LocationForm initialValues={initialValues} />

      <div className="box">
        <div className="field is-grouped is-grouped-centered">
          <p className="control">
            <input
              type="submit"
              className="button is-primary"
              disabled={false}
              value={type == "create" ? "Submit" : "Update"}
            />
          </p>
          <p className="control">
            <input disabled={false} type="reset" className="button" />
          </p>
        </div>
      </div>
    </form>
  );
};

export default EmployeeFormWrapper;