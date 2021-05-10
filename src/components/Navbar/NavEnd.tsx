import React from "react";
import NavbarChangeSettings from "./NavbarChangeSettings.comp";

const NavEnd: React.FC = () => {
  return (
    <div className="navbar-end">
      <NavbarChangeSettings />
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light">Log in</a>
        </div>
      </div>
    </div>
  );
};

export default NavEnd;
