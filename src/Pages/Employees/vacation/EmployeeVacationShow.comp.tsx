import React from "react";
import { connect, useSelector } from "react-redux";
import {} from "reselect";
import { RootState, selectFilteredEmployees } from "../../../store";
interface EmployeeVacationShowProps {}

const EmployeeVacationShow: React.FC<EmployeeVacationShowProps> = (props) => {
  const employees = useSelector(selectFilteredEmployees);

  return (
    <div className="box">
      <ul>
        {employees.map((emp) => (
          <li key={emp.civil_id}>{JSON.stringify(emp)}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeVacationShow;
