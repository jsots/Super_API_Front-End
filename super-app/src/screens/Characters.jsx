import Character from '../components/Character.jsx';
import { useState, useEffect } from 'react';
import { getCharacters } from '../services/characters.js';
import { AZ, ZA } from "../utils/sort.js";
import Sort from "../components/Sort.jsx";


export default function Characters() {
  const [chars, setChars] = useState([]);
  const [sortType, setSortType] = useState('name-ascending'); 

  const fetchChars = async () => {
    const allChars = await getCharacters();
    setChars(allChars);
  }

  useEffect(() => {
    fetchChars();
  }, []);

  const handleSort = (type) => {
    setSortType(type);
  
    switch (type) {
      case 'name-ascending':
        setChars(AZ(chars));
        break;
      case 'name-descending':
        setChars(ZA(chars));
        break;
      default:
        break;
    }
  };
  
  const handleSubmit = (event) => event.preventDefault()
  
  const sortedChars = chars.slice().sort((a, b) => {
    if (sortType === 'name-ascending') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
  

  return (
    <div>
      <h1>Celeste Supers!</h1>
      <Sort onSubmit={handleSubmit} handleSort={handleSort} />
      <div className="list">
        {sortedChars.map((char) => (
          <Character key={char._id} char={char} />
        ))}
      </div>
    </div>
  );
}
