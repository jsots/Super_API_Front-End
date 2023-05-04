import { NavLink } from "react-router-dom";
// import SignOut from '../screens/SignOut';
import { useState } from "react";

const authenticatedOptions = (
  <>
    <NavLink to="/add-character">Add Super</NavLink>
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
    <NavLink to="/characters">All Supers</NavLink>
    <NavLink to="/Celeste">Meet Celeste</NavLink>
  </>
);

export default function Nav(props) {
  const { user, setUser } = props;
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav">
        <div className="links">
          {user && <div className="link welcome">Welcome, {user.username}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  );
}
