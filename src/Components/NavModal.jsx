/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5"
import { Link } from "react-router-dom"

const NavModal = ({ NavbarItems, selected, setSelected, setOpenMenu }) => {
    return (
        <div className="w-screen h-screen z-50 fixed bg-zinc-200 dark:bg-zinc-800 overflow-x-hidden overflow-hidden top-0 px-10 py-10 opacity-[98%]">
            <div className="flex flex-col">
                <div
                    className="flex justify-end"
                    onClick={() => setOpenMenu(false)}
                >
                    <button className="bg-zinc-300 dark:text-white p-1 rounded-md dark:bg-zinc-700 w-fit h-fit active:scale-75 transition-all outline-none ease-in duration-200 shadow-md">
                        <IoClose size={40} />
                    </button>
                </div>
                <div className="flex flex-col justify-center gap-10 mt-24">
                    {NavbarItems.map((item, id) => (
                        <Link to={item.href} className={`flex items-center pl-16 text-3xl gap-3 active:scale-75 transition-all ease-in duration-200 border-b-2 pb-8 ${selected === item.href ? 'dark:text-white text-black border-opacity-100 border-black dark:border-white' : 'border-opacity-0 border-black text-zinc-700 dark:text-zinc-400 '}`} key={id} onClick={() => { setSelected(item.href); setOpenMenu(false) }}>
                            <item.icon />
                            <h2 className="">{item.label}</h2>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NavModal