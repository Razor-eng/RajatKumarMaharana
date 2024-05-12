import { Link } from "react-router-dom"
import ProjectCard from "./ProjectCard"

const Project = () => {
    const AllProjects = [
        {
            title: 'GitHub',
            description: 'GitHub allows you to create, store, change, merge, and collaborate on files or code. Any member of a team can access the GitHub repository (think of this as a folder for files) and see the most recent version in real-time. Then, they can make edits or changes that the other collaborators also see.',
            techs: ['React', 'TailwindCSS', 'Firebase', 'React-Router-Dom'],
            live: 'https://github-2024.vercel.app/',
            source: ''
        },
        {
            title: 'Instagram',
            description: 'Instagram is a photo and video sharing social networking service owned by Meta Platforms. It allows users to upload media that can be edited with filters, be organized by hashtags, and be associated with a location via geographical tagging. Posts can be shared publicly or with preapproved followers.',
            techs: ['React', 'Redux', 'Chakra-UI', 'Firebase', 'React-Router-Dom'],
            live: 'https://instagram-2024.vercel.app/',
            source: ''
        },
        {
            title: 'IMDb',
            description: 'The Internet Movie Database (IMDb) is an online database containing information and statistics about movies, TV shows and video games as well as actors, directors and other film industry professionals.',
            techs: ['React', 'Redux', 'Chakra-UI', 'TailwindCSS', 'Firebase', 'React-Router-Dom'],
            live: 'https://imdb-2024.vercel.app/',
            source: ''
        },
    ]

    return (
        <div className="px-3 md:px-28 py-10 h-auto md:min-h-screen z-10 overflow-hidden dark:bg-gray-800 bg-[#c3e1f3]">
            <h1 className="font-bold text-4xl text-stone-700 dark:text-stone-300 w-full text-center">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                {AllProjects.map((project, id) => id < 3 && (
                    <ProjectCard project={project} key={id} />
                ))}
            </div>
            <div className="w-full text-center mt-10 md:mt-6">
                <Link to={'/projects'} className="py-2 px-5 rounded-sm bg-zinc-200 hover:opacity-80 active:opacity-60 active:scale-95 font-semibold transition-all ease-in duration-200">
                    View All
                </Link>
            </div>
        </div>
    )
}

export default Project