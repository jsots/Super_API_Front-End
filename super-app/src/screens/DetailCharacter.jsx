import { useState, useEffect } from 'react';
import EditCharacter from "./EditCharacter.jsx"
import { getCharacter, deleteCharacter } from '../services/characters.js';
import { useParams, Link, useNavigate } from "react-router-dom";

export default function DetailCat() {
  const [character, setCharacter] = useState({})
  const [edit, setEdit] = useState(false)

  let { id } = useParams()
  let navigate = useNavigate()

  const fetchCharacter = async () => {
    const oneCharacter = await getCharacter(id)
    setCharacter(oneCharacter)
  }

  useEffect(() => {
    fetchCharacter()
  }, [])

  const handleEdit = () => {
    setEdit(true)
  }

  return (
    <>
      <h1 className="header">{character.name}</h1>
      <div className="charImg">
        {character.images && <img src={character.images.lg} alt={character.name} />}
        </div>
        <span>
        <button onClick= {handleEdit}>
          Edit Super
        </button>
        <button onClick={() => {
          deleteCharacter(character._id)
          navigate("/characters", {replace: true})
        }}>Delete Super</button>
        </span>
      {edit && <EditCharacter setEdit={setEdit} />}
    </>
  )
}
