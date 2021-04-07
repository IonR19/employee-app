import React from "react";
import EmployeeVacationFilter from "./EmployeeVacationFilter.comp";
import EmployeeVacationShow from "./EmployeeVacationShow.comp";

interface EmployeeVacationProps {}

const EmployeeVacation: React.FC = (props: EmployeeVacationProps) => {
  return (
    <div>
      <EmployeeVacationFilter />
      <EmployeeVacationShow />
    </div>
  );
};

export default EmployeeVacation;
