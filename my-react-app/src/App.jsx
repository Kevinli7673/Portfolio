import { useState } from 'react'
import './App.css'
import Nav from "./components/Nav.jsx"
import Hero from "./components/Hero.jsx"
import Projects from "./components/Projects.jsx"

function App() {
  return( 
      <>
          <Nav/>
          <Hero/>
          <Projects/>
      </>
  );
}

export default App
