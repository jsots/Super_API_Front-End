import React, { useState, useEffect } from "react";
import axios from "axios";
import heroesData from "./superheroes.json";

export default function Filters() {
  const [heroes, setHeroes] = useState([]);
  const [filter, setFilter] = useState([]);
  const [powerstatsFilter, setPowerstatsFilter] = useState({
    intelligence: "",
    strength: "",
    speed: "",
    durability: "",
    power: "",
    combat: "",
  });

  useEffect(() => {
    setHeroes(heroesData);
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

  const filteredHeroes = heroes.filter((hero) => {
    const { alignment, gender, publisher } = filter;
    if (
      (alignment && hero.biography.alignment !== alignment) ||
      (gender && hero.appearance.gender !== gender) ||
      (publisher && hero.biography.publisher !== publisher)
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
      (intelligenceFilter === "less" && hero.powerstats.intelligence >= 50) ||
      (intelligenceFilter === "greater" && hero.powerstats.intelligence < 50) ||
      (strengthFilter === "less" && hero.powerstats.strength >= 50) ||
      (strengthFilter === "greater" && hero.powerstats.strength < 50) ||
      (speedFilter === "less" && hero.powerstats.speed >= 50) ||
      (speedFilter === "greater" && hero.powerstats.speed < 50) ||
      (durabilityFilter === "less" && hero.powerstats.durability >= 50) ||
      (durabilityFilter === "greater" && hero.powerstats.durability < 50) ||
      (powerFilter === "less" && hero.powerstats.power >= 50) ||
      (powerFilter === "greater" && hero.powerstats.power < 50) ||
      (combatFilter === "less" && hero.powerstats.combat >= 50) ||
      (combatFilter === "greater" && hero.powerstats.combat < 50)
    ) {
      return false;
    }

    return true;
  });

  const handleHeroClick = (heroId) => {
    setHeroes(prevHeroes => {
      const heroIndex = prevHeroes.findIndex(hero => hero.id === heroId);
      const updatedHero = {...prevHeroes[heroIndex], selected: true};
      return [
        ...prevHeroes.slice(0, heroIndex),
        updatedHero,
        ...prevHeroes.slice(heroIndex + 1),
      ];
    });
  };

  return (
    <>
      <div>
        <h1>Superheroes</h1>
        <form>
          <label>
            Alignment:
            <select
              name="alignment"
              value={filter.alignment}
              onChange={handleFilterChange}
            >
              <option value=""></option>
              <option value="good">Good</option>
              <option value="bad">Bad</option>
            </select>
          </label>
          <br />
          <label>
            Gender:
            <select
              name="appearance.gender"
              value={filter.appearance?.gender}
              onChange={handleFilterChange}
            >
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <br />
          <label>
            Publisher:
            <select
              name="publisher"
              value={filter.publisher}
              onChange={handleFilterChange}
            >
              <option value=""></option>
              <option value="DC Comics">DC Comics</option>
              <option value="Marvel Comics">Marvel Comics</option>
            </select>
          </label>
          <br />
          <label>
            Powerstats:
            <br />
            Intelligence:
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
      <ul>
        {filteredHeroes.length > 0 ? (
          filteredHeroes.map((hero) => (
            <div key={hero.id} onClick={() => handleHeroClick(hero.id)}>
              {hero.name}
            </div>
          ))
        ) : (
          <div>No heroes found</div>
        )}
      </ul>
    </>
  );
}
