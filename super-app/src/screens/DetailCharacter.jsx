import { useState, useEffect } from 'react';
import { getCharacter, deleteCharacter } from '../services/characters.js';
import { useParams, Link, useNavigate } from "react-router-dom";

export default function DetailCat() {
  const [character, setCharacter] = useState({})

  let { id } = useParams()
  let navigate = useNavigate()

  const fetchCharacter = async () => {
    const oneCharacter = await getCharacter(id)
    setCharacter(oneCharacter)
  }

  useEffect(() => {
    fetchCharacter()
  }, [])

  return (
    <div>
      <h1>{character.name}</h1>
      {/* <img src={character.image} alt={character.name} /> */}
      <div>
        <button>
          <Link to={`/characters/${character._id}/edit`}>
          Edit Super
          </Link>
        </button>
        <button onClick={() => {
          deleteCharacter(character._id)
          navigate("/character", {replace: true})
        }}>Delete Super</button>
      </div>
    </div>
  )
}
