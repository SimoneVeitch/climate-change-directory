import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <div className="navbar">
      <NavLink to="/" exact className="navlink" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/directorylist" exact className="navlink" activeClassName="active">
        Directory
      </NavLink>
      <NavLink to="/tips" exact className="navlink" activeClassName="active">
        Tips
      </NavLink>
      <NavLink to="/contact" exact className="navlink" activeClassName="active">
        Contact
      </NavLink>
    </div>
  );
}

export default NavBar;