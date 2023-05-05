import React from "react";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.body.classList.add("home");

    return () => {

      document.body.classList.remove("home")
    };
  }, []);

  return (
    <>
      <h1 id="home">Celeste's Supers!</h1>
    </>
  )
}


export default Home;
