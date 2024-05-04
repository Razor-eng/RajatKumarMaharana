import { Link, useLocation, useNavigate } from "react-router-dom"

/* eslint-disable react/prop-types */
const ProjectCard = ({ project }) => {
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
        <div className="bg-white shadow-lg rounded-md hover:scale-105 hover:cursor-pointer hover:shadow-2xl hover:opacity-90 transition-all ease-in duration-150">
            <img
                src={`/images/${project.title}.png`} alt=""
                className="h-48 w-full rounded-t-md"
                onClick={() => getProject(project)}
            />
            <div className="px-6">
                <h1 className="pt-6 pb-3 font-bold text-xl border-b border-zinc-300"
                    onClick={() => getProject(project)}
                >{project.title}</h1>
                <p className="pt-3 pb-6 font-normal border-b border-zinc-300 text-sm text-zinc-500"
                    onClick={() => getProject(project)}
                >{project.description}</p>
                <div className="grid grid-cols-4 gap-1 pt-3 pb-6 border-b border-zinc-300"
                    onClick={() => getProject(project)}
                >
                    <h2 className="font-semibold text-zinc-700">Tech Used:</h2>
                    <div className="flex flex-wrap col-span-3 text-sm text-zinc-600">
                        {project.techs.map((code, id) => (
                            <p className="font-semibold" key={id}>
                                {code} {id !== project.techs.length - 1 && ','}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="flex gap-3 pb-8 pt-3">
                    <Link to={`${project?.live}`} target="_blank" className="border border-zinc-400 rounded-md px-5 py-2 hover:opacity-80 active:scale-95 transition-all ease-in duration-200 font-semibold bg-zinc-200 text-zinc-600">Live Link</Link>
                    <button className="border border-zinc-400 rounded-md px-5 py-2 hover:opacity-80 active:scale-95 transition-all ease-in duration-200 font-semibold text-white bg-blue-400">Source Code</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard