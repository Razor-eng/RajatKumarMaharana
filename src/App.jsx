import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import ProjectDetails from "./Pages/ProjectDetails"
import Projects from "./Pages/Projects"
import Skills from "./Pages/Skills"
import Contacts from "./Pages/Contacts"
import SkillDetails from "./Pages/SkillDetails"
import { useEffect, useState } from "react"

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') ?
      localStorage.getItem('darkMode') :
      false
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', true);
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.removeItem('darkMode');
    }
  }, [darkMode])


  return (
    <div className="relative bg-slate-200 dark:bg-zinc-800 min-h-screen">
      <BrowserRouter>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/project/:projectName" element={<ProjectDetails />} />
          <Route path="/skill/:skillName" element={<SkillDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
