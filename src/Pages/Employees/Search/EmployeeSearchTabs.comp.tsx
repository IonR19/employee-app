import React from "react";
import EmployeeSearchForm from "./EmployeeSearchForm.comp";

const EmployeeSearchTabs: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="box">
      <div className="tabs is-centered is-boxed is-medium">
        <ul>
          <li className={activeTab === 0 ? "is-active" : ""} onClick={() => setActiveTab(0)}>
            <a>
              <span className="icon is-small">
                <i className="fas fa-user-alt"></i>
              </span>
              <span>Profile</span>
            </a>
          </li>
          <li className={activeTab === 1 ? "is-active" : ""} onClick={() => setActiveTab(1)}>
            <a>
              <span className="icon is-small">
                <i className="fas fa-database"></i>
              </span>
              <span>Specific</span>
            </a>
          </li>
          <li className={activeTab === 2 ? "is-active" : ""} onClick={() => setActiveTab(2)}>
            <a>
              <span className="icon is-small">
                <i className="fas fa-newspaper"></i>
              </span>
              <span>Additional</span>
            </a>
          </li>
        </ul>
      </div>
      <EmployeeSearchForm activeTab={activeTab} />
    </div>
  );
};

export default EmployeeSearchTabs;
