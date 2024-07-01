import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    const [navBackground, setNavBackground] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 50) {
          setNavBackground(true);
        } else {
          setNavBackground(false);
        }
      };
      
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};

  return (
    <div className={`navbar ${navBackground ? "navbar-scrolled" : ""}`}>
        <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>
            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
      <NavLink to="/" exact className="navlink" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/directorylist" exact className="navlink" activeClassName="active">
        Directory
      </NavLink>
      <NavLink to="/tips" exact className="navlink" activeClassName="active">
        Tips
      </NavLink>
      <NavLink to="/add" exact className="navlink" activeClassName="active">
        Add organisation
      </NavLink>
    </div>
    </div>
  );
}

export default NavBar;