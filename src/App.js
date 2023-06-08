import React from 'react-dom'
import './App.css';
import Header from './components/Header.js';
import Figure from './components/Figure.js';
import WrongLetters from './components/WrongLetters.js';
import Word from './components/Word';


const words = ['application' , 'programing' , 'wizard' , 'polska'] ;

let selectedWord = words[Math.floor(Math.random() * words.length)]
let playable = true;

const correctLetter = [];
const wrongLetter = [];

function App() {


  return (
    <div className="App">
       <Header></Header>
       <div className='game-container'>
          <Figure></Figure>
          <WrongLetters></WrongLetters>
          <Word></Word>
       </div>

    </div>
  );
}

export default App;
