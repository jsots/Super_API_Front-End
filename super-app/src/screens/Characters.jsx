import Character from '../components/Character.jsx';
import { useState, useEffect } from 'react';
import { getCharacters } from '../services/characters.js';


export default function Characters() {
  const [chars, setChars] = useState([])

  const fetchChars = async () => {
    const allChars = await getCharacters()
    setChars(allChars)
  }

  useEffect(() => {
    fetchChars()
  }, [])

  return (
    <div>
      <h1>Celeste's Super!!!! What do they look like??? Its a surpsrise</h1>
      {chars.map((char) => (
        <Character key={char._id} char={char} />
      ))}
    </div>
  )
}
