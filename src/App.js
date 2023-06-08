import React from 'react-dom'
import './App.css';
import Header from './components/Header.js';
import Figure from './components/Figure.js';
import WrongLetters from './components/WrongLetters.js';
import Word from './components/Word';


const words = ['application' , 'programing' , 'wizard' , 'polska'] ;
console.log(words)
let selectedWord = words[Math.floor(Math.random() * words.length)]
console.log(selectedWord)

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
