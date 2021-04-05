import React from "react";
import { useDispatch } from "react-redux";
import { fetchEmployees } from "../../../store";
import EmployeeSearchTableComp from "./EmployeeSearchTable.comp";
import EmployeeSearchTabs from "./EmployeeSearchTabs.comp";

/**
 * @todo useEffect Cancle and loading requests when leaving the page
 */
const EmployeeList: React.FC = () => {
  return (
    <div>
      <EmployeeSearchTabs />
      <EmployeeSearchTableComp />
    </div>
  );
};

export default EmployeeList;
