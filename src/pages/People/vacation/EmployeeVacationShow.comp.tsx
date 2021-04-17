import React, { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import OptionInputField from "../../../components/FormElements/OptionInputField";
import Tabs from "../../../components/Tabs/Tab.comp";
import { selectFilteredEmployees } from "../../../store";
import { leaveOptions } from "../../../static/StaticOptions";
import { DateTime } from "luxon";
import EmployeeAddVacation from "./EmployeeAddVacation.comp";

interface Props {}

const Transfer = () => {
  return(
    <form onSubmit={e => e.preventDefault()}>
      <select name="type" id="">
        <option value="internal">internal</option>
        <option value="external">external</option>
      </select>
    </form>
  )
}



const Leave = () => {
  return (
    <form>
      <OptionInputField label="Leave" name="leave" options={leaveOptions} />
    </form>
  );
};

const EmployeeVacationShow: React.FC<Props> = (props) => {
  const employees = useSelector(selectFilteredEmployees);
  const selectedCount = employees.length;

  const HandleSelection = (): JSX.Element => {
    if (selectedCount == 0) {
      return <h1>Not found</h1>;
    }
    if (selectedCount > 1) {
      return <></>;
    }
    return (
      <div>
        <b>{JSON.stringify(employees[0])}</b>
        <Tabs
          tabs={[
            { title: "Vacation", child: EmployeeAddVacation },
            { title: "Leave Permission", child: Leave },
            { title: "Transfer", child: Transfer },
          ]}
        />
      </div>
    );
  };
  return (
    <div className="box">
      <HandleSelection />
    </div>
  );
};

export default EmployeeVacationShow;
