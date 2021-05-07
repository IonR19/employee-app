import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetFilter } from "../../../store";
import EmployeeVacationFilter from "./EmployeeVacationFilter.comp";
import EmployeeVacationShow from "./EmployeeVacationShow.comp";

interface EmployeeVacationProps {}

const EmployeeVacation: React.FC = (props: EmployeeVacationProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(resetFilter());
    };
  }, []);
  return (
    <div>
      <EmployeeVacationFilter />
      <EmployeeVacationShow />
    </div>
  );
};

export default EmployeeVacation;
