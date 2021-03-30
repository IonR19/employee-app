import React from "react";
import { connect } from "react-redux";
import { RootState, selectFilteredEmployees } from "../../../store";

interface Props {}

const EmployeeVacationShow = (props: EmployeeVacationShowProps) => {
  
  
  return (
    <div>
      <ul></ul>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  employees: selectFilteredEmployees(state),
});

const connector = connect(mapStateToProps);
type EmployeeVacationShowProps = typeof connector;
export default connect(mapStateToProps)(EmployeeVacationShow);
