import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { iFilter } from "../../../models";
import { appLanguageDir, setFilter } from "../../../store";

interface EmployeeSearchFormProps {
  activeTab?: number;
}

const EmployeeProfileSearch: React.FC<EmployeeSearchFormProps> = ({ activeTab = 0 }) => {
  const dispatch = useDispatch();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const [filters, setFilters] = useState<iFilter>({
    civil_id: "",
    file_no: "",
    name: "",
    phone: "",
    section: "",
  });

  React.useEffect(() => {
    dispatch(setFilter(filters));
  }, [filters]);

  const { t } = useTranslation();
  const lng = useSelector(appLanguageDir);

  return (
    <div className={`columns is-multiline ${lng}` + `${activeTab === 0 ? "" : " is-hidden"}`}>
      <div className="field column">
        <label className="label has-text-primary is-4">{t("name")}</label>
        <div className="control">
          <input className="input" type="text" placeholder={t("name")} name="name" onChange={handleChange} />
        </div>
      </div>
      <div className="field column">
        <label className="label has-text-primary">{t("civil_id")}</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder={t("civil_id")}
            name="civil_id"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field column">
        <label className="label has-text-primary">{t("file_no")}</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="12345"
            name="file_no"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field column">
        <label className="label has-text-primary">{t("phone")}</label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="66666666"
            name="phone"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field column">
        <label className="label has-text-primary">{t("section")}</label>
        <div className="control">
          <input className="input" type="text" name="section" onChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfileSearch;
