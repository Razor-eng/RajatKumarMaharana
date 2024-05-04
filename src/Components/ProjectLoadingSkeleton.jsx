const ProjectLoadingSkeleton = () => {
    return (
        <div className="grid grid-cols-2">
            <div className="flex flex-col gap-8 animate-pulse duration-1000">
                <div className="h-96 rounded-md border p-3 bg-gray-300">
                </div>
                <div className="flex w-full justify-between gap-12">
                    <button className="bg-blue-400 rounded-md px-8 py-3 w-full h-12">
                    </button>
                    <button className="bg-slate-300 rounded-md px-8 py-3 w-full h-12">
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-4 px-10 py-6 animate-pulse duration-1000">
                <h2 className="h-12 w-60 font-extrabold bg-gray-300 rounded-md">
                </h2>
                <p className="h-40 w-full bg-gray-300 rounded-md">
                </p>
                <div className="h-32 w-60 bg-gray-300 rounded-md">
                </div>
            </div>
        </div>
    )
}

export default ProjectLoadingSkeleton