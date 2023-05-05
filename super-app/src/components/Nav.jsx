import { NavLink } from "react-router-dom";
import { useState } from "react";

function Nav(props) {
  const { user, setUser } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  const authenticatedOptions = (
    <>
      <NavLink to="/add-character">New Character</NavLink>
      <NavLink className="link" to="/signout">
        Sign Out
      </NavLink>
    </>
  );

  const unauthenticatedOptions = (
    <>
      <NavLink className="link" to="/signup">
        Sign Up
      </NavLink>
      <NavLink className="link" to="/signin">
        Sign In
      </NavLink>
    </>
  );
  const alwaysOptions = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/filters">Characters</NavLink>
      <NavLink to="/Celeste">Meet Celeste</NavLink>
    </>
  );

  return (
    <nav>
      <div className="nav">
        <div className="links">
          {user && <div className="link welcome">Welcome, {user.username}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
        <div className="navbar__mobile">
          <div
            className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`navbar__menu ${menuOpen ? "open" : ""}`}>
            {alwaysOptions}
            {user ? authenticatedOptions : unauthenticatedOptions}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
