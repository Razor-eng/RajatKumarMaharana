import { FaDotCircle } from "react-icons/fa"

const Education = () => {
    const Educations = [
        { year: '2015-2016', institute: 'Centurion Public School', percentage: '82' }
    ]
    return (
        <div className="px-3 md:px-28 py-10 h-auto md:min-h-screen z-10 overflow-hidden dark:bg-[#0d0c0c] bg-[#f2e8db]">
            <h1 className="font-bold text-4xl dark:text-slate-300 text-slate-700 w-full text-center">My Qualification</h1>
            <div className="mt-10 flex justify-center gap-3">
                <div className="flex flex-col items-center mt-14">
                    <FaDotCircle className="dark:text-white" />
                    <div className="border-2 h-36"></div>
                    <FaDotCircle className="dark:text-white" />
                    <div className="border-2 h-36"></div>
                    <FaDotCircle className="dark:text-white" />
                </div>
                <div className="flex flex-col gap-14">
                    <div className="flex flex-col border gap-2 border-zinc-200 dark:border-zinc-800 rounded-md p-3 bg-zinc-200 dark:bg-zinc-800 dark:text-white w-96">
                        <p className="text-zinc-500 text-sm"></p>
                        <div className="flex items-center justify-between">
                            <h2 className="font-semibold text-xl">Centurion Public School</h2>
                            <p className="text-sm">82%</p>
                        </div>
                        <h2 className="font-[500]">Matriculation</h2>
                    </div>
                    <div className="flex flex-col border gap-2 border-zinc-200 dark:border-zinc-800 rounded-md p-3 bg-zinc-200 dark:bg-zinc-800 dark:text-white w-96">
                        <p className="text-zinc-500 text-sm">2017-2018</p>
                        <div className="flex items-center justify-between">
                            <h2 className="font-semibold text-xl">Centurion Public School</h2>
                            <p className="text-sm">75%</p>
                        </div>
                        <h2 className="font-[500]">HSC/Intermediate</h2>
                    </div>
                    <div className="flex flex-col border gap-2 border-zinc-200 dark:border-zinc-800 rounded-md p-3 bg-zinc-200 dark:bg-zinc-800 dark:text-white w-96">
                        <p className="text-zinc-500 text-sm">2018-2022</p>
                        <div className="flex items-center justify-between">
                            <h2 className="font-semibold text-lg">National Institute of Science & Technology</h2>
                            <p className="text-sm">82%</p>
                        </div>
                        <h2 className="font-[500]">Matriculation</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education