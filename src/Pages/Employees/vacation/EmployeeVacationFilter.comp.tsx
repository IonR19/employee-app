import React from "react";

interface EmployeeVacationFilterProps {}

const EmployeeVacationFilter = (props: EmployeeVacationFilterProps) => {
  const [civilId, setCivilId] = React.useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCivilId(e.target.value);
  };
  return (
    <div className="card">
      <label htmlFor="civil_id">civil id</label>
      <input type="number" name="civil_id" id="civil_id" value={civilId} onChange={handleChange} />
    </div>
  );
};

export default EmployeeVacationFilter;
