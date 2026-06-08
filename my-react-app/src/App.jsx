import './App.css'
import { Routes, Route } from 'react-router'
import Nav from "./components/Nav.jsx"
import Hero from "./components/Hero.jsx"
import Projects from "./components/Projects.jsx"
import Experience from "./components/Experience.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx"

function App() {
  return (
    <>
      <Nav />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<><Hero /><Projects /></>} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>
  );
}

export default App
