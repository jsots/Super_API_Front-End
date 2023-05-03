import React from "react";
import Character from './Character';

const Sort = (props) => {
  const handleSort = (event) => {
    if (event.target.value === "name-ascending") {
      props.handleSort(props.AZ);
    } else if (event.target.value === "name-descending") {
      props.handleSort(props.ZA);
    }
  };

  const sortedChars = props.sortOrder ? props.sortOrder([...props.chars]) : props.chars;

  return (
    <form className="sort-container" onSubmit={props.handleSubmit}>
      <label htmlFor="sort">SORT BY:</label>
      <select className="sort" onChange={handleSort}>
        <option className="option" value="name-ascending">
          &nbsp; Alphabetically, A-Z &nbsp;
        </option>
        <option value="name-descending">&nbsp; Alphabetically, Z-A &nbsp;</option>
      </select>
      <div className="list">
        {sortedChars.map((char) => (
          <Character key={char._id} char={char} />
        ))}
      </div>
    </form>
  );
};

export default Sort;

export const AZ = (arr) => {
  return arr.sort((a, b) => a.name.localeCompare(b.name));
};

export const ZA = (arr) => {
  return arr.sort((a, b) => b.name.localeCompare(a.name));
};
