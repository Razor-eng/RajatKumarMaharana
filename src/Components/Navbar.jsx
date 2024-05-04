import { IoHome } from "react-icons/io5";
import { AiFillProject } from "react-icons/ai";
import { MdContactEmergency } from "react-icons/md";
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { SiHyperskill } from "react-icons/si";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const [selected, setSelected] = useState(location.pathname || '/');

    useEffect(() => {
        setSelected(
            ((location.pathname.includes('skill/')
                || location.pathname.includes('project/')) && 'invalid')
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
        <div className="bg-[#121212] bg-opacity-90 h-16 px-10 md:px-28 md:py-10 flex justify-between items-center">
            <div className="flex gap-6 md:gap-10 text-lg font-semibold text-zinc-400 h-full items-center">
                {NavbarItems.map((item, id) => (
                    <Link to={item.href} className={`flex gap-2 items-center justify-center pb-1 w-24 h-fit cursor-pointer transition-colors ease-in duration-200 hover:text-zinc-300 border-b-2 border-white ${selected === item.href ? 'text-white hover:text-white border-opacity-100' : 'border-opacity-0'}`} key={id} onClick={() => setSelected(item.href)}>
                        <item.icon />
                        <h2 className="">{item.label}</h2>
                    </Link>
                ))}
            </div>
            <div className="flex gap-2">
                {NavbarSocial.map((item, id) => (
                    <div className="text-2xl hover:scale-110 hover:opacity-80 active:scale-95 transition-all ease-in duration-100 cursor-pointer" key={id}>
                        <item.icon color={item.color} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Navbar