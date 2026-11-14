import { useState } from 'react'

const RegForm = ({setEntries}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        course: ""
      })
    const [errors, setErrors] = useState({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const validate = () => {
        const newErrors = {}
        if (!formData.name.trim())
            newErrors.name = "Name is required."
        if (!formData.email.includes("@") || !formData.email.includes("."))
            newErrors.email = "Enter a valid email."
        if (!formData.course)
            newErrors.course = "Please select a course."
        return newErrors
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 py-1" name="name" value={formData.name} onChange={handleChange} placeholder="Student Name" />
                <input className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 py-1" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
                <select className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 py-1" name="course" value={formData.course} onChange={handleChange}>
                    <option value="" disabled selected>-- Choose an option --</option>
                    <option value="React">React</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="TypeScript">TypeScript</option>
                </select>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default RegForm