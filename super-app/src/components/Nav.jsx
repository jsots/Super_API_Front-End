import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/characters">All Supers</NavLink>
      <NavLink to="/add-character">Add Super</NavLink>
      <NavLink to="/Celeste">Meet Celeste</NavLink>
    </nav>
  )
}