import { FaArrowDown, FaArrowUp } from "react-icons/fa"
import ProjectPageCard from "../Components/ProjectPageCard"
import { MyAllProjects, MyRecentProjects } from "../Constants/MyProjects"
import { useState } from "react"

const Projects = () => {
    const [page, setPage] = useState(3);

    return (
        <div className="px-28 py-6 z-10 overflow-x-hidden max-w-screen">
            <div className="flex flex-col mt-4 gap-2 border-b-2 border-zinc-400 pb-10">
                <h2 className="text-3xl font-semibold animate-in slide-in-from-left-96 duration-500">Recent Projects</h2>
                <div className="grid grid-cols-3 gap-5 mt-4 animate-in slide-in-from-left-96 duration-500">
                    {MyRecentProjects.map((project, id) => (
                        <ProjectPageCard project={project} key={id} />
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-2 pt-6">
                <h2 className="text-3xl font-semibold animate-in slide-in-from-right-96 duration-500">All Projects</h2>
                <div className="grid grid-cols-3 gap-5 mt-4 animate-in slide-in-from-right-96 duration-500">
                    {MyAllProjects.map((project, id) => id < page && (
                        <ProjectPageCard project={project} key={id} />
                    ))}
                </div>
            </div>
            {
                page < MyAllProjects.length ?
                    <div className="mt-6 w-full flex justify-center">
                        <button className="text-sm flex items-center gap-2 justify-center font-semibold bg-violet-400 px-4 py-3 rounded-md hover:opacity-80 active:scale-95 transition-all ease-in duration-150 text-zinc-100 outline-none"
                            onClick={() => setPage(page + 3)}
                        >
                            View More
                            <FaArrowDown />
                        </button>
                    </div>
                    :
                    <div className="mt-6 w-full flex justify-center">
                        <button className="text-sm flex items-center gap-2 justify-center font-semibold bg-violet-400 px-4 py-3 rounded-md hover:opacity-80 active:scale-95 transition-all ease-in duration-150 text-zinc-100 outline-none"
                            onClick={() => setPage(page - 3)}
                        >
                            View Less
                            <FaArrowUp />
                        </button>
                    </div>

            }
        </div >
    )
}

export default Projects