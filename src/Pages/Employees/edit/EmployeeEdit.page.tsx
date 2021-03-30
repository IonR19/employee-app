import React, { useEffect } from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router";
import EmployeeFormWrapper from "../../../components/form/EmployeeFormWrapper.comp";
import { IEmployee } from "../../../models";
import { fetchEmployeesById, RootState, selectEmployeeById, updateEmployeeById } from "../../../store";
import EmployeeEditNav from "./EmployeeEditNav.comp";

interface EmployeeEditProps extends inferedFromRedux {}

const EmployeeEdit: React.FC<RouteComponentProps<{ id: string }> & EmployeeEditProps> = ({
  match: {
    params: { id },
  },
  getEmployee,
  updateEmployee,
  employee,
}) => {
  React.useEffect(() => {
    getEmployee(id);
  }, [id]);

  const onSubmit = (e: IEmployee) => {
    updateEmployee(id, e);
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

const mapStateToProps = (state: RootState, ownProps: RouteComponentProps<{ id: string }>) => {
  return {
    employee: selectEmployeeById(state, ownProps.match.params.id),
  };
};

const mapDispatchToProps = {
  getEmployee: fetchEmployeesById,
  updateEmployee: updateEmployeeById,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(EmployeeEdit);

//  export default EmployeeEdit;

type inferedFromRedux = ConnectedProps<typeof connector>;
