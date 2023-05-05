import { useState, useEffect } from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import axios from 'axios';
import Home from "./screens/Home.jsx";
import Nav from "./components/Nav.jsx";
import Filters from './screens/Filters.jsx'
import DetailCharacter from "./screens/DetailCharacter.jsx";
import CreateCharacter from "./screens/CreateCharacter.jsx";
import EditCharacter from "./screens/EditCharacter.jsx";
import Celeste from "./screens/Celeste.jsx";
import SignIn from "./screens/SignIn.jsx";
import SignUp from "./screens/SignUp.jsx";
import SignOut from "./screens/SignOut.jsx";
import { verifyUser } from "./services/users";
import "./App.css";


function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  const handleSignOut = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
    
    return (
      <div>
        <Nav user={user} handleSignOut={handleSignOut} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Filters />} />
          <Route path="/characters/:id" element={<DetailCharacter />} />
          <Route path="/add-character" element={<CreateCharacter />} />
          <Route path="/character/:id/edit" element={<EditCharacter />} />
          <Route path="/Celeste" element={<Celeste />} />
          <Route path="/signin" element={<SignIn onSignIn={setUser} />} />
          <Route path="/signup" element={<SignUp setUser={setUser} />} />
          <Route path="/signout" element={<SignOut setUser={setUser} />} />
        </Routes>
      </div>
    );
}
export default App;
