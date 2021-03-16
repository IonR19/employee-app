import React from "react";
import { SectionOptions } from "../../static/StaticOptions";
import InputField from "../FormElements/InputField";
import OptionInputField from "../FormElements/OptionInputField";

const WorkForm = () => {
  const [value, setValue] = React.useState({
    job_title: "",
    education_level: "",
    authority: "",
    move_in: "",
    hire_on: "",
    years_exp: "",
    section: "",
  });
  const { authority, education_level, hire_on, job_title, move_in, years_exp, section } = value;

  const handleState = (e: any) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="box">
      <h1 className="title has-text-centered">Work Data</h1>
      <div className="columns is-multiline has-background-info-light" style={{ borderRadius: "12px" }}>
        <div className="column is-4">
          <InputField
            label="Job Title"
            name="job_title"
            value={job_title}
            onChange={handleState}
            placeholder="Full name"
          />
        </div>
        <div className="column is-4">
          <InputField
            label="Education Level"
            name="education_level"
            value={education_level}
            type="number"
            onChange={handleState}
          />
        </div>
        <div className="column is-4">
          <InputField label="Authority" name="authority" value={authority} onChange={handleState} />
        </div>
        <div className="column is-4">
          <InputField
            label="Move in Date"
            name="move_in"
            value={move_in}
            type="date"
            onChange={handleState}
          />
        </div>
        <div className="column is-4">
          <InputField
            label="Hire Date"
            name="hire_on"
            value={hire_on}
            type="date"
            onChange={handleState}
          />
        </div>
        <div className="column">
          <InputField
            label="Years of Experience"
            name="years_exp"
            value={years_exp}
            type="number"
            onChange={handleState}
          />
        </div>
        <div className="column">
          <OptionInputField label="Section" name="section" value={section} options={SectionOptions} onChange={handleState} />
        </div>
      </div>
    </div>
  );
};

export default WorkForm;
