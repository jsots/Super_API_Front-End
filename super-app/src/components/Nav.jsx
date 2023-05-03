import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/characters">Characters</NavLink>
      <NavLink to="/add-character">New Character</NavLink>
      <NavLink to="/Celeste">Meet Celeste</NavLink>
    </nav>
  )
}