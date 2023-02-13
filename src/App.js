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
      <Navbar/>
    </div>
  );
}

export default App;
