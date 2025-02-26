import { useState, useEffect } from "react";

interface Album {
  id: number;
  title: string;
  
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
    <div>
      {message.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </div>
  );
}

export default App;
