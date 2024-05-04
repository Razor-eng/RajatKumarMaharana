import { useLocation, useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProjectPageCard = ({ project }) => {
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
        <div className={`h-fit w-fit flex flex-col gap-2 shadow-lg border  hover:scale-105 transition-all ease-in duration-150 cursor-pointer border-gray-300 rounded-md justify-center ${project.recent ? 'bg-indigo-50' : 'bg-fuchsia-50'} p-4`}>
            <img src={`/images/${project?.title}.png`} alt="" className="w-96"
                onClick={() => getProject(project)}
            />
            <h2 className="text-xl font-bold border-b border-zinc-400 pb-3"
                onClick={() => getProject(project)}
            >
                {project.title}
            </h2>
            <div className="flex gap-5">
                <button className="text-sm font-semibold bg-blue-400 px-4 p-2 rounded-md hover:opacity-90 active:scale-95 transition-all ease-in duration-150 text-white">Live Link</button>
                <button className="text-sm font-semibold bg-green-300 px-4 p-2 rounded-md hover:opacity-80 active:scale-95 transition-all ease-in duration-150 text-zinc-700">
                    Source Code
                </button>
            </div>
        </div>
    )
}

export default ProjectPageCard