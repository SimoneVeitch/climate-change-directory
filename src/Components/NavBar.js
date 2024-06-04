import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/directorylist" exact>
        Directory
      </NavLink>
      <NavLink to="/tips" exact>
        Tips
      </NavLink>
      <NavLink to="/contact" exact>
        Contact
      </NavLink>
    </div>
  );
}

export default NavBar;