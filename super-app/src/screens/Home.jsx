import React from "react";
import Characters from "./Characters";
import "./Home.css";

function Home() {
  return (
    <div>
      <h1>Celestial Characters</h1>
      <article className="comic">
  <div className="panel">
    <p className="text bottom-right"><a href="/characters">Characters</a></p>
  </div>
  <div className="panel">
    <p className="text top-left">Try resizing...</p>
    <p className="text bottom-right">...it's responsive</p>
  </div>
  <div className="panel">
  </div>
  <div className="panel"></div>
  <div className="panel"></div>
    <p className="text top-left"></p>
  <div className="panel"></div>
  <div className="panel">
    <p className="speech">A speech bubble</p></div>
  <div className="panel"></div>
  <div className="panel">
    <p className="text bottom-right">THE END</p>
  </div>
</article>
    </div>
  );
}

export default Home;
