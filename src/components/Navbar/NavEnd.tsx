import React from "react";
import { Dropdown, Icon, Navbar } from "react-bulma-components";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { SectionOptions } from "../../static/StaticOptions";
import { setSite, useTypedSelector } from "../../store";
import NavbarChangeSettings from "./NavbarChangeSettings.comp";

const NavEnd: React.FC = () => {
  const dispatch = useDispatch();
  const site = useTypedSelector((s) => s.employees.site);
  const { t } = useTranslation();

  return (
    <div className="navbar-end">
      <Navbar.Item>
        <Dropdown
          icon={
            <Icon>
              <i aria-hidden="true" className="fas fa-angle-down" />
            </Icon>
          }
          label={t("work_location")}
          value={site}
          onChange={(e: string) => dispatch(setSite(e))}
        >
          {SectionOptions.map((option, i) => (
            <Dropdown.Item renderAs="a" key={i} value={option.value}>
              {t(option.title ?? "?")}
            </Dropdown.Item>
          ))}
          <Dropdown.Item renderAs="a" value={undefined}>
            {t("all")}
          </Dropdown.Item>
        </Dropdown>
      </Navbar.Item>
      <NavbarChangeSettings />
      {/* <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light">Log in</a>
        </div>
      </div> */}
    </div>
  );
};

export default NavEnd;
