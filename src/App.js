import React , {useState , useEffect} from 'react'
import './App.css';
import Header from './components/Header.js';
import Figure from './components/Figure.js';
import WrongLetters from './components/WrongLetters.js';
import Word from './components/Word';
import {showNotification as show} from './helpers/helpers';
import Notification from './components/Notification';
import Popup from './components/Popup';

const words = ['real' , 'hutnik' , 'marcel' , 'polska'] ;

let selectedWord = words[Math.floor(Math.random() * words.length)]
let playable = true;

const correctLetter = [];
const wrongLetter = [];

console.log(correctLetter.length)
console.log(selectedWord.length)



function App() {

  const [playable , setPlayable] = useState(true);
  const [correctLetters , setCorrectletters] = useState([]);
  const [wrongLetter , setWrongLetters] = useState([]);
  const [showNotification , setShowNotification] = useState(false)



  useEffect( () => {

    const handleKeydown = event => {
      const {key , keyCode} = event;
       if( playable && keyCode >= 65 && keyCode <= 95 ) {
          const letter = key.toLowerCase();

          if(selectedWord.includes(letter)){
            if(!correctLetter.includes(letter)){
              setCorrectletters(
                currentLetter => [...currentLetter,letter]
              );
            } else {
              show(setShowNotification)
            }

          } else {
            if(!wrongLetter.includes(letter)){
              setWrongLetters(
                wrongLetter => [...wrongLetter , letter]
              );
            }else {
              show(setShowNotification)
            }
          }
       }
    } 
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  } , [correctLetter , wrongLetter , playable] );

  return (
    <div className="App">
       <Header></Header>
       <div className='game-container'>
       
          <Figure wrongLetter={wrongLetter}></Figure>
          <WrongLetters
           wrongLetter={wrongLetter}
          ></WrongLetters>
          <Word
          selectedWord={selectedWord} 
          correctLetters={correctLetters}
          ></Word>
          <Popup></Popup>
          <Notification></Notification>
       </div>

    </div>
  );
}

export default App;
