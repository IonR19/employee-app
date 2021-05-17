import React, { useRef } from "react";
import { Block, Button, Notification } from "react-bulma-components";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { iEmployee } from "../../models";
import { appLanguageDir, clearAlerts, RootState } from "../../store";
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
    // clearAlerts
  };

  const { t } = useTranslation();
  const lng = useSelector(appLanguageDir);
  const { creating, editing } = useSelector((state: RootState) => state.employees.loading);
  const dispatch = useDispatch();
  return (
    <form className={"form " + lng} onSubmit={handleSubmit} ref={formRef}>
      <PersonalForm initialValues={initialValues} />
      <WorkForm initialValues={initialValues} />
      <LocationForm initialValues={initialValues} />

      <div className="box">
      <Block>
        <Notification>
          <Button type="button" remove onClick={() => dispatch(clearAlerts)} />
        </Notification>
      </Block>
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
