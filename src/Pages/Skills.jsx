import SkillPageCard from "../Components/SkillPageCard";
import MySkills from "../Constants/MySkills";

const Skills = () => {
    return (
        <div className="px-3 md:px-28 py-6 z-10 overflow-x-hidden max-w-screen dark:text-white">
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-semibold animate-in slide-in-from-left-96 duration-500">My Skills</h2>
                <div className="flex flex-col gap-5 mt-4">
                    {MySkills.map((skill, id) => (
                        <SkillPageCard skill={skill} id={id} key={id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills