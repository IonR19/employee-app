import React from "react";
import { Dropdown, Menu } from "react-bulma-components";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { SectionOptions } from "../../static/StaticOptions";
import { ChangeLanguage } from "../../store/settings";

interface Props {}

const NavbarChangeSettings: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const languageChangeHandler = () => {
    let newLang = "ar";
    if (i18n.language == "ar") {
      newLang = "en";
    }
    dispatch(ChangeLanguage());
    i18n.changeLanguage(newLang);
  };
  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <a className="navbar-link">{t("settings")}</a>

      <div className="navbar-dropdown">
        <a className="navbar-item" onClick={languageChangeHandler}>
          {t("switch_lng")}
        </a>
        <Menu>
          <Menu.List>
            <Menu.List.Item>
              <Dropdown label={t("work_location")}>
                {SectionOptions.map((option) => (
                  <Dropdown.Item value={option.value}>{t(option.title ?? "?")}</Dropdown.Item>
                ))}
              </Dropdown>
            </Menu.List.Item>
          </Menu.List>
        </Menu>
      </div>
    </div>
  );
};

export default NavbarChangeSettings;
