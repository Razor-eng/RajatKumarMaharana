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
        <div className="md:px-28 py-8">
            <MdKeyboardArrowLeft className="bg-zinc-300 w-fit hover:opacity-70 cursor-pointer transition-all ease-in duration-150 flex items-center justify-center rounded-full hover:scale-105 mb-10" fontSize={40} onClick={goBack} />
            {!loading ?
                <div className="grid grid-cols-2">
                    <div className="flex flex-col gap-8">
                        <img src={`/images/${project?.title}.png`} alt="" className="h-96 rounded-md shadow-xl" />
                        <div className="flex w-full justify-between gap-12">
                            <Link to={project?.live} target="_blank" className="flex items-center justify-center text-lg gap-4 bg-blue-400 text-white rounded-md px-8 py-3 hover:opacity-80 transition-opacity ease-in duration-150 w-full h-fit active:scale-95">
                                <FaLink fontSize={18} />
                                <p className="font-semibold">Live Link</p>
                            </Link>
                            <button className="flex items-center justify-center gap-4 text-lg bg-slate-300 rounded-md px-8 py-3 hover:opacity-80 transition-opacity ease-in duration-150 w-full h-fit active:scale-95">
                                <FaGithub fontSize={20} />
                                <p className="font-semibold">Source Code</p>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 px-10 py-6">
                        <h2 className="text-4xl font-extrabold text-zinc-800">
                            {project?.title}
                        </h2>
                        <p className="text-zinc-500 text-lg">
                            {project?.description}
                        </p>
                        <div className="flex flex-col gap-1">
                            <p className="text-zinc-700 text-xl font-semibold underline">
                                Tech Used:
                            </p>
                            {project?.techs?.map((tech, id) => (
                                <span key={id} className="text-zinc-600">{tech}</span>
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