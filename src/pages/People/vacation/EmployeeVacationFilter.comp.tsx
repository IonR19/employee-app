import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Autocomplete from "./EmployeeFilterAutoComplete.comp";
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
            data={employees.map((e) => e.civil_id)}
            label="Civil ID"
            onSelect={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeVacationFilter;
