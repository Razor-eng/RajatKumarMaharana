import { useState } from "react"
import ContactInput from "../Components/ContactInput"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaSnapchatGhost, FaTelegramPlane, FaYoutube } from "react-icons/fa"
import { Link } from "react-router-dom";

const Contacts = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });
    const connections = [
        { app: 'FaceBook', icon: FaFacebookF, link: 'https://www.facebook.com/', userName: 'rajat.moharana.5', color: '#0286F3' },
        { app: 'Instagram', icon: FaInstagram, link: 'https://www.instagram.com/', userName: 'rajat_maharana', color: '#E42D9C' },
        { app: 'LinkedIn', icon: FaLinkedinIn, link: 'https://www.linkedin.com/', userName: '', color: '#0390E0' },
        { app: 'YouTube', icon: FaYoutube, link: 'https://www.youtube.com/@', userName: 'RajatCodes', color: '#FD212D' },
        { app: 'Telegram', icon: FaTelegramPlane, link: 'link', userName: '', color: '#05B4E3' },
        { app: 'SnapChat', icon: FaSnapchatGhost, link: 'link', userName: '', color: '#FBF702' },
    ]

    return (
        <div className="px-3 md:px-28 py-6 z-10 overflow-x-hidden max-w-screen">
            <h2 className="text-3xl font-semibold animate-in slide-in-from-left-96 duration-500 dark:text-white">Contact Me</h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3">
                <div className="col-span-2 flex flex-col gap-4 md:gap-10 animate-in slide-in-from-left-96 duration-500">
                    <div className="grid md:grid-cols-2 gap-4 md:gap-10">
                        <ContactInput type={'text'} placeholder={'Enter First Name'} name={'firstName'} setValue={setFormData} value={formData.firstName} label={'First Name'} />
                        <ContactInput type={'text'} placeholder={'Enter Last Name'} name={'lastName'} setValue={setFormData} value={formData.lastName} label={'Last Name'} />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 md:gap-10">
                        <ContactInput type={'email'} placeholder={'eg: name@email.com'} name={'email'} setValue={setFormData} value={formData.email} label={'Your Email'} />
                        <ContactInput type={'text'} placeholder={'eg: (+91) 123456'} name={'phone'} setValue={setFormData} value={formData.phone} label={'Your Phone'} />
                    </div>
                    <ContactInput type={'textarea'} placeholder={'Enter Your Message'} name={'message'} setValue={setFormData} value={formData.message} label={'Message'} />
                    <button className="bg-sky-500 text-white text-lg font-semibold py-2 w-fit px-6 rounded-md hover:opacity-70 active:scale-95 transition-all ease-in duration-150">Submit</button>
                </div>
                <div className="md:px-4 md:pl-10 pt-10 md:pt-0 animate-in slide-in-from-right-96 duration-500">
                    <h2 className="md:text-lg text-2xl font-semibold dark:text-white">Connect With me</h2>
                    <div className="grid gap-4 md:mt-6 mt-3 md:grid-cols-1 grid-cols-2 md:max-w-60">
                        {connections.map((connection, id) => (
                            <Link to={`${connection.link}${connection.userName}`} target="_blank" className="md:grid flex flex-col items-center grid-cols-5 bg-zinc-50 dark:bg-zinc-700 md:rounded-l-full md:rounded-r-full rounded-xl md:rounded-none border-2 md:border-r-8 hover:scale-105 active:scale-95 hover:opacity-70 transition-all ease-in duration-150" style={{ borderColor: `${connection.color}` }} key={id}>
                                <div className="p-2 mt-2 w-fit rounded-full" style={{ backgroundColor: `${connection.color}` }}>
                                    <connection.icon color="white" fontSize={44} className="md:w-full md:h-full w-10 h-10" />
                                </div>
                                <div className="text-xs w-full p-2 flex flex-col items-center gap-1 col-span-4">
                                    <p className="font-semibold uppercase dark:text-white"><span className="hidden sm:block">Follow Me On</span> {connection.app}</p>
                                    <p className="underline md:font-semibold text-zinc-500 dark:text-zinc-400">@{connection.userName || 'rajat_maharana'}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts