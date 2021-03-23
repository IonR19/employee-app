import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  DefaultRootState,
  fetchEmployees,
  RootState,
  selectAllEmployees,
  selectFilteredEmployees,
} from "../../../store/";

const EmployeeSearchTable: React.FC = (props: any) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    setTimeout(() => dispatch(fetchEmployees()), 3000);
  }, []);

  return (
    <div className="box p-4 " style={{ minHeight: "100vh" }}>
      <table className="table is-hoverable is-fullwidth is-striped is-bordered">
        <thead>
          <tr>
            <th className="is-primary">Serial</th>
            <th className="is-primary">Name</th>
            <th className="is-primary">Civil ID</th>
            <th className="is-primary">Phone</th>
            <th className="is-primary">Email</th>
            <th className="is-primary">Section</th>
            <th className="is-primary">tools</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((emp: any, index: number) => (
            <tr key={emp.id}>
              <td>{index + 1}</td>
              <td>{emp.name}</td>
              <td>{emp.civil_id}</td>
              <td>99994444</td>
              <td>email@mew.gov.kw</td>
              <td>{emp.section}</td>
              <td>
                <a href={`/${emp.id}`} className="button">
                  edit
                </a>
              </td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  employees: selectFilteredEmployees(state),
});

// const mapStateToProps = createStructuredSelector({
//   employees : selectFilteredEmployees
// });
export default connect(mapStateToProps)(EmployeeSearchTable);
