import React from "react";

export default function EmployeeSearchForm() {
  return (
    <div className="box p-4">
      <div className="columns is-multiline">
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
    </div>
  );
}
