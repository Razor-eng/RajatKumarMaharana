import { FaSearch } from "react-icons/fa";
import SkillPageCard from "../Components/SkillPageCard";
import MySkills from "../Constants/MySkills";
import { useState } from "react";

const Skills = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="px-3 md:px-28 py-2 z-10 overflow-x-hidden min-h-screen max-w-screen dark:text-white">
            <div className="flex w-full justify-end">
                <div className="w-44 flex items-center px-2 py-1 rounded-xl bg-zinc-50 dark:bg-zinc-700 focus-within:w-full md:focus-within:w-72 focus-within:outline focus-within:outline-blue-600 transition-all ease-in duration-200">
                    <FaSearch className="text-zinc-400" />
                    <input type="text" className="w-full bg-transparent pl-1 outline-none placeholder-zinc-400 dark:text-white" placeholder="Search Projects" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                </div>
            </div>
            <div className="flex py-4 flex-col gap-2">
                <h2 className={`${searchTerm ? 'text-2xl' : 'text-3xl'} font-semibold animate-in slide-in-from-left-96 duration-500`}>{searchTerm ? `Search results for "${searchTerm}" :` : 'My Skills'}</h2>
                <div className={`${!searchTerm && 'flex flex-col'} gap-5 mt-4`}>
                    {MySkills.map((skill, id) => (
                        <SkillPageCard skill={skill} id={id} searchTerm={searchTerm} key={id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills