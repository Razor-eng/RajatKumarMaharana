import { useLocation, useNavigate } from "react-router-dom"
import MySkills from "../Constants/MySkills"
import { useEffect, useState } from "react";
import SkillLoadingSkeleton from "../Components/SkillLoadingSkeleton";
import { MdKeyboardArrowLeft } from "react-icons/md";

const SkillDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [codeData, setCodeData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            function getCodeData() {
                if (location.state.code !== undefined) {
                    MySkills.map((skill) => {
                        skill.codes.map((code) => {
                            if (location.state.code === code.name) {
                                setCodeData(code);
                            }
                        })
                    })
                }
                setLoading(false);
            }
            getCodeData()
        }, 1500);
    }, [location.state.code])

    const goBack = () => {
        navigate(location.state.back);
    }

    return (
        <div className="py-12">
            <MdKeyboardArrowLeft className="ml-48 bg-zinc-300 hover:opacity-70 cursor-pointer transition-all ease-in duration-150 flex items-center justify-center rounded-full hover:scale-105" fontSize={40} onClick={goBack} />
            <div className="px-48 py-28">
                {
                    (codeData !== null && !loading) ?
                        <div>
                            <div className="flex items-end justify-start gap-5 text-6xl font-semibold">
                                <codeData.icon color={codeData?.color} fontSize={100} />
                                <h2 className="" style={{ color: `${codeData?.color}` }}>{codeData?.name}</h2>
                            </div>
                            <p className="flex justify-center py-10 text-4xl text-zinc-500">{codeData?.description}</p>
                        </div>
                        :
                        <SkillLoadingSkeleton />
                }
            </div>
        </div>
    )
}

export default SkillDetails