import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import AboutMe from "./pages/aboutme";
import Skills from "./pages/skills";
import Projects from "./pages/projects";

function App() {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route exact path="/" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
