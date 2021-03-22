import React from "react";
import { api } from "../../../utils";
import EmployeeSearchTable from "./EmployeeSearchTable.comp";
import EmployeeSearchTabs from "./EmployeeSearchTabs.comp";




const List: React.FC = () => {
  return (
    <div>
      <EmployeeSearchTabs />
      <EmployeeSearchTable />
    </div>
  );
};

export default List;
