import { useLocation, useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const SkillPageCard = ({ skill, id, searchTerm }) => {
    const navigate = useNavigate();
    const location = useLocation();

    function getCode(code) {
        navigate(
            `/skill/${code.name}`,
            {
                state: {
                    code: code.name,
                    back: location.pathname
                }
            }
        )
    }

    return (
        <div className={`animate-in slide-in-from-${id % 2 == 0 ? 'right' : 'left'}-96 duration-500`}>
            {!searchTerm &&
                <h3 className="text-xl text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
                    {skill.title} (<skill.icon fontSize={16} />) :
                </h3>
            }
            <div className="grid gap-8 md:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mt-3 mb-4">
                {skill.codes.filter(code => {
                    return code.name.toLowerCase().includes(searchTerm.toLowerCase())
                })
                    .map((code, id) => (
                        <div
                            className="flex flex-col border cursor-pointer hover:scale-105 hover:opacity-80 transition-all ease-in duration-150 border-zinc-200 dark:border-2 dark:border-zinc-500 shadow-lg dark:shadow-zinc-600 bg-indigo-50 dark:bg-stone-800/50 font-semibold items-center rounded-2xl"
                            key={id}
                            onClick={() => getCode(code)}
                        >
                            <code.icon color={code.color} fontSize={50} className='py-2' />
                            <h2 className="border-t border-zinc-300 dark:border-zinc-500 w-full text-center py-3">{code.name}</h2>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default SkillPageCard