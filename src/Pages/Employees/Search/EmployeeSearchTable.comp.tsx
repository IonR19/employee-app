import React from "react";

const EmployeeSearchForm: React.FC = () => {
  return (
    <div className="box p-4">
      <table className="table is-hoverable is-fullwidth is-striped is-bordered">
        <thead>
          <tr>
            <th className="is-primary">Serial</th>
            <th className="is-primary">Name</th>
            <th className="is-primary">Civil ID</th>
            <th className="is-primary">Phone</th>
            <th className="is-primary">Email</th>
            <th className="is-primary">Section</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mohammed Mohammed Mohammed Mohammed</td>
            <td>291020200555</td>
            <td>99994444</td>
            <td>email@mew.gov.kw</td>
            <td>Emergency</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeSearchForm;
