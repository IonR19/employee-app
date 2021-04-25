import React from "react";
import { useDispatch, useSelector } from "react-redux";
import OptionInputField from "../../../components/FormElements/OptionInputField";
import { leaveOptions } from "../../../static/StaticOptions";
import { selectFilteredEmployees } from "../../../store";
import { AddOrder } from "../../../store/orders";

interface Props {}

const EmployeeAddLeave = (props: Props) => {
  const [leave, setLeave] = React.useState<"start-shift" | "end-shift">("start-shift");
  const dispatch = useDispatch();

  const selectEmployee = useSelector(selectFilteredEmployees);

  const addLeaveHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(
      AddOrder({
        type: "leave",
        state: "new",
        leave: leave,
        date: "",
        employeeId: selectEmployee[0].id,
      })
    );
  };

  return (
    <form onSubmit={addLeaveHandler}>
      <div className="control">
        <div className="columns">
          <div className="column is-narrow">
            <label className="label" htmlFor="date">
              Date
            </label>
            <input className="input" type="date" name="date" id="date" />
          </div>
          <div className="column is-align-content-center is-flex is-flex-direction-column">
            <label className="label">Shift</label>
            <div>
              <label className="radio">
                <input
                  type="radio"
                  name="leave"
                  checked={leave == "start-shift"}
                  onChange={() => setLeave("start-shift")}
                />
                Start
              </label>
            </div>
            <div>
              <label className="radio">
                <input
                  type="radio"
                  name="leave"
                  checked={leave == "end-shift"}
                  onChange={() => setLeave("end-shift")}
                />
                End
              </label>
            </div>
          </div>
        </div>
      </div>
      <button className="button is-link mt-5">Submit</button>
    </form>
  );
};

export default EmployeeAddLeave;
