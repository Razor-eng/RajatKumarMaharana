import { useEffect, useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom"
import ProjectLoadingSkeleton from "../Components/ProjectLoadingSkeleton";
import { MdKeyboardArrowLeft } from "react-icons/md";

const ProjectDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [project, setProject] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setProject(location?.state.project)
            setLoading(false);
        }, 1500);
    }, [location]);

    const goBack = () => {
        navigate(location.state.back);
    }

    return (
        <div className="px-3 md:px-28 py-8">
            <MdKeyboardArrowLeft className="bg-zinc-300 w-fit hover:opacity-70 cursor-pointer transition-all ease-in duration-150 flex items-center justify-center rounded-full hover:scale-105 mb-10" fontSize={40} onClick={goBack} />
            {!loading ?
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col gap-8">
                        <img src={`/images/${project?.title}.png`} alt="" className="md:h-96 h-72 rounded-md shadow-xl dark:shadow-zinc-900" />
                        <div className="flex w-full justify-between gap-12">
                            <Link to={project?.live} target="_blank" className="flex items-center justify-center text-sm md:text-lg gap-4 bg-blue-400 text-white rounded-md md:px-8 py-3 hover:opacity-80 transition-opacity ease-in duration-150 w-full h-fit active:scale-95">
                                <FaLink fontSize={18} />
                                <p className="font-semibold">Live Link</p>
                            </Link>
                            <button className="flex items-center justify-center gap-4 text-sm md:text-lg bg-slate-300 rounded-md md:px-8 py-3 hover:opacity-80 transition-opacity ease-in duration-150 w-full h-fit active:scale-95">
                                <FaGithub fontSize={20} />
                                <p className="font-semibold">Source Code</p>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:px-10 md:py-6 py-10">
                        <h2 className="text-4xl font-extrabold text-zinc-800 dark:text-zinc-200">
                            {project?.title}
                        </h2>
                        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
                            {project?.description}
                        </p>
                        <div className="flex flex-col gap-1">
                            <p className="text-zinc-700 dark:text-zinc-300 text-xl font-semibold underline">
                                Tech Used:
                            </p>
                            {project?.techs?.map((tech, id) => (
                                <span key={id} className="text-zinc-600 dark:text-zinc-400">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
                :
                <ProjectLoadingSkeleton />
            }
        </div>
    )
}

export default ProjectDetails