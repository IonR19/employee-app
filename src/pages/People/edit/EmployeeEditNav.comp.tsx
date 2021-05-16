import React from "react";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../../store";

interface EmployeeEditNavProps {
  id: string;
}
const EmployeeEditNav: React.FC<EmployeeEditNavProps> = ({ id }) => {
  const order = useTypedSelector((state) => state.employees.order);
  const index = order.findIndex((item) => item == id);

  return (
    <div className="column is-2 field has-addons">
      <p className="control">
        <Link to={`/edit/${!index ? order[index] : order[index - 1]}`}>
          <button className="button" disabled={!index}>
            <span className="icon is-small">
              <i className="fas fa-arrow-left"></i>
            </span>
            <span>Prev</span>
          </button>
        </Link>
      </p>
      <p className="control">
        <Link to={`/edit/${index + 1 === order.length ? order[index] : order[index + 1]}`}>
          <button className="button" disabled={index + 1 === order.length}>
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
