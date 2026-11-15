import { useState } from 'react'
import RegForm from './components/RegForm'
import RegisteredList from './components/RegisteredList'
import type { EntryList } from './logic/interfaces'

const App = () => {
  const [entries, setEntries] = useState<EntryList[] | []>([])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <RegForm setEntries={setEntries}/>
      <RegisteredList entries={entries} setEntries={setEntries}/>
    </div>
  )
}

export default App