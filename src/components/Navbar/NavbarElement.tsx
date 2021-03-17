import React from "react";
import { Link } from "react-router-dom";

const NavbarElement: React.FC<{ url?: string }> = (props) => {
  return (
    <Link className="navbar-item" to={props.url || "#"}>
      {props.children}
    </Link>
  );
};

export default NavbarElement;
