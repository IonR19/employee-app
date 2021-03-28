import React from "react";
import { useDispatch } from "react-redux";
import EmployeeEditWrapper from "../../../components/form/EmployeeFormWrapper.comp";
import { IEmployee } from "../../../models";
import { addEmployee } from "../../../store";

const EmployeeAdd: React.FC = () => {
  const dispatch = useDispatch();

  const onSubmit = (emp: IEmployee) => {
    dispatch(addEmployee(emp));
  };

  return (
    <div>
      <EmployeeEditWrapper onSubmit={onSubmit} type="create" />
    </div>
  );
};

export default EmployeeAdd;
