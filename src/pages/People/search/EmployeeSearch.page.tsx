import React, { Fragment } from "react";
import EmployeeSearchTable from "./EmployeeSearchTable.comp";
import EmployeeSearchTabs from "./EmployeeSearchTabs.comp";

/**
 * @todo useEffect Cancle and loading requests when leaving the page
 */

const EmployeeSearch: React.FC = () => {
  return (
    <Fragment>
      <EmployeeSearchTabs />
      <EmployeeSearchTable />
    </Fragment>
  );
};

export default EmployeeSearch;
