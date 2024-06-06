import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    const [navBackground, setNavBackground] = useState(false);
    

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${navBackground ? "navbar-scrolled" : ""}`}>
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