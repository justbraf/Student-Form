import { useState } from 'react'

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: ""
  })
  const [errors, setErrors] = useState({})
  const [entries, setEntries] = useState([])

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
    if (!formData.email.includes("@"))
      newErrors.email = "Enter a valid email."
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
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" name="name" value={formData.name} onChange={handleChange} placeholder="Student Name" />
        <input className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
        <select className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" name="course" value={formData.course} onChange={handleChange}>
          <option value="react">React</option>
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
        </select>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" type="submit">Submit</button>
      </form>
      <div className="flex gap-4 p-4">
        {entries.map((entry, index) => (
          <div key={index} className="w-48 border border-gray-300 p-2 rounded mb-2">
            <p>{entry.name}</p>
            <p>{entry.email}</p>
            <p>{entry.course}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App