import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { ChangeLanguage } from "../../store/settings";

interface Props {}

const NavbarSwitchLang: React.FC<Props> = (props) => {
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
      </div>
    </div>
  );
};

export default NavbarSwitchLang;
