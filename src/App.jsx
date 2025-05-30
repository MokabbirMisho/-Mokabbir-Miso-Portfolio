import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import useScrollSpy from "./data/useScrollSpy";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const sectionIds = ["home", "skills", "projects", "about", "contact"];
  const activeSection = useScrollSpy(sectionIds);

  return (
    <>
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans ">
        <Navbar active={activeSection} />
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
