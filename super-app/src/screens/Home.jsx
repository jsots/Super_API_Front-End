import React from 'react';
import { NavLink } from "react-router-dom";
import '../Home.css';

function Home() {
  const alwaysOptions = (
    <>
      <NavLink className="nav-link" to="/characters">All Supers</NavLink>
      <NavLink className="nav-link" to="/Celeste">Meet Celeste</NavLink>
    </>
  );

  return (
    <div>
      <h1>Celeste's Supers</h1>
      <p>Welcome to Celeste's Supers, the home of the greatest superheroes and supervillains in the multiverse!</p>
      <p>Explore our collection of characters, and add your own super to the mix.</p>
      <p>Sign up or sign in to get started!</p>
      <div className="nav-container">
        {alwaysOptions}
      </div>
    </div>
  );
}

export default Home;
