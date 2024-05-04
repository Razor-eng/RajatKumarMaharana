import { MdCall, MdLocationOn } from "react-icons/md";

const Contact = () => {
    return (
        <div className="md:px-28 py-20 h-screen overflow-hidden bg-green-100">
            <h2 className="text-5xl font-extrabold text-center text-green-500">Get in Touch .</h2>
            <div className="grid grid-cols-3">
                <div className="flex flex-col gap-6 px-28 col-span-2">
                    <div className="flex gap-8 pt-24 w-[700px]">
                        <div className="flex flex-col gap-1 w-full">
                            <label className="">First Name</label>
                            <input type="text" placeholder="First Name"
                                className="px-2 py-3 rounded-lg border border-gray-300 outline-blue-500"
                            />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className="">Last Name</label>
                            <input type="text" placeholder="Last Name"
                                className="px-2 py-3 rounded-lg border border-gray-300 outline-blue-500"
                            />
                        </div>
                    </div>
                    <div className="flex gap-8 w-[700px]">
                        <div className="flex flex-col gap-1 w-full">
                            <label className="">Your Email</label>
                            <input type="email" placeholder="Email"
                                className="px-2 py-3 rounded-lg border border-gray-300 outline-blue-500"
                            />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className="">Phone Number</label>
                            <input type="text" placeholder="Number"
                                className="px-2 py-3 rounded-lg border border-gray-300 outline-blue-500"
                            />
                        </div>
                    </div>
                    <div className="flex gap-8 w-[700px]">
                        <div className="flex flex-col gap-1 w-full">
                            <label className="">Your Message</label>
                            <textarea rows={6} type="email" placeholder="Leave a comment..."
                                className="px-2 py-3 rounded-lg border border-gray-300 outline-blue-500"
                            />
                        </div>
                    </div>
                    <button className="px-5 py-2 rounded-md bg-blue-400 w-fit text-white font-semibold hover:opacity-90 active:scale-95 transition-all ease-in duration-150">Submit</button>
                </div>
                <div className="flex flex-col gap-14 mt-20 py-6 w-full items-center justify-center">
                    <div className="flex flex-col gap-1 items-center">
                        <MdLocationOn fontSize={50} className="p-2 bg-gray-300 rounded-sm text-zinc-700" />
                        <h2 className="text-xl font-semibold">Address:</h2>
                        <p className="text-zinc-600">Katika Gauda Street, Parlakhemundi</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <MdCall fontSize={50} className="p-2 bg-gray-300 rounded-sm text-zinc-700" />
                        <h2 className="text-xl font-semibold">Call me:</h2>
                        <p className="text-zinc-600">Call me to speak I am always happy to help.</p>
                        <h2 className="text-lg font-semibold">+91 9861711134</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact