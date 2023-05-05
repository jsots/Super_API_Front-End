import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { updateCharacter, getCharacter } from '../services/characters.js';

export default function EditCat(props) {
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
  let { id } = useParams()

  const fetchCharacter = async () => {
    const oneCharacter = await getCharacter(id)
    setCharacter(oneCharacter)
  }

  useEffect(() => {
    fetchCharacter()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target

    setCharacter((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateCharacter(id, character)
    navigate(`/characters/${id}`, {replace: true})
    props.setEdit(false)
  }

  return (
    <div>
      <h1>Edit the Super</h1>
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
        <button type="submit">Submit Changes</button>
      </form>
    </div>
  )
}