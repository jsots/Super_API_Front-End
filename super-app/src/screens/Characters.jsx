import Character from "../components/Character.jsx";
import { useState, useEffect } from "react";
import { getCharacters } from "../services/characters.js";
import Sort, { AZ } from "../components/Sort.jsx";

export default function Characters() {
  const [chars, setChars] = useState([]);
  const [sortOrder, setSortOrder] = useState(undefined);

  const fetchChars = async () => {
    const allChars = await getCharacters();
    setChars(allChars);
  };

  useEffect(() => {
    fetchChars();
  }, []);

  const handleSort = (sortFunc) => {
    // Handle case where sortFunc is undefined
    if (typeof sortFunc === 'function') {
      setSortOrder(sortFunc);
    } else {
      console.error('Invalid sort function:', sortFunc);
    }
  }

  // Handle case where sortOrder is undefined
  const sortedChars = sortOrder ? sortOrder([...chars]) : chars;

  return (
    <div>
      <h1>Celeste Supers!</h1>
      <Sort handleSort={handleSort} sortOrder={sortOrder} chars={chars} />

      <div className="list">
        {sortedChars.map((char) => (
          <Character key={char._id} char={char} />
        ))}
      </div>
    </div>
  );
}
