import React from "react";
import { useDispatch } from "react-redux";
import EmployeeEditWrapper from "../../../components/form/EmployeeFormWrapper.comp";
import { IEmployee } from "../../../models";

const EmployeeAdd: React.FC = () => {
  const dispatch = useDispatch();

  const onSubmit = (emp: IEmployee) => {
    console.log(emp);
    // dispatch(addEmployee(emp));
  };

  return (
    <div>
      <EmployeeEditWrapper onSubmit={onSubmit} type="create" />
    </div>
  );
};

export default EmployeeAdd;
