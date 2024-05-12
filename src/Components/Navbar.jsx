/* eslint-disable react/prop-types */
import { IoHome } from "react-icons/io5";
import { AiFillProject } from "react-icons/ai";
import { MdContactEmergency } from "react-icons/md";
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaMoon, FaTwitterSquare } from "react-icons/fa";
import { SiHyperskill } from "react-icons/si";
import { BsSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import NavModal from "./NavModal";

const Navbar = ({ darkMode, setDarkMode }) => {
    const location = useLocation();
    const [selected, setSelected] = useState(location.pathname || '/');
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        setSelected(
            (
                (location.pathname.includes('skill/') || location.pathname.includes('project/')) && 'invalid')
            || location.pathname
            || '/'
        )
    }, [location]);

    const NavbarItems = [
        { label: 'Home', icon: IoHome, href: '/' },
        { label: 'Projects', icon: AiFillProject, href: '/projects' },
        { label: 'Skills', icon: SiHyperskill, href: '/skills' },
        { label: 'Contact', icon: MdContactEmergency, href: '/contacts' },
    ]

    const NavbarSocial = [
        { icon: FaFacebookSquare, color: '#1877F2' },
        { icon: FaGithubSquare, color: '#ffffff' },
        { icon: FaTwitterSquare, color: '#1DA1F2' },
        { icon: FaInstagramSquare, color: '#E1306C' },
    ]

    return (
        <div className="relative">
            <div className="bg-[#121212] bg-opacity-90 h-16 px-6 md:px-10 md:pl-28 md:py-10 flex justify-between items-center">
                <div className="text-white md:hidden" onClick={() => setOpenMenu(true)}>
                    <GiHamburgerMenu fontSize={30} />
                </div>
                <div className="hidden md:flex gap-6 md:gap-10 text-lg font-semibold text-zinc-400 h-full items-center">
                    {NavbarItems.map((item, id) => (
                        <Link to={item.href} className={`flex gap-2 items-center justify-center pb-1 w-24 h-fit cursor-pointer transition-colors ease-in duration-200 hover:text-zinc-300 border-b-2 border-white ${selected === item.href ? 'text-white hover:text-white border-opacity-100' : 'border-opacity-0'}`} key={id} onClick={() => setSelected(item.href)}>
                            <item.icon />
                            <h2 className="">{item.label}</h2>
                        </Link>
                    ))}
                </div>
                <div className="flex items-center gap-12">
                    <div className="hidden md:flex items-center gap-2">
                        {NavbarSocial.map((item, id) => (
                            <div className="text-3xl hover:scale-110 hover:opacity-80 active:scale-95 transition-all ease-in duration-100 cursor-pointer" key={id}>
                                <item.icon color={item.color} />
                            </div>
                        ))}
                    </div>
                    <div className="relative w-16 h-8 flex items-center dark:bg-zinc-600 bg-zinc-900 transition-colors ease-in duration-200 cursor-pointer rounded-full p-1" onClick={() => setDarkMode(!darkMode)}>
                        <FaMoon className="text-[#C3C3C3]" size={18} />
                        <div className={`absolute bg-zinc-600 dark:bg-zinc-800 w-8 h-8 rounded-full shadow-md ${darkMode ? 'left-[1px]' : 'right-[1px]'} transition-transform ease-in duration-500`}></div>
                        <BsSunFill className="text-[#FBBF24] ml-auto" size={20} />
                    </div>
                </div>
            </div>
            {
                openMenu && <NavModal NavbarItems={NavbarItems} selected={selected} setSelected={setSelected} setOpenMenu={setOpenMenu} />
            }
        </div>
    )
}

export default Navbar