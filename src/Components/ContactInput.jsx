/* eslint-disable react/prop-types */
const ContactInput = ({ type, placeholder, value, setValue, name, label }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div className="flex flex-col gap-1">
            <label className="text-lg font-semibold text-zinc-700">{label}</label>
            {type !== 'textarea'
                ?
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    className="rounded-md p-3 border-none outline-blue-400 text-zinc-500 tracking-wider bg-sky-50"
                />
                :
                <textarea
                    type={type}
                    name={name}
                    rows={8}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    className="rounded-md p-2 border-none outline-blue-400 text-zinc-500 tracking-wider bg-sky-50"
                />
            }
        </div>
    )
}

export default ContactInput