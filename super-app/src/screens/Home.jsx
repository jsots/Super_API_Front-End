import React from "react";
import { NavLink } from "react-router-dom";
import "../Home.css";

function Home() {
  const alwaysOptions = (
    <>
      <div className="panel">
        <div className="text top-left">All Supers</div>
        <NavLink className="speech" to="/characters">
          View all the superheroes and supervillains in the multiverse!
        </NavLink>
      </div>
      <div className="panel">
        <div className="text top-left">Meet Celeste</div>
        <NavLink className="speech" to="/Celeste">
          Learn about the founder of Celeste's Supers!
        </NavLink>
      </div>
    </>
  );

  const characterOptions = (
    <>
      <div className="panel">
        <div className="text  bottom-right">Add a Super</div>
        <NavLink className="speech" to="/add-super">
          Create your own superhero or supervillain and add them to the
          multiverse!
        </NavLink>
      </div>
      <div className="panel">
        <div className="text  bottom-right">Featured Characters</div>
        <NavLink className="speech" to="/featured">
          Check out our selection of featured superheroes and supervillains!
        </NavLink>
      </div>
      <div className="panel">
        <div className="text top-left">Search</div>
        <NavLink className="speech" to="/search">
          Find a specific superhero or supervillain using our search tool!
        </NavLink>
      </div>
    </>
  );

  return (
    <div className="comic">
      <h1>Celeste's Supers</h1>
      <div className="panel">
        <div className="text  bottom-right">Welcome to Celeste's Supers!</div>
        <div className="speech">
          Explore our collection of characters, and add your own super to the
          mix. Sign up or sign in to get started!
        </div>
      </div>
      <div className="panel">
        <div className="text  bottom-right">Our Collection</div>
        <div className="speech">
          We have the greatest superheroes and supervillains from all corners of
          the multiverse. Check out our collection of characters below!
        </div>
      </div>
      <div className="panel">
        <div className="text  bottom-right">Characters</div>
        <div className="speech">{characterOptions}</div>
      </div>
      <div className="panel">
        <div className="text  bottom-right">About Us</div>
        <div className="speech">
          Learn more about Celeste's Supers and our mission to bring together
          the greatest superheroes and supervillains in the multiverse.
        </div>
      </div>
      <div className="panel">
        <div className="text bottom-right">Contact Us</div>
        <div className="speech">
          Have a question or feedback? Contact us and let us know!
        </div>
      </div>
      <div className="panel">
        <div className="text  bottom-right">Social Media</div>
        <div className="speech">
          Follow us on social media to stay up-to-date with the latest superhero
          and supervillain news and updates!
        </div>
      </div>
      <div className="panel">
        <div className="text  bottom-right">Join Our Community</div>
        <div className="speech">
          Sign up today to join our community of superhero and supervillain
          fans, and start creating your own characters!
        </div>
      </div>
      <div className="panel">
        <div className="text  bottom-right">Newsletter</div>
        <div className="speech">
          Sign up for our newsletter to receive the latest news and updates
          about Celeste's Supers and the multiverse!
        </div>
      </div>
    </div>
  );
}

export default Home;
