import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps } from "react-router";
import EmployeeFormWrapper from "../../../components/form/EmployeeFormWrapper.comp";
import { fetchEmployeesById, RootState, selectEmployeeById } from "../../../store";

interface EmployeeEditProps extends inferedFromRedux {}

const EmployeeEdit: React.FC<RouteComponentProps<{ id: string }> & EmployeeEditProps> = (props) => {
  const {
    match: {
      params: { id },
    },
    getEmployee,
    employee,
  } = props;

  React.useEffect(() => {
    getEmployee(id);
  }, [id]);

  return (
    <div>
      <h1 className="title has-text-primary-light is-capitalized">edit page</h1>
      <EmployeeFormWrapper initialValues={employee} type="update" onSubmit={(a: any) => {}} />
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
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(EmployeeEdit);

type inferedFromRedux = ConnectedProps<typeof connector>;
