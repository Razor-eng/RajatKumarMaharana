import { useLocation, useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const SkillCard = ({ title, codes, Icon }) => {
    const navigate = useNavigate();
    const location = useLocation();

    function getCode(code) {
        navigate(
            `/skill/${code.name}`,
            {
                state:
                {
                    code: code.name,
                    back: location.pathname
                }
            }
        )
    }

    return (
        <div className="bg-white dark:bg-zinc-800 shadow-lg dark:shadow-zinc-800 rounded-md">
            <div className="bg-green-400 dark:bg-zinc-900 text-white rounded-t-md py-6 font-semibold flex flex-col justify-center items-center gap-2">
                <Icon fontSize={24} />
                <h1>{title}</h1>
            </div>
            <div className="flex flex-col py-6 font-semibold [&>*:nth-last-child(1)]:border-none">
                {codes.map((code, id) => (
                    <div
                        key={id}
                        className="border-b border-zinc-500 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-900 cursor-pointer flex items-center pl-36 md:pl-40 gap-2 hover:scale-105 hover:rounded-xl hover:shadow-lg transition-all ease-in duration-150 dark:text-white"
                        onClick={() => getCode(code)}
                    >
                        <code.icon fontSize={18} color={code.color} />
                        <p style={{ color: `${code.color}` }}>{code.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillCard