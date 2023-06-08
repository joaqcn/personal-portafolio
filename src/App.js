import React, { useEffect } from "react";
import AboutMe from "./pages/aboutme";
import Skills from "./pages/skills";
import Projects from "./pages/projects";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".page-section");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the section is in the viewport
        if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
          section.classList.add("animate-fadeIn");
        } else {
          section.classList.remove("animate-fadeIn");
        }
      });
    };

    // Initial check when the page loads
    handleScroll();

    // Check sections on scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="page-section animate-fadeIn">
        <AboutMe />
      </div>
      <div className="page-section animate-fadeIn">
        <Skills />
      </div>
      <div className="page-section animate-fadeIn">
        <Projects />
      </div>
    </div>
  );
}

export default App;
