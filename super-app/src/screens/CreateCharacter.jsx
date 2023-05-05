import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCharacter } from "../services/characters.js";

export default function CreateCharacter() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCharacter((prev) => ({
      ...prev,
      powerstats: {
        ...prev.powerstats,
        [name]: value
      },
      appearance: {
        ...prev.appearance,
        [name]: value
      },
      biography: {
        ...prev.biography,
        [name]: value
      },
      images: {
        ...prev.images,
        [name]: value
      },
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCharacter(character);
    navigate("/characters", { replace: true });
  };

  return (
    <div>
      <h1>Create a Super</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your character's name"
          name="name"
          value={character.name}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Enter intelligence (0-100)"
          name="intelligence"
          value={character.powerstats.intelligence}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Enter strength (0-100)"
          name="strength"
          value={character.powerstats.strength}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Enter speed (0-100)"
          name="speed"
          value={character.powerstats.speed}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Enter durability (0-100)"
          name="durability"
          value={character.powerstats.durability}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Enter power (0-100)"
          name="power"
          value={character.powerstats.power}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Enter combat (0-100)"
          name="combat"
          value={character.powerstats.combat}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Enter gender (Male/Female)"
          name="gender"
          value={character.appearance.gender}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Enter alignment (good/bad)"
          name="alignment"
          value={character.biography.alignment}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Enter publisher (Marvel Comics/DC Comics)"
          name="publisher"
          value={character.biography.publisher}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Enter image URL"
          name="images"
          value={character.images.lg}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Create!</button>
      </form>
    </div>
  );
}
