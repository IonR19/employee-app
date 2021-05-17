import React from "react";
import { Button, Icon } from "react-bulma-components";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, Route } from "react-router-dom";
import { appLanguageDir, selectEmployeesCount, selectPagedFilteredEmployees } from "../../../store";
import EmployeeRemove from "../remove/EmployeeRemove.page";
import EmployeePagination from "./EmployeePagination.comp";

const EmployeeSearchTable: React.FC = (props: any) => {
  const employees = useSelector(selectPagedFilteredEmployees);
  const { t } = useTranslation();
  const lng = useSelector(appLanguageDir);
  const count = useSelector(selectEmployeesCount);

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
              <td>{t(emp.name)}</td>
              <td>{t(emp.civil_id)}</td>
              <td>{t(emp.file_no)}</td>
              <td>{t(emp.section)}</td>
              <td>{t(emp.level)}</td>
              <td align="center">
                <abbr title={t("edit")}>
                  <Link to={`/edit/${emp.id}`} className="button is-info">
                    <Icon className="fas fa-wrench"></Icon>
                  </Link>
                </abbr>
                <abbr title={t("delete")}>
                  <Link to={`/delete/${emp.id}`} className="button">
                    <Icon className="fas fa-trash-alt"></Icon>
                  </Link>
                </abbr>
              </td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
      <div>
        <h2 className="subtitle">
          {t("total_emp")}: {count}
        </h2>
      </div>
      <Route path="/delete/:id" component={EmployeeRemove} />
    </div>
  );
};

export default EmployeeSearchTable;
