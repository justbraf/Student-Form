import { useState } from 'react'
import type { EntryList, ErrorList } from '../logic/interfaces'

const RegForm = ({ setEntries }: { setEntries: React.Dispatch<React.SetStateAction<EntryList[] | []>> }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        course: ""
    })
    const [errors, setErrors] = useState<Partial<ErrorList>>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const validate = () => {
        const newErrors: Partial<ErrorList> = {}
        if (!formData.name.trim())
            newErrors.name = "Name is required."
        if (!formData.email.includes("@") || !formData.email.includes("."))
            newErrors.email = "Enter a valid email."
        if (!formData.course)
            newErrors.course = "Please select a course."
        return newErrors
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const validationErrors = validate()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }
        setEntries(prevEntries => [...prevEntries, formData])
        setFormData({ name: "", email: "", course: "" })
        setErrors({})
    }

    return (
        <div className="mb-8">
            <form onSubmit={handleSubmit} className="flex flex-col w-80 gap-4 pt-4">
                <label className="relative">
                    {errors.name && <p className="peer error text-red-500 text-xs absolute -top-2 left-2 bg-gray-100">{errors.name}</p>}
                    <input className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 py-1 peer-[.error]:border-red-500 peer-[.error]:border-2 peer-[.error]:focus:ring-red-500 peer-[.error]:focus:ring-1" name="name" value={formData.name} onChange={handleChange} placeholder="Student Name" />
                </label>
                <label className="relative">
                    {errors.email && <p className="peer error text-red-500 text-xs absolute -top-2 left-2 bg-gray-100">{errors.email}</p>}
                    <input className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 py-1 peer-[.error]:border-red-500 peer-[.error]:border-2 peer-[.error]:focus:ring-red-500 peer-[.error]:focus:ring-1" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
                </label>
                <label className="relative">
                    {errors.course && <p className="peer error text-red-500 text-xs absolute -top-2 left-2 bg-gray-100">{errors.course}</p>}
                    <select className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 py-1 peer-[.error]:border-red-500 peer-[.error]:border-2 peer-[.error]:focus:ring-red-500 peer-[.error]:focus:ring-1" name="course" value={formData.course} onChange={handleChange}>
                        <option value="" disabled selected>-- Choose an option --</option>
                        <option value="React">React</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="TypeScript">TypeScript</option>
                    </select>
                </label>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default RegForm