import React, { useState, useEffect } from "react";
import { getCharacters } from "../services/characters.js";
import Character from "../components/Character.jsx";
import { AZ, ZA } from "../utils/sort.js";
import Sort from "../components/Sort.jsx";

export default function Filters() {
  const [chars, setChars] = useState([]);
  const [filter, setFilter] = useState([]);
  const [sortType, setSortType] = useState("");
  const [powerstatsFilter, setPowerstatsFilter] = useState({
    intelligence: "",
    strength: "",
    speed: "",
    durability: "",
    power: "",
    combat: "",
  });

  const fetchChars = async () => {
    const allChars = await getCharacters();
    setChars(allChars);
  };

  useEffect(() => {
    fetchChars();
  }, []);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    if (
      name === "intelligence" ||
      name === "strength" ||
      name === "speed" ||
      name === "durability" ||
      name === "power" ||
      name === "combat"
    ) {
      setPowerstatsFilter((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      setFilter((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSort = (type) => {
    setSortType(type);

    switch (type) {
      case "name-ascending":
        setChars(AZ(chars));
        break;
      case "name-descending":
        setChars(ZA(chars));
        break;
      default:
        break;
    }
  };

  const sortedChars = chars.slice().sort((a, b) => {
    if (sortType === "name-ascending") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  const handleSubmit = (event) => event.preventDefault();

  const filteredChars = chars.filter((char) => {
    const { gender, alignment, publisher } = filter;

    if (
      (gender && char.appearance.gender !== gender) ||
      (alignment && char.biography.alignment !== alignment) ||
      (publisher && char.biography.publisher !== publisher)
    ) {
      return false;
    }

    const {
      intelligence: intelligenceFilter,
      strength: strengthFilter,
      speed: speedFilter,
      durability: durabilityFilter,
      power: powerFilter,
      combat: combatFilter,
    } = powerstatsFilter;
    if (
      (intelligenceFilter === "less" && char.powerstats.intelligence >= 50) ||
      (intelligenceFilter === "greater" && char.powerstats.intelligence < 50) ||
      (strengthFilter === "less" && char.powerstats.strength >= 50) ||
      (strengthFilter === "greater" && char.powerstats.strength < 50) ||
      (speedFilter === "less" && char.powerstats.speed >= 50) ||
      (speedFilter === "greater" && char.powerstats.speed < 50) ||
      (durabilityFilter === "less" && char.powerstats.durability >= 50) ||
      (durabilityFilter === "greater" && char.powerstats.durability < 50) ||
      (powerFilter === "less" && char.powerstats.power >= 50) ||
      (powerFilter === "greater" && char.powerstats.power < 50) ||
      (combatFilter === "less" && char.powerstats.combat >= 50) ||
      (combatFilter === "greater" && char.powerstats.combat < 50)
    ) {
      return false;
    }

    return true;
  });

  // const handleCharClick = (heroId) => {
  //   setChars(prevChars => {
  //     const heroIndex = prevChars.findIndex(char => char._id === heroId);
  //     const updatedChar = {...prevChars[heroIndex], selected: true};
  //     return [
  //       ...prevChars.slice(0, heroIndex),
  //       updatedChar,
  //       ...prevChars.slice(heroIndex + 1),
  //     ];
  //   });
  // };

  return (
    <>
      <container className="container">
        <div className="bob">
          <div className="filterOpts">
            <form className="form">
              <Sort onSubmit={handleSubmit} handleSort={handleSort} />

              <h4>Filters:</h4>
              <label>
                <select
                  name="alignment"
                  value={filter.alignment}
                  onChange={handleFilterChange}
                >
                  <option value="">Alignment</option>
                  <option value="good">Good</option>
                  <option value="bad">Bad</option>
                </select>
              </label>
              <br />
              <label>
                <select
                  name="gender"
                  value={filter.appearance?.gender}
                  onChange={handleFilterChange}
                >
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </label>
              <br />
              <label>
                <select
                  name="publisher"
                  value={filter.publisher}
                  onChange={handleFilterChange}
                >
                  <option value="">Publisher</option>
                  <option value="DC Comics">DC Comics</option>
                  <option value="Marvel Comics">Marvel Comics</option>
                </select>
              </label>
              <br />
              <label>
                <h4>Powerstats:</h4>
                Intelligence:
                <br />
                <select
                  name="intelligence"
                  value={powerstatsFilter.intelligence}
                  onChange={handleFilterChange}
                >
                  <option value=""></option>
                  <option value="less">Less than 50</option>
                  <option value="greater">Greater than or equal to 50</option>
                </select>
                <br />
                Strength:
                <br />
                <select
                  name="strength"
                  value={powerstatsFilter.strength}
                  onChange={handleFilterChange}
                >
                  <option value=""></option>
                  <option value="less">Less than 50</option>
                  <option value="greater">Greater than or equal to 50</option>
                </select>
                <br />
                Speed:
                <br />
                <select
                  name="speed"
                  value={powerstatsFilter.speed}
                  onChange={handleFilterChange}
                >
                  <option value=""></option>
                  <option value="less">Less than 50</option>
                  <option value="greater">Greater than or equal to 50</option>
                </select>
                <br />
                Durability:
                <br />
                <select
                  name="durability"
                  value={powerstatsFilter.durability}
                  onChange={handleFilterChange}
                >
                  <option value=""></option>
                  <option value="less">Less than 50</option>
                  <option value="greater">Greater than or equal to 50</option>
                </select>
                <br />
                Power:
                <br />
                <select
                  name="power"
                  value={powerstatsFilter.power}
                  onChange={handleFilterChange}
                >
                  <option value=""></option>
                  <option value="less">Less than 50</option>
                  <option value="greater">Greater than or equal to 50</option>
                </select>
                <br />
                Combat:
                <br />
                <select
                  name="combat"
                  value={powerstatsFilter.combat}
                  onChange={handleFilterChange}
                >
                  <option value=""></option>
                  <option value="less">Less than 50</option>
                  <option value="greater">Greater than or equal to 50</option>
                </select>
              </label>
            </form>
          </div>
        </div>
        <div className="list">
          {filteredChars.length > 0 ? (
            filteredChars.map((char) => (
              <div className="characterList">
                <Character key={char._id} char={char} />
                <p>{char.name}</p>
              </div>
            ))
          ) : (
            <div>No characters found</div>
          )}
        </div>
      </container>
    </>
  );
}
