import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Autocomplete from "./EmployeeFilterAutoComplete.comp";
import { selectEmployeesByCivilId, selectFilteredEmployees, setFilter } from "../../../store";

interface EmployeeVacationFilterProps {}

const EmployeeVacationFilter = (props: EmployeeVacationFilterProps) => {
  const dispatch = useDispatch();

  const handleChange = (e: string) => {
    dispatch(
      setFilter({
        civil_id: e,
      })
    );
  };

  const employees = useSelector(selectEmployeesByCivilId);

  return (
    <div className="box">
      <div className="columns">
        <div className="column is-3">
          <Autocomplete name="civil_id" data={employees} label="Civil ID" onSelect={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeVacationFilter;
