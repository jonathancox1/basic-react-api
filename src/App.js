import React from 'react';
import './App.css';
import DogImage from './components/DogImage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Doggs</h1>
        <small>Click image for a random dog</small>
        <br></br>
      </header>
      <DogImage />
    </div>
  );
}

export default App;
