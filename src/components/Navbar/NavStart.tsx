import React from "react";
import { useTranslation } from "react-i18next";
import NavbarElement from "./NavbarElement";

const NavStart = () => {
  const { t } = useTranslation();
  return (
    <div className="navbar-start">
      <NavbarElement url="/">{t("search")}</NavbarElement>
      <NavbarElement url="/add">{t("add")}</NavbarElement>
      <NavbarElement url="/orders">{t("orders")}</NavbarElement>
      <NavbarElement url="/vacations">{t("vacations")}</NavbarElement>
    </div>
  );
};

export default NavStart;
