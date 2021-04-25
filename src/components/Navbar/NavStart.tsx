import React from "react";
import NavbarElement from "./NavbarElement";
const NavStart = () => {
  return (
    <div className="navbar-start">
      <NavbarElement url="/">Search</NavbarElement>
      <NavbarElement url="/add">Add</NavbarElement>
      <NavbarElement url="/orders">Orders</NavbarElement>
      <NavbarElement url="/vacations">Vacations</NavbarElement>
    </div>
  );
};

export default NavStart;
