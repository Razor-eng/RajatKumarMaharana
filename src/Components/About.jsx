import { Link } from "react-router-dom"

const About = () => {
    return (
        <div className="px-3 md:px-28 h-screen flex items-center justify-between z-10 overflow-hidden">
            <div className="md:pt-20 pb-10 flex flex-col gap-6">
                <h1 className="text-3xl md:text-5xl text-zinc-800 dark:text-zinc-200 font-semibold animate-in slide-in-from-top-60 duration-500">{`Hi there! I'm Rajat`}</h1>
                <p className="text-lg text-zinc-500 max-w-[600px] animate-in slide-in-from-left-96 duration-500">Aspiring Fullstack Developer specialised in React and Java, based in Hyderabad. Eager to apply my academic knowledge and project experience in developing innovative web applications. Aiming to contribute effectively in a professional tech environment, leveraging my skills in both front-end and back-end development.</p>
                <div className="flex gap-5 w-full ml-2 mt-5 animate-in slide-in-from-bottom-96 duration-500">
                    <button className="font-semibold text-lg text-white bg-[#60A5FA] min-w-32 text-center px-5 py-2 rounded-md hover:opacity-85 transition-opacity ease-in duration-200">
                        My CV
                    </button>
                    <Link to={'/projects'} className="font-semibold text-lg text-zinc-600 bg-[#d6e3e1] min-w-32 text-center px-5 py-2 rounded-md  border border-zinc-400 hover:opacity-85 transition-opacity ease-in duration-200">
                        My Projects
                    </Link>
                </div>
            </div>
            <img src="/user.png" alt="" className="animate-in slide-in-from-right-96 duration-500 hidden md:block" />
        </div>
    )
}

export default About