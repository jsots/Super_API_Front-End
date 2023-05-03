import { NavLink } from 'react-router-dom';
// import SignOut from '../screens/SignOut';
import { useState } from 'react';

export default function Nav(props) {
  const { user, setUser } = props;
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/characters">All Supers</NavLink>
      <NavLink to="/add-character">Add Super</NavLink>
      <NavLink to="/Celeste">Meet Celeste</NavLink>
      <NavLink to="/signin">Sign In</NavLink>
      {user ? null : <NavLink to="/signup">Sign Up</NavLink>}
      <NavLink to="/signout">Sign Out</NavLink>
    </nav>
  );
}
