import { useState, useEffect } from "react";

interface Album {
  id: number;
  title: string;
  price: number;
}

function ListOfAlbums() {
  const [message, setMessage] = useState<Album[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/albums");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMessage(data); // Assuming the API returns an array of Album objects
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="space-y-4 p-4">
    {message.length > 0 ? (
      message.map((item) => (
        <div key={item.id} className="border border-gray-300 p-4 rounded-lg shadow-md bg-white">
          <div className="text-xl font-bold text-gray-900">{item.title}</div>
          <div className="text-lg text-gray-600">${item.price}</div>
        </div>
      ))
    ) : (
      <div className="text-center text-gray-500 text-lg font-semibold">
        Albums could not be found
      </div>
    )}
  </div>
  );
}

export default ListOfAlbums;
