import About from "../Components/About"
import Contact from "../Components/Contact"
// import Education from "../Components/Education"
import Project from "../Components/Project"
import Skill from "../Components/Skill"

const Home = () => {
    return (
        <div>
            <About />
            <Skill />
            {/* <Education /> */}
            <Project />
            <Contact />
        </div>
    )
}

export default Home