import React, { useRef } from "react";

function FavoriteTeam(props) {
  const { favoriteTeam, setFavoriteTeam } = props;

  const favoriteTeamRef = useRef(null);

  const handleRemoveCharacter = (character) => {
    setFavoriteTeam(favoriteTeam.filter((c) => c._id !== character._id));
  };
  
  return (
    <div ref={favoriteTeamRef}>
      <h2>Favorite Team</h2>
      {favoriteTeam && favoriteTeam.length > 0 ? (
        favoriteTeam.map((character) => (
          <div key={character._id}>
            <img src={character.images.sm} alt={character.name} />
            <div>{character.name}</div>
            <button onClick={() => handleRemoveCharacter(character)}>Remove</button>
          </div>
        ))
      ) : (
        <div>No characters to display</div>
      )}
    </div>
  );
}

export default FavoriteTeam;
