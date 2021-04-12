import React, { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { selectFilteredEmployees } from "../../../store";
interface EmployeeVacationShowProps {}

const EmployeeVacationShow: React.FC<EmployeeVacationShowProps> = (props) => {
  const employees = useSelector(selectFilteredEmployees);
  const selectedCount = employees.length;

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [duration, setDuration] = useState("");

  const handleDateSelection = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value
  }

  const HandleSelection = (): JSX.Element => {
    if (selectedCount == 0) {
      return <h1>Not found</h1>;
    }
    if (selectedCount > 1) {
      return <></>;
    }
    return (
      <div>
        <b>
          {JSON.stringify(employees[0])}
          <form>
            <div className="control">
              <label htmlFor="from">From</label>
              <input id="from" type="date" />
            </div>

            <div className="control">
              <label htmlFor="to">To</label>
              <input id="to" type="date" />
            </div>

            <div className="control">
              <label htmlFor="duration">duration</label>
              <input type="text" name="duration" id="duration" />
            </div>

            <input type="submit" value="submit" />
          </form>
        </b>
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
