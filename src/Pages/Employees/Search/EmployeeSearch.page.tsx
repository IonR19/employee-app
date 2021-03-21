import React from "react";
import EmployeeSearchForm from "./EmployeeSearchForm.comp";
import EmployeeSearchTable from "./EmployeeSearchTable.comp";
const List: React.FC = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <div>
      <EmployeeSearchForm />
      <EmployeeSearchTable />
    </div>
  );
};

export default List;
