import React from "react";
import "./App.css";
import AboutMe from "./pages/aboutme";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import backgroundPic from "../src/assets/background.jpg";

function App() {
  return (
    <div className="relative h-screen">
      <AboutMe />
      <Skills />
      <Projects />
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${backgroundPic})`, opacity:0.4 }}></div>
    </div>
  );
}

export default App;
