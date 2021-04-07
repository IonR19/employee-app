import React from "react";
import { Link } from "react-router-dom";

interface EmployeeEditNavProps {
  id: string;
}
const EmployeeEditNav: React.FC<EmployeeEditNavProps> = ({ id }) => {
  return (
    <div className="column is-2 field has-addons">
      <p className="control">
        <Link to={`/edit/${id === "1" ? "1" : +id - 1}`}>
          <button className="button" disabled={+id <= 1}>
            <span className="icon is-small">
              <i className="fas fa-arrow-left"></i>
            </span>
            <span>Prev</span>
          </button>
        </Link>
      </p>
      <p className="control">
        <Link to={`/edit/${+id + 1}`}>
          <button className="button">
            <span>Next</span>
            <span className="icon is-small">
              <i className="fas fa-arrow-right"></i>
            </span>
          </button>
        </Link>
      </p>
    </div>
  );
};

export default EmployeeEditNav;
