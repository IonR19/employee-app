import React, { useRef } from "react";
import { Button } from "react-bulma-components";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { iEmployee } from "../../models";
import { RootState } from "../../store";
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

    onSubmit(Employee as iEmployee);
  };

  const { t } = useTranslation();

  const { creating, editing } = useSelector((state: RootState) => state.employees.loading);

  return (
    <form className="form" onSubmit={handleSubmit} ref={formRef}>
      <PersonalForm initialValues={initialValues} />
      <WorkForm initialValues={initialValues} />
      <LocationForm initialValues={initialValues} />

      <div className="box">
        <div className="field is-grouped is-grouped-centered">
          <p className="control">
            <Button color="primary" type="submit" loading={creating || editing}>
              {t(type)}
            </Button>
          </p>
          <p className="control">
            <input disabled={false} type="reset" className="button" value={t("reset").toString()} />
          </p>
        </div>
      </div>
    </form>
  );
};

export default EmployeeFormWrapper;
