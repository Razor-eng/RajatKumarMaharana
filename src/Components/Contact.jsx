import { MdCall, MdLocationOn } from "react-icons/md";
import ContactInput from "./ContactInput";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });
    return (
        <div className="px-3 md:px-28 pt-10 md:py-20 h-auto md:h-screen overflow-hidden bg-green-100 dark:bg-zinc-800">
            <h2 className="text-5xl font-extrabold text-center text-green-500">Get in Touch .</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 py-20">
                <div className="flex flex-col gap-6 px-3 md:px-0 md:pl-28 col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10">
                        <ContactInput type={'text'} placeholder={'Enter First Name'} name={'firstName'} setValue={setFormData} value={formData.firstName} label={'First Name'} />
                        <ContactInput type={'text'} placeholder={'Enter Last Name'} name={'lastName'} setValue={setFormData} value={formData.lastName} label={'Last Name'} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10">
                        <ContactInput type={'email'} placeholder={'eg: name@email.com'} name={'email'} setValue={setFormData} value={formData.email} label={'Your Email'} />
                        <ContactInput type={'text'} placeholder={'eg: (+91) 123456'} name={'phone'} setValue={setFormData} value={formData.phone} label={'Your Phone'} />
                    </div>
                    <ContactInput type={'textarea'} placeholder={'Enter Your Message'} name={'message'} setValue={setFormData} value={formData.message} label={'Message'} />
                    <button className="px-5 py-2 rounded-md bg-blue-400 w-fit text-white font-semibold hover:opacity-90 active:scale-95 transition-all ease-in duration-150">Submit</button>
                </div>
                <div className="md:flex md:flex-col grid grid-cols-2 gap-2 md:gap-14 w-full md:items-center pt-14 md:py-14">
                    <div className="flex flex-col gap-1 pt-5 md:pt-0 border md:border-none border-zinc-400 dark:border-zinc-600 items-center">
                        <MdLocationOn fontSize={50} className="p-2 bg-gray-300 rounded-sm text-zinc-700" />
                        <h2 className="text-xl font-semibold dark:text-white">Address:</h2>
                        <p className="text-zinc-600 dark:text-zinc-400">Katika Gauda Street, Parlakhemundi</p>
                    </div>
                    <div className="flex flex-col gap-1 pt-5 md:pt-0 border md:border-none border-zinc-400 dark:border-zinc-600 items-center">
                        <MdCall fontSize={50} className="p-2 bg-gray-300 rounded-sm text-zinc-700" />
                        <h2 className="text-xl font-semibold dark:text-white">Call me:</h2>
                        <p className="text-zinc-600 dark:text-zinc-400">Call me to speak I am always happy to help.</p>
                        <h2 className="text-lg font-semibold dark:text-white">+91 9861711134</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact