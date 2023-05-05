import { useState, useEffect } from "react";

export default function DreamTeam({ user }) {
  const [dreamTeam, setDreamTeam] = useState([]);

  // Load user's dream team from local storage on component mount
  useEffect(() => {
    const savedDreamTeam = JSON.parse(localStorage.getItem(`dreamTeam-${user.username}`));
    if (savedDreamTeam) {
      setDreamTeam(savedDreamTeam);
    }
  }, [user]);

  // Save updated dream team to local storage on change
  useEffect(() => {
    localStorage.setItem(`dreamTeam-${user.username}`, JSON.stringify(dreamTeam));
  }, [dreamTeam, user]);

  const removeFromDreamTeam = (id) => {
    setDreamTeam((prevState) => prevState.filter((char) => char._id !== id));
  };

  return (
    <div>
      <h2>Dream Team</h2>
      <ul>
        {dreamTeam.map((char) => (
          <li key={char._id}>
            {char.name}{" "}
            <button onClick={() => removeFromDreamTeam(char._id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
