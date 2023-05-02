import Home from "./screens/Home.jsx";
import Nav from "./components/Nav.jsx";
import Characters from "./screens/Characters.jsx";
import DetailCharacter from "./screens/DetailCharacter.jsx";
import CreateCharacter from "./screens/CreateCharacter.jsx";
import EditCharacter from "./screens/EditCharacter.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Celeste from "./screens/Celeste.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./screens/SignIn.jsx";
import SignUp from "./screens/SignUp.jsx";

function App() {
  return (
    <div>
      <Nav />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<DetailCharacter />} />
        <Route path="/add-character" element={<CreateCharacter />} />
        <Route path="/character/:id/edit" element={<EditCharacter />} />
        <Route path="/Celeste" element={<Celeste />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
