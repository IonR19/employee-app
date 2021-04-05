import React, { useEffect } from "react";
import { connect, ConnectedProps, useDispatch, useSelector } from "react-redux";
import { RouteComponentProps, useRouteMatch } from "react-router";
import EmployeeFormWrapper from "../../../components/form/EmployeeFormWrapper.comp";
import { IEmployee } from "../../../models";
import { fetchEmployeesById, RootState, selectEmployeeById, updateEmployeeById } from "../../../store";
import EmployeeEditNav from "./EmployeeEditNav.comp";

const EmployeeEdit: React.FC = () => {
  const {
    params: { id },
  } = useRouteMatch<{ id: string }>();

  const dispatch = useDispatch();
  const employee = useSelector((state: RootState) => selectEmployeeById(state, id));

  React.useEffect(() => {
    dispatch(fetchEmployeesById(id));
  }, [id]);

  const onSubmit = (e: IEmployee) => {
    dispatch(updateEmployeeById(id, e));
  };

  return (
    <div>
      <div className="columns">
        <div className="column">
          <h1 className="title has-text-primary-light is-capitalized">edit page</h1>
        </div>
        <EmployeeEditNav id={id} />
      </div>
      {!employee && (
        <div className="card">
          <h1>Loading...</h1>
        </div>
      )}
      {<EmployeeFormWrapper initialValues={employee} type="update" onSubmit={onSubmit} />}
    </div>
  );
};

export default EmployeeEdit;
