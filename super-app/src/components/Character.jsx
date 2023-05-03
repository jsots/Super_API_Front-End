import { Link } from "react-router-dom";

export default function Character({char}) {
    
    // if(char.images) console.log(char.images.sm)
  return (
    <div>
      <Link to={`/characters/${char._id}`}>
       {char.images && <img className="charImg" src={char.images.lg} alt={char.name} />} 
      </Link>
    </div>
  )
}
