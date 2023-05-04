import React from 'react'
import { useEffect } from "react"

function Home() {

  useEffect(() => {

    document.body.classList.add("home")

    return () => {
      document.body.classList.remove("home")
    }
  }, [])


  return (
    <div id="home">
      <h1>Celeste's Supers</h1>
    </div>
  )
}

export default Home;