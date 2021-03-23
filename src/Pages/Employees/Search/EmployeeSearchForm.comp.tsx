import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { iFilter } from "../../../models";
import { setFilter } from "../../../store";

interface EmployeeSearchFormProps {
  activeTab?: number;
}

const EmployeeSearchForm: React.FC<EmployeeSearchFormProps> = ({ activeTab = 0 }) => {
  const dispatch = useDispatch();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const [filters, setFilters] = useState<iFilter>({
    civil_id: "",
    file_no: "",
    name: "",
    phone: "",
    section: "",
  });

  React.useEffect(() => {
    dispatch(setFilter(filters));
  }, [filters]);

  return (
    <div className={"columns is-multiline" + `${activeTab === 0 ? "" : " is-hidden"}`}>
      <div className="field column">
        <label className="label has-text-primary is-4">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="name" name="name" onChange={handleChange} />
        </div>
      </div>
      <div className="field column">
        <label className="label has-text-primary">Civil ID</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="civil id"
            name="civil_id"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field column">
        <label className="label has-text-primary">File No</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="file no"
            name="file_no"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field column">
        <label className="label has-text-primary">Phone</label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="00000"
            name="phone"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field column">
        <label className="label has-text-primary">Section</label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="00000"
            name="section"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeSearchForm;
