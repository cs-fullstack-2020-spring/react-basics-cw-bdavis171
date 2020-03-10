import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hulu from './Hulu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='box'>
          <h1>Hulu Shows</h1>
          <Hulu showTitle='One Piece' numberOfSeason='1' genre='Anime' rating='4/5'></Hulu>
        </div>
      </header>
    </div>
  );
}

export default App;
