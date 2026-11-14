import { useState } from 'react'
import RegForm from './components/RegForm'
import RegisteredList from './components/RegisteredList'

const App = () => {
  const [entries, setEntries] = useState([])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <RegForm setEntries={setEntries}/>
      <RegisteredList entries={entries}/>
    </div>
  )
}

export default App