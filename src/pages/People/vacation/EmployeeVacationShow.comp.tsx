import React, { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import OptionInputField from "../../../components/FormElements/OptionInputField";
import Tabs from "../../../components/Tabs/Tab.comp";
import { selectFilteredEmployees } from "../../../store";
import { leaveOptions } from "../../../static/StaticOptions";
import { DateTime } from "luxon";

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

const Vacation = () => {
  // window.luxon = DateTime;
  const [state, setState] = useState({
    from: "",
    to: "",
    duration: "",
  });

  const handleDateSelection = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  React.useEffect(() => {
    const { from, to } = state;
    if (from && to) {
      const st = DateTime.fromISO(to);
      const en = DateTime.fromISO(from);
      const diff = st.diff(en, ["days"]);
      setState({ ...state, duration: "" + diff.days });
    }
  }, [state.to]);

  React.useEffect(() => {
    const { from, duration } = state;
    if (from && duration) {
      const en = DateTime.fromISO(from).plus({
        days: +duration,
      });
      setState({
        ...state,
        to: en.toISODate(),
      });
    }
  }, [state.duration]);

  const { from, to, duration } = state;
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="control">
        <label htmlFor="from">From</label>
        <input id="from" name="from" type="date" value={from} onChange={handleDateSelection} />
      </div>

      <div className="control">
        <label htmlFor="to">To</label>
        <input id="to" name="to" type="date" value={to} onChange={handleDateSelection} />
      </div>

      <div className="control">
        <label htmlFor="duration">duration</label>
        <input
          type="text"
          name="duration"
          id="duration"
          value={duration}
          onChange={handleDateSelection}
        />
      </div>

      <input type="submit" value="submit" />
    </form>
  );
};

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
            { title: "Vacation", child: Vacation },
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
