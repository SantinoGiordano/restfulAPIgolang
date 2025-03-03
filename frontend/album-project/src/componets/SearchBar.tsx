import React, { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const fetchData = async (value: string) => {
    try {
      const response = await fetch("http://localhost:8080/albums");
      const json = await response.json();
      console.log(json); // Here, you may want to filter results based on `value`
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div>
      <input
        id="album-search"
        className="p-3 text-lg border-2 border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Search for albums..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

