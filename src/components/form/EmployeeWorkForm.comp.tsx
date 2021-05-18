import React from "react";
import { useTranslation } from "react-i18next";
import { WorkSector } from "../../static/StaticOptions";
import InputField from "../FormElements/InputField";
import OptionInputField from "../FormElements/OptionInputField";
import { Form } from "react-bulma-components";
interface WorkFormProps {
  initialValues?: {
    job_title: string;
    education_level: string;
    authority: boolean;
    move_in: string;
    hire_on: string;
    years_exp: string;
    section: string;
    file_no: string;
  };
}
const WorkForm: React.FC<WorkFormProps> = ({ initialValues }) => {
  const [values, setValues] = React.useState({
    job_title: initialValues?.job_title || "",
    education_level: initialValues?.education_level || "",
    authority: initialValues?.authority || false,
    move_in: initialValues?.move_in || "",
    hire_on: initialValues?.hire_on || "",
    years_exp: initialValues?.years_exp || "",
    section: initialValues?.section || "",
    file_no: initialValues?.file_no || "",
  });
  const { authority, education_level, hire_on, job_title, move_in, years_exp, section, file_no } =
    values;

  const handleState = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    let { name, value } = e.target;
    if (e.target.type == "checkbox") {
      //@ts-ignore
      value = e.target.checked;
    }

    setValues({
      ...values,
      [name]: value,
    });
  };

  const { t } = useTranslation();

  return (
    <div className="box">
      <h1 className="title has-text-centered">{t("work_data")}</h1>
      <div className="columns is-multiline has-background-info-light" style={{ borderRadius: "12px" }}>
        <div className="column is-4">
          <InputField label={t("job_title")} name="job_title" value={job_title} onChange={handleState} />
        </div>
        <div className="column is-4">
          <InputField
            label={t("education_level")}
            name="education_level"
            value={education_level}
            type="text"
            onChange={handleState}
          />
        </div>
        <div className="column">
          <Form.Label htmlFor="file_no">{t("file_no")}</Form.Label>
          <Form.Input id="file_no" name="file_no" value={file_no} onChange={handleState}></Form.Input>
        </div>
        <div className="column is-2 is-flex is-align-items-center is-justify-content-center">
          <label className="checkbox label">
            <input
              className="mx-3"
              type="checkbox"
              name="authority"
              checked={authority}
              onChange={handleState}
            />
            {t("authority")}
          </label>
        </div>
        <div className="column is-4">
          <InputField
            label={t("transfer_date")}
            name="move_in"
            value={move_in}
            type="date"
            onChange={handleState}
          />
        </div>
        <div className="column is-4">
          <InputField
            label={t("hire_on")}
            name="hire_on"
            value={hire_on}
            type="date"
            onChange={handleState}
          />
        </div>
        <div className="column">
          <InputField
            label={t("years_exp")}
            name="years_exp"
            value={years_exp}
            type="number"
            onChange={handleState}
          />
        </div>
        <div className="column">
          <OptionInputField
            label={t("section")}
            name="section"
            value={section}
            options={WorkSector}
            onChange={handleState}
            includeEmpty
          />
        </div>
      </div>
    </div>
  );
};

export default WorkForm;
