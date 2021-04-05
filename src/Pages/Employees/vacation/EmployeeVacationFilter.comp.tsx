import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Autocomplete from "../../../components/AutoComplete/AutoComplete";
import { selectFilteredEmployees, setFilter } from "../../../store";

interface EmployeeVacationFilterProps {}

const EmployeeVacationFilter = (props: EmployeeVacationFilterProps) => {
  const dispatch = useDispatch();
  const [civilId, setCivilId] = React.useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCivilId(e.target.value);
    dispatch(
      setFilter({
        civil_id: civilId,
      })
    );
  };

  const employees = useSelector(selectFilteredEmployees);

  return (
    <div className="box">
      <div className="columns">
        <div className="column is-3">
          <Autocomplete
            name="civil_id"
            data={employees.map((e) => e.civilId)}
            label="Civil ID"
          />
          {/* <div className="dropdown">
            <label className="label" htmlFor="civil_id">
              civil id
            </label>
            <input
              className="input"
              type="number"
              name="civil_id"
              id="civil_id"
              value={civilId}
              onChange={handleChange}
            />
            {employees.length && (
              <div className="dropdown">
                <div className="dropdown-content is-active">
                  {employees.slice(0, Math.max(10, employees.length)).map((emp) => (
                    <a className="dropdown-item">{emp.civil_id}</a>
                  ))}
                </div>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default EmployeeVacationFilter;
