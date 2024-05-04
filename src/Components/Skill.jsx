import MySkills from "../Constants/MySkills";
import SkillCard from "./SkillCard"
import { Link } from "react-router-dom";

const Skill = () => {
    return (
        <div className="p-10 md:px-28 py-6 h-screen z-10 overflow-hidden bg-slate-300">
            <h1 className="font-bold text-4xl text-slate-700 w-full text-center">My Skills</h1>
            <div className="grid grid-cols-3 gap-8 mt-8">
                {MySkills.map((skill, id) => id < 3 && (
                    <SkillCard title={skill.title} codes={skill.codes} Icon={skill.icon} key={id} />
                ))}
            </div>
            <div className="w-full text-center mt-7">
                <Link to={'/skills'} className="py-2 px-5 rounded-sm bg-zinc-200 hover:opacity-80 active:opacity-60 active:scale-95 font-semibold transition-all ease-in duration-200">
                    View More
                </Link>
            </div>
        </div>
    )
}

export default Skill