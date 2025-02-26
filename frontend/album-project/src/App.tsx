import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        
      } catch (error) {
        
      }
    }
  }, []);

  return (
      <div>
        {message.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
      </div>
    
  );
}

export default App;