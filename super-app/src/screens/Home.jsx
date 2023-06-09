import React from "react";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.body.classList.add("home");

    return () => {
      document.body.classList.remove("home");
    };
  }, []);
}

export default Home;
