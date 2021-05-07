import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { appLanguageDir, selectPagedFilteredEmployees } from "../../../store";
import EmployeePagination from "./EmployeePagination.comp";

const EmployeeSearchTable: React.FC = (props: any) => {
  const employees = useSelector(selectPagedFilteredEmployees);
  const { t, i18n } = useTranslation();
  const lng = useSelector(appLanguageDir);

  return (
    <div className={`box p-4 ${lng}`} style={{ minHeight: "100vh" }}>
      <EmployeePagination />
      <table className="table is-hoverable is-fullwidth is-striped is-bordered">
        <thead>
          <tr>
            <th className="is-primary">{t("name")}</th>
            <th className="is-primary">{t("civil_id")}</th>
            <th className="is-primary">{t("file_no")}</th>
            <th className="is-primary">{t("section")}</th>
            <th className="is-primary">{t("education_level")}</th>
            <th className="is-primary">{t("tools")}</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp: any, index: number) => (
            <tr key={emp.id}>
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
