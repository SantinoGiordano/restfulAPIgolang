import React, { useState } from 'react'

const SearchBar = () => {

    const [input,setInput] = useState("")

return (
    <div>
        <input
        id="album-search"
        className="p-3 text-lg border-2 border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Search for albums..." 
        value={input} 
        onChange={(e)=> setInput(e.target.value)}
        />
    </div>
  )
}

export default SearchBar


{/* <input
id="album-search"
className="p-3 text-lg border-2 border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
type="text"
placeholder="Search for albums..." /> */}