import { NavLink } from "react-router-dom";
import { useState } from "react";

const authenticatedOptions = (
  <>
    <NavLink to="/add-character">New Super</NavLink>
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
    <NavLink to="/characters">Supers</NavLink>
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
