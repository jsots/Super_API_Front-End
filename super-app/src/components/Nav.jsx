import { NavLink } from 'react-router-dom';
import SignIn from '../screens/SignIn';
import { signIn } from '../services/users';
import { useState } from 'react';


export default function Nav(props) {
  const { setUser } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  const onSignIn = async (formData) => {
    try {
      const user = await signIn(formData);
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/characters">All Supers</NavLink>
      <NavLink to="/add-character">Add Super</NavLink>
      <NavLink to="/Celeste">Meet Celeste</NavLink>
      <SignIn onSignIn={onSignIn} />
      <NavLink to="/signup">Sign Up</NavLink>
    </nav>
  );
}
