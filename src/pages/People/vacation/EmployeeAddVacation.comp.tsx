import { DateTime } from "luxon";
import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectEmployeesByCivilId, selectFilteredEmployees } from "../../../store";
import { AddOrder } from "../../../store/orders";

interface Props {}

const EmployeeAddVacation = (props: Props) => {
  // window.luxon = DateTime;
  const [state, setState] = useState({
    from: "",
    to: "",
    duration: "",
  });
  const selectEmployee = useSelector(selectFilteredEmployees);

  const dispatch = useDispatch();
  const addVacation = () => {
    const { duration, to, from } = state;
    dispatch(
      AddOrder({
        type: "vacation",
        from,
        to,
        duration,
        state: "new",
        employeeId: selectEmployee[0].id,
      })
    );
  };

  const handleDateValidation = (changed: string) => {
    const { duration, from, to } = state;
    try {
      switch (changed) {
        case "duration":
          if (from) {
            // calc to
            let newTo = DateTime.fromISO(from)
              .plus({ days: +duration })
              .toISODate();
            setState({ ...state, to: newTo });
          } else if (to) {
            //calc from
            let newFrom = DateTime.fromISO(to)
              .minus({ days: +duration })
              .toISODate();
            setState({ ...state, from: newFrom });
          }
          break;
        case "from":
          if (to) {
            //calc duration
            const newDuration = "" + DateTime.fromISO(to).diff(DateTime.fromISO(from), "days").days;
            setState({ ...state, duration: newDuration });
          } else if (duration) {
            //calc to
            let newTo = DateTime.fromISO(from)
              .plus({ days: +duration })
              .toISODate();
            setState({ ...state, to: newTo });
          }
          break;
        case "to":
          if (from) {
            //calc duration
            const newTo = "" + DateTime.fromISO(to).diff(DateTime.fromISO(from), "days").days;
            setState({ ...state, duration: newTo });
          } else if (duration) {
            //calc from
            let newFrom = DateTime.fromISO(to)
              .minus({ days: +duration })
              .toISODate();
            setState({ ...state, from: newFrom });
          }
          break;
      }
    } catch {}
  };
  const handleDateSelection = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  React.useEffect(() => handleDateValidation("to"), [state.to]);
  React.useEffect(() => handleDateValidation("duration"), [state.duration]);
  React.useEffect(() => handleDateValidation("from"), [state.from]);

  const { from, to, duration } = state;
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="columns">
        <div className="column">
          <label className="label" htmlFor="from">
            From
          </label>
          <input
            className="input"
            id="from"
            name="from"
            type="date"
            value={from}
            onChange={handleDateSelection}
          />
        </div>
        <div className="column">
          <div className="control">
            <label className="label" htmlFor="to">
              To
            </label>
            <input
              className="input"
              id="to"
              name="to"
              type="date"
              value={to}
              onChange={handleDateSelection}
            />
          </div>
        </div>
        <div className="column">
          <div className="control">
            <label className="label" htmlFor="duration">
              Duration
            </label>
            <input
              className="input"
              type="number"
              name="duration"
              id="duration"
              value={duration}
              onChange={handleDateSelection}
            />
          </div>
        </div>
      </div>

      <button className="button is-link" onClick={addVacation}>
        Submit
      </button>
    </form>
  );
};

export default EmployeeAddVacation;
