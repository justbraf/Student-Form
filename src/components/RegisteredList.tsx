import React from 'react'

const RegisteredList = ({entries}) => {
    return (
        <div className="flex gap-4 p-4 w-6/8 flex-wrap justify-center">
            {entries.map((entry, index) => (
                <div key={index} className="w-48 border border-gray-300 p-2 rounded mb-2 shadow-lg">
                    <p className="font-bold text-xl">{entry.name}</p>
                    <p className="text-gray-600">{entry.email}</p>
                    <p className="text-blue-500 font-semibold">{entry.course}</p>
                </div>
            ))}
        </div>
    )
}

export default RegisteredList