import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaLink } from "react-icons/fa";

/* eslint-disable react/prop-types */
const ProjectPageCard = ({ project, searchTerm }) => {
    const navigate = useNavigate();
    const location = useLocation();

    function getProject(project) {
        navigate(
            `/project/${project.title}`,
            {
                state: {
                    project: project,
                    back: location.pathname
                }
            }
        )
    }

    return (
        <div className={`h-fit w-fit flex flex-col gap-2 shadow-lg border  hover:scale-105 transition-all ease-in duration-150 cursor-pointer border-gray-300 rounded-md justify-center dark:shadow-zinc-600 ${project.recent ? 'bg-indigo-50 dark:bg-zinc-700' : 'bg-fuchsia-50 dark:bg-neutral-800'} p-4`}>
            <img src={`/images/${project?.title}.png`} alt="" className={`w-96 rounded-md shadow-sm shadow-zinc-500 ${project.recent && 'h-64'}`}
                onClick={() => getProject(project)}
            />
            <div className="flex items-center justify-between border-b border-zinc-400 pb-3">
                <h2 className="text-xl font-bold"
                    onClick={() => getProject(project)}
                >
                    {project.title}
                </h2>
                {project.recent &&
                    <p className="dark:bg-zinc-600 bg-zinc-300 text-zinc-700 dark:text-zinc-400 px-2 text-sm rounded-md">Recent</p>
                }
            </div>
            <div className="flex items-center flex-wrap gap-3 text-sm border-b border-zinc-400 pb-3 pt-1">
                {project.techs.map((tech, id) => (
                    <p className={`bg-gray-300 dark:bg-zinc-600 shadow-md px-3 text-zinc-600 dark:text-zinc-300 rounded-md ${(searchTerm && tech.toLowerCase().includes(searchTerm.toLowerCase())) && 'dark:bg-zinc-400 dark:text-zinc-600 bg-gray-500 text-zinc-200'}`} key={id}>
                        {tech}
                    </p>
                ))}
            </div>
            <div className="flex gap-5">
                <Link to={project.live} target="_blank" className="text-sm flex items-center gap-2 font-semibold bg-blue-400 px-4 p-2 rounded-md hover:opacity-90 active:scale-95 transition-all ease-in duration-150 text-white">
                    <FaLink />
                    Live Link
                </Link>
                <button className="text-sm flex items-center gap-2 font-semibold bg-green-300 px-4 py-3 rounded-md hover:opacity-80 active:scale-95 transition-all ease-in duration-150 text-zinc-700">
                    <FaGithub />
                    Source Code
                </button>
            </div>
        </div>
    )
}

export default ProjectPageCard