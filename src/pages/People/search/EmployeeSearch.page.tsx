import React, { Fragment } from "react";
import EmployeeSearchTableComp from "./EmployeeSearchTable.comp";
import EmployeeSearchTabs from "./EmployeeSearchTabs.comp";

/**
 * @todo useEffect Cancle and loading requests when leaving the page
 */

const EmployeeSearch: React.FC = () => {
  return (
    <Fragment>
      <EmployeeSearchTabs />
      <EmployeeSearchTableComp />
    </Fragment>
  );
};

export default EmployeeSearch;
