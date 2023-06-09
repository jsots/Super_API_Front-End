import {Link} from "react-router-dom"
import lissa from "../images/Lissa.jpg"
import Agustines from "../images/Agustines.jpeg"
import Miguel from "../images/mcjobs.jpeg"
// import jacky from "../images/jacky"

function Celeste() {
  return (
    <div>
      <h1> Meet the team! </h1>

      <div>
        <p>Justin Sotolongo</p>
        <img src="https://media.licdn.com/dms/image/C4E03AQGnDeZaX0A7sA/profile-displayphoto-shrink_400_400/0/1581538564313?e=1688601600&v=beta&t=ZEa_XGxw1cPGS5rVstc3ayUsvzTVMzD0DTTOzwvTtI4" width="200" height="200"></img>
        <p>Hero Name: Agentgay</p>
        <p>Fav Hero : Raven</p>
        <p>Powerstats</p>
        <ul>
          <li>Intelligence:60</li>
          <li>Strength:10</li>
          <li>Speed:20</li>
          <li>Durability:20</li>
          <li>Power:5</li>
          <li>Combat:0</li>
        </ul>
        <Link to="https://github.com/jsots">link to github</Link>
        <p>work: code czar </p>
      </div>

      <div>
        <p>Lissa Warshaw</p>
        <img src={lissa} width="200" height="200"></img>
        <p>Hero Name : Luminous Lissa</p>
        <p>Fav Hero : Andy Cohen</p>
        <p>Powerstats</p>
        <ul>
          <li>Intelligence:40</li>
          <li>Strength:80</li>
          <li>Speed:24</li>
          <li>Durability:50</li>
          <li>Power:100</li>
          <li>Combat:10</li>
        </ul>
        <Link to="https://github.com/lissashea">link to my github</Link>
        <p>Work: GA Software Engineer Student </p>
      </div>

      <div>
        <p>Jacquelyn Caputo</p>
        <img src="https://ca.slack-edge.com/T0351JZQ0-U04NXM05U78-a60f345679c3-512" width="200" height="200"></img>
        <p>Heroname : Ashwaganda</p>
        <p>Favhero : Star Fire</p>
        <p>Powerstats</p>
        <ul>
          <li>Intelligence: 45</li>
          <li>Strength: 55</li>
          <li>Speed: 20</li>
          <li>Durability: 62</li>
          <li>Power: 80</li>
          <li>Combat: 77</li>
        </ul>
        <Link to="https://github.com/professrx/">link to my github</Link>
        <p>work: Veterinarian </p>
      </div>

      <div>
        <p>Michael Christenson</p>
        <img src={Miguel} width="200" height="200"></img>
        <p>Hank Chinaski</p>
        <p>Favhero</p>
        <p>Powerstats</p>
        <ul>
          <li>Intelligence: 95</li>
          <li>Strength: 2</li>
          <li>Speed: 2 </li>
          <li>Durability: 5</li>
          <li>Power: 2 </li>
          <li>Combat:25</li>
        </ul>
        <Link to="https://github.com/mcchris1">link to my github</Link>
        <p>work: D-Girl/Group Inclusion Specialist</p>
      </div>

      <div>
        <p>Agustines Sudibya</p>
        <img src={Agustines} width="200" height="200"></img>
        <p>Simu Liu,</p>
        <p>Shang-Chi</p>
        <p>Powerstats</p>
        <ul>
          <li>Intelligence: 77</li>
          <li>Strength: 90</li>
          <li>Speed: 20</li>
          <li>Durability: 70</li>
          <li>Power: 50</li>
          <li>Combat: 99</li>
        </ul>
        <Link to="https://github.com/ksudibya">link to my github</Link>
        <p>work: Software Engineer</p>
      </div>
    </div>
  );
}

export default Celeste;
