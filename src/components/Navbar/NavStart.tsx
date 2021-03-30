import React from "react";
import NavbarElement from "./NavbarElement";
const NavStart = () => {
  return (
    <div className="navbar-start">
      <NavbarElement url="/">View</NavbarElement>
      <NavbarElement url="/add">Add</NavbarElement>
      <NavbarElement url="/vacations">Vacations</NavbarElement>
    </div>
  );
};

export default NavStart;
