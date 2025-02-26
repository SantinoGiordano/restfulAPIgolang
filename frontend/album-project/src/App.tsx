import { useState, useEffect } from "react";

interface Album {
  id: number;
  title: string;
  price: number;
}

function App() {
  const [message, setMessage] = useState<Album[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/albums");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMessage(data); // Assuming the API returns an array of Album objects
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData()
  }, []);

  return (
    <div className="space-y-4 p-4">
      {message.map((item) => (
        <div key={item.id} className="border p-4 rounded-lg shadow-md">
          <div className="text-xl font-bold text-blue-600">{item.title}</div>
          <div className="text-lg text-green-600">${item.price}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
