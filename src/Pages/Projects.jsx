import { FaArrowDown, FaArrowUp, FaSearch } from "react-icons/fa"
import ProjectPageCard from "../Components/ProjectPageCard"
import MyAllProjects from "../Constants/MyProjects"
import { useState } from "react"

const Projects = () => {
    const [page, setPage] = useState(6);
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="px-3 md:px-28 py-2 z-10 overflow-hidden min-h-screen max-w-screen dark:text-white">
            <div className="flex w-full justify-end">
                <div className="w-44 flex items-center px-2 py-1 rounded-xl bg-rose-50 focus-within:w-full md:focus-within:w-72 focus-within:outline focus-within:outline-blue-600 transition-all ease-in duration-200">
                    <FaSearch className="text-zinc-400" />
                    <input type="text" className="w-full bg-transparent pl-1 outline-none placeholder-zinc-400 dark:text-black" placeholder="Search Projects" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                </div>
            </div>
            {
                searchTerm ?
                    <div className="py-4">
                        <div className="flex flex-col mt-4 gap-2 pb-10">
                            <h2 className="text-2xl font-semibold animate-in slide-in-from-left-96 duration-500">Search Results for &quot;{searchTerm}&quot; :</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4 animate-in slide-in-from-left-96 duration-500">
                                {MyAllProjects.filter(project => {
                                    return (project.title.toLowerCase().includes(searchTerm.toLowerCase()) || JSON.stringify(project.techs).toLowerCase().includes(searchTerm.toLowerCase()))
                                }).map((project, id) => (
                                    <ProjectPageCard project={project} searchTerm={searchTerm} key={id} />
                                ))}
                            </div>
                        </div>
                    </div>
                    :
                    <div className="py-4">
                        <div className="flex flex-col mt-4 gap-2 border-b-2 border-zinc-400 dark:border-zinc-600 pb-10">
                            <h2 className="text-3xl font-semibold animate-in slide-in-from-left-96 duration-500">Recent Projects</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4 animate-in slide-in-from-left-96 duration-500">
                                {MyAllProjects.map((project, id) => project.recent && (
                                    <ProjectPageCard project={project} key={id} />
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 pt-6">
                            <h2 className="text-3xl font-semibold animate-in slide-in-from-right-96 duration-500">All Projects</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4 animate-in slide-in-from-right-96 duration-500">
                                {MyAllProjects.map((project, id) => (id < page && !project.recent) && (
                                    <ProjectPageCard project={project} key={id} />
                                ))}
                            </div>
                        </div>
                        {
                            page < MyAllProjects.length ?
                                <div className="mt-8 w-full flex justify-center">
                                    <button className="text-sm flex items-center gap-2 justify-center font-semibold bg-violet-400 px-4 py-3 rounded-md hover:opacity-80 active:scale-95 transition-all ease-in duration-150 text-zinc-100 outline-none"
                                        onClick={() => setPage(page + 3)}
                                    >
                                        View More
                                        <FaArrowDown />
                                    </button>
                                </div>
                                :
                                <div className="mt-8 w-full flex justify-center">
                                    <button className="text-sm flex items-center gap-2 justify-center font-semibold bg-violet-400 px-4 py-3 rounded-md hover:opacity-80 active:scale-95 transition-all ease-in duration-150 text-zinc-100 outline-none"
                                        onClick={() => setPage(6)}
                                    >
                                        View Less
                                        <FaArrowUp />
                                    </button>
                                </div>
                        }
                    </div>
            }
        </div >
    )
}

export default Projects