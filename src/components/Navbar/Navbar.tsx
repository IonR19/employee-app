import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarSwitchLang from "./NavbarSwitchLang.comp";
import NavEnd from "./NavEnd";
import NavStart from "./NavStart";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar has-background-white-bis" role="navigation" aria-label="main navigation">
      <NavbarLogo />
      <div id="navbarBasicExample" className="navbar-menu">
        <NavStart />
        <NavEnd />
      </div>
    </nav>
  );
};

export default Navbar;
