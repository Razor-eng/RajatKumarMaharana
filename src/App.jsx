import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import ProjectDetails from "./Pages/ProjectDetails"
import Projects from "./Pages/Projects"
import Skills from "./Pages/Skills"
import Contacts from "./Pages/Contacts"
import SkillDetails from "./Pages/SkillDetails"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/project/:projectName" element={<ProjectDetails />} />
        <Route path="/skill/:skillName" element={<SkillDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
