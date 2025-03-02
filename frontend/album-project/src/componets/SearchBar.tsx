import React, { useState } from 'react'

const SearchBar = () => {

    const [input,setInput] = useState("")

    const fetchData = (value) => {
        fetch("http://localhost:8080/albums")
    }
    const handleCahnge = (value)=>{
        setInput(value)
        fetchData(avlue)
    }

return (
    <div>
        <input
        id="album-search"
        className="p-3 text-lg border-2 border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Search for albums..." 
        value={input} 
        onChange={(e)=> handleCahnge(e.target.value)}
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