import React from 'react-dom'
import './App.css';
import Header from './components/Header.js';
import Figure from './components/Figure.js';

function App() {
  return (
    <div className="App">
       <Header></Header>
       <div className='game-container'>
          <Figure></Figure>
       </div>

    </div>
  );
}

export default App;
