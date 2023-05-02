import { Link } from "react-router-dom";

export default function Character({char}) {
    
    // if(char.images) console.log(char.images.sm)
  return (
    <div>
      <Link to={`/characters/${char._id}`}>
       {char.images && <img className="char-image" src={char.images.sm} alt={char.name} />} 
      </Link>
    </div>
  )
}
