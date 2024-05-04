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
        <div className="px-28 py-6 z-10 overflow-x-hidden max-w-screen">
            <h2 className="text-3xl font-semibold animate-in slide-in-from-left-96 duration-500">Contact Me</h2>
            <div className="mt-10 grid grid-cols-3">
                <div className="col-span-2 flex flex-col gap-10 animate-in slide-in-from-left-96 duration-500">
                    <div className="grid grid-cols-2 gap-10">
                        <ContactInput type={'text'} placeholder={'Enter First Name'} name={'firstName'} setValue={setFormData} value={formData.firstName} label={'First Name'} />
                        <ContactInput type={'text'} placeholder={'Enter Last Name'} name={'lastName'} setValue={setFormData} value={formData.lastName} label={'Last Name'} />
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                        <ContactInput type={'email'} placeholder={'eg: name@email.com'} name={'email'} setValue={setFormData} value={formData.email} label={'Your Email'} />
                        <ContactInput type={'text'} placeholder={'eg: (+91) 123456'} name={'phone'} setValue={setFormData} value={formData.phone} label={'Your Phone'} />
                    </div>
                    <ContactInput type={'textarea'} placeholder={'Enter Your Message'} name={'message'} setValue={setFormData} value={formData.message} label={'Message'} />
                    <button className="bg-sky-500 text-white text-lg font-semibold py-2 w-fit px-6 rounded-md hover:opacity-70 active:scale-95 transition-all ease-in duration-150">Submit</button>
                </div>
                <div className="px-4 pl-10 animate-in slide-in-from-right-96 duration-500">
                    <h2 className="text-lg font-semibold">Connect With me</h2>
                    <div className="grid gap-4 mt-6 grid-cols-1 max-w-60">
                        {connections.map((connection, id) => (
                            <Link to={`${connection.link}${connection.userName}`} target="_blank" className="grid grid-cols-5 bg-zinc-50 rounded-l-full rounded-r-full border-r-8 hover:scale-105 active:scale-95 hover:opacity-70 transition-all ease-in duration-150" style={{ borderColor: `${connection.color}` }} key={id}>
                                <div className="p-2 rounded-full" style={{ backgroundColor: `${connection.color}` }}>
                                    <connection.icon color="white" fontSize={44} className="w-full h-full" />
                                </div>
                                <div className="text-xs w-full p-2 flex flex-col gap-1 col-span-4">
                                    <p className="font-semibold uppercase">Follow Me On {connection.app}</p>
                                    <p className="underline font-semibold text-zinc-500">@{connection.userName || 'rajat_maharana'}</p>
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