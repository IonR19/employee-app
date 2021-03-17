import React from "react";

const NavbarLogo: React.FC = () => {
  return (
    <div className="navbar-brand">
      <a className="navbar-item" href="#">
        <img
          src="https://www.mew.gov.kw/images/logo3.png"
          // width="112"
          height="28"
        ></img>
      </a>

      <a
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  );
};

export default NavbarLogo;
