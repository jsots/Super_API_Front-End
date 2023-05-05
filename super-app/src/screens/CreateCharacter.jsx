import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { createCharacter } from '../services/characters.js';

export default function CreateCharacter() {
  const [character, setCharacter] = useState({
    name: "",
    powerstats: {
        intelligence: "",
        strength: "",
        speed: "",
        durability: "",
        power: "",
        combat: ""
    },
    appearance: {
        gender: ""
    },
    biography: {
        alignment: "",
        publisher: ""
    },
    images: {
        lg: ""
    }
  })

  let navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target

    setCharacter((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createCharacter(character)
    navigate("/characters", {replace: true})
  }

  return (
    <div>
      <h1>Create a Super</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your Super's name"
          name="name"
          value={character.name}
          onChange={handleChange}
        />
        <br/>
        <input
          placeholder="Enter your Super's intelligence"
          name="intelligence"
          value={character.powerstats.intelligence}
          onChange={handleChange}
        />
        <br/>
        <input
          placeholder="Enter your Super's strength"
          name="strength"
          value={character.powerstats.strength}
          onChange={handleChange}
        />
        <br/>
        <input
          placeholder="Enter your Super's speed"
          name="speed"
          value={character.powerstats.speed}
          onChange={handleChange}
        />
        <br/>
        <input
          placeholder="Enter your Super's durability"
          name="durability"
          value={character.powerstats.durability}
          onChange={handleChange}
        />
        <br/>
        <input
          placeholder="Enter your Super's power"
          name="power"
          value={character.powerstats.power}
          onChange={handleChange}
        />
        <br/>
        <input
          placeholder="Enter your Super's combat"
          name="combat"
          value={character.powerstats.combat}
          onChange={handleChange}
        />
        <br/>
        <input
          placeholder="Enter your Super's gender"
          name="gender"
          value={character.appearance.gender}
          onChange={handleChange}
        />
        <br/>
        <input
          placeholder="Enter your Super's alignment"
          name="alignment"
          value={character.biography.alignment}
          onChange={handleChange}
        />
        <br/>
        <input
          placeholder="Enter your Super's publisher"
          name="publisher"
          value={character.biography.publisher}
          onChange={handleChange}
        />
        <br/>
        <input
          placeholder="Enter your Super's image"
          name="image"
          value={character.images.lg}
          onChange={handleChange}
        />
        <br/>
        <button type="submit">Make Your Super</button>
      </form>
    </div>
  )
}
