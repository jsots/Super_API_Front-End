import Character from '../components/Character.jsx';
import { useState, useEffect } from 'react';
import { getCharacters } from '../services/characters.js';
import { AZ, ZA } from "../utils/sort.js";
import Sort from "../components/Sort.jsx";


export default function Characters() {
  const [chars, setChars] = useState([]);
  const [applySort, setApplySort] = useState(false);
  const [sortType, setSortType] = useState('name-ascending');

  const fetchChars = async () => {
    const allChars = await getCharacters();
    setChars(allChars);
  }

  useEffect(() => {
    fetchChars();
    handleSort("name-ascending"); 
  }, []);

  const handleSort = (type) => {
    if (type !== '' && type !== undefined) {
      setSortType(type)
    }
    switch (type) {
      case 'name-ascending':
        setChars(AZ(chars))
        break
      case 'name-descending':
        setChars(ZA(chars))
        break
      default:
        break
    }
    setApplySort(true)
  }

  const handleSubmit = (event) => event.preventDefault()

  const sortedChars = applySort ? chars : chars.slice().reverse();

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
