
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(`${data.setup} ${data.punchline}`);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Joke Generator</h1>
        <button onClick={fetchJoke}>Get Joke</button>
        <div className="joke-container">
          {joke && <p>{joke}</p>}
        </div>
      </header>
    </div>
  );
}

export default App;

