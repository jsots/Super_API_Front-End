import Character from '../components/Character.jsx';
import { useState, useEffect } from 'react';
import { getCharacters } from '../services/characters.js';
import Filters from './Filters.jsx'


export default function Characters() {
  const [chars, setChars] = useState([])

  const fetchChars = async () => {
    const allChars = await getCharacters()
    setChars(allChars)
  }

  useEffect(() => {
    fetchChars()
    document.body.classList.add("chars")

    return () => {
      document.body.classList.remove("chars")
    }
  }, [])

  return (
    <>
     <h1>Celestial Characters</h1>
      <div className="list">
      {chars.map((char) => (
        <Character key={char._id} char={char} />
        ))}
        </div>
        </>
  )
}
