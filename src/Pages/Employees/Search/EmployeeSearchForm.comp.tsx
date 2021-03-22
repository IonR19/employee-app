import React from "react";
interface EmployeeSearchFormProps {
  activeTab?: number;
}
const EmployeeSearchForm: React.FC<EmployeeSearchFormProps> = ({ activeTab = 0 }) => {
  return (
    <div className={"columns is-multiline" + `${activeTab === 0 ? "" : " is-hidden"}`}>
      <div className="field column">
        <label className="label has-text-primary is-4">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="name" />
        </div>
      </div>
      <div className="field column">
        <label className="label has-text-primary">Civil ID</label>
        <div className="control">
          <input className="input" type="text" placeholder="civil id" />
        </div>
      </div>
      <div className="field column">
        <label className="label has-text-primary">File No</label>
        <div className="control">
          <input className="input" type="text" placeholder="file no" />
        </div>
      </div>
      <div className="field column">
        <label className="label has-text-primary">Phone</label>
        <div className="control">
          <input className="input" type="number" placeholder="00000" />
        </div>
      </div>
      <div className="field column">
        <label className="label has-text-primary">Section</label>
        <div className="control">
          <input className="input" type="number" placeholder="00000" />
        </div>
      </div>
    </div>
  );
};

export default EmployeeSearchForm;
