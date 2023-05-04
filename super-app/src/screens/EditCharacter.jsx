import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateCharacter, getCharacter } from "../services/characters.js";

export default function EditCat(props) {
  const [character, setCharacter] = useState({
    name: "",
    powerstats: {
      intelligence: "",
      strength: "",
      speed: "",
      durability: "",
      power: "",
      combat: "",
    },
    appearance: {
      gender: "",
    },
    biography: {
      alignment: "",
      publisher: "",
    },
    images: {
      lg: "",
    },
  });

  let navigate = useNavigate();
  let { id } = useParams();

  const fetchCharacter = async () => {
    const oneCharacter = await getCharacter(id);
    setCharacter(oneCharacter);
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCharacter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCharacter(id, character);
    navigate(`/characters/${id}`, { replace: true });
    props.setEdit(false);
  };

  return (
    <div>
      <h1>Edit Character</h1>
      <form onSubmit={handleSubmit}>
        Name:
        <input
          placeholder="Enter name"
          name="name"
          value={character.name}
          onChange={handleChange}
        />
        <br />
        Intelligence:
        <input
          placeholder="Enter intelligence"
          name="intelligence"
          value={character.powerstats.intelligence}
          onChange={handleChange}
        />
        <br />
        Strength:
        <input
          placeholder="Enter strength"
          name="strength"
          value={character.powerstats.strength}
          onChange={handleChange}
        />
        <br />
        Speed:
        <input
          placeholder="Enter speed"
          name="speed"
          value={character.powerstats.speed}
          onChange={handleChange}
        />
        <br />
        Durability:
        <input
          placeholder="Enter durability (0-100)"
          name="durability"
          value={character.powerstats.durability}
          onChange={handleChange}
        />
        <br />
        Power:
        <input
          placeholder="Enter power (0-100)"
          name="power"
          value={character.powerstats.power}
          onChange={handleChange}
        />
        <br />
        Combat:
        <input
          placeholder="Enter combat (0-100)"
          name="combat"
          value={character.powerstats.combat}
          onChange={handleChange}
        />
        <br />
        Gender:
        <input
          placeholder="Enter gender (Male/Female)"
          name="gender"
          value={character.appearance.gender}
          onChange={handleChange}
        />
        <br />
        Alignment:
        <input
          placeholder="Enter alignment (good/bad)"
          name="alignment"
          value={character.biography.alignment}
          onChange={handleChange}
        />
        <br />
        Publisher:
        <input
          placeholder="Publisher (Marvel Comics/DC Comics)"
          name="publisher"
          value={character.biography.publisher}
          onChange={handleChange}
        />
        <br />
        Image URL:
        <input
          placeholder="Enter image URL"
          name="image"
          value={character.images.lg}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit Changes</button>
      </form>
    </div>
  );
}
