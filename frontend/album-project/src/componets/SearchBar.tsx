import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!input.trim()) {
        setResults([]);
        return;
      }

      try {
        const response = await fetch("http://localhost:8080/albums");
        const json = await response.json();
        const filteredResults = json.filter((item) =>
          item?.title?.toLowerCase().includes(input.toLowerCase())
        );
        setResults(filteredResults);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const timeoutId = setTimeout(fetchData, 500); // Debounce for 500ms
    return () => clearTimeout(timeoutId);
  }, [input]);

  return (
    <div className="relative w-80">
      <input
        id="album-search"
        className="input input-bordered input-lg w-full shadow-lg focus:ring focus:ring-blue-400"
        type="text"
        placeholder="Search for albums..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      
      {input && (
        <ul className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden z-50">
          {results.length > 0 ? (
            results.map((album, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer transition-all"
              >
                {album.title}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
