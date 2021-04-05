import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectFilteredEmployees } from "../../../store";

const EmployeeSearchTable: React.FC = (props: any) => {
  const employees = useSelector(selectFilteredEmployees);
  return (
    <div className="box p-4 " style={{ minHeight: "100vh" }}>
      <table className="table is-hoverable is-fullwidth is-striped is-bordered">
        <thead>
          <tr>
            <th className="is-primary">Serial</th>
            <th className="is-primary">Name</th>
            <th className="is-primary">Civil ID</th>
            <th className="is-primary">File No</th>
            <th className="is-primary">Section</th>
            <th className="is-primary">Level</th>
            <th className="is-primary">tools</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp: any, index: number) => (
            <tr key={emp.id}>
              <td>{index + 1}</td>
              <td>{emp.name}</td>
              <td>{emp.civil_id}</td>
              <td>{emp.file_no}</td>
              <td>{emp.section}</td>
              <td>{emp.level}</td>
              <td>
                <Link to={`/edit/${emp.id}`} className="button">
                  edit
                </Link>
              </td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeSearchTable;
