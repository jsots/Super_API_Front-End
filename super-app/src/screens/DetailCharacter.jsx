import { useState, useEffect } from "react";
import EditCharacter from "./EditCharacter.jsx";
import { getCharacter, deleteCharacter } from "../services/characters.js";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function DetailCat() {
  const [character, setCharacter] = useState({});
  const [edit, setEdit] = useState(false);

  let { id } = useParams();
  let navigate = useNavigate();

  const fetchCharacter = async () => {
    const oneCharacter = await getCharacter(id);
    setCharacter(oneCharacter);
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  const handleEdit = () => {
    setEdit(true);
  };

  return (
    <div>
      <h1>{character.name}</h1>
      <div className="charImg">
        {character.images && (
          <img src={character.images.lg} alt={character.name} />
        )}
      </div>
      <div className="detailBtns">
        <button className="detailBtn" onClick={handleEdit}>
          Edit Character
        </button>
        <button
          className="detailBtn"
          onClick={() => {
            deleteCharacter(character._id);
            navigate("/character", { replace: true });
          }}
        >
          Delete Character
        </button>
      </div>
      {edit && <EditCharacter setEdit={setEdit} />}
    </div>
  );
}
