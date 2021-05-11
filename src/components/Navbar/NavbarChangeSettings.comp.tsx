import React from "react";
import { Dropdown, Icon, Menu } from "react-bulma-components";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { SectionOptions } from "../../static/StaticOptions";
import { setSite } from "../../store";
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
              <Dropdown
                icon={
                  <Icon>
                    <i aria-hidden="true" className="fas fa-angle-down" />
                  </Icon>
                }
                label={t("work_location")}
                onChange={(e: string) => dispatch(setSite(e))}
              >
                {SectionOptions.map((option, i) => (
                  <Dropdown.Item key={i} renderAs="a" value={option.value}>
                    {t(option.title ?? "?")}
                  </Dropdown.Item>
                ))}
                <Dropdown.Item value={null}>{t("all")}</Dropdown.Item>
              </Dropdown>
            </Menu.List.Item>
          </Menu.List>
        </Menu>
      </div>
    </div>
  );
};

export default NavbarChangeSettings;
