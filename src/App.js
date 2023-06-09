import React , {useState , useEffect} from 'react'
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

  const [playable , setPlayable] = useState(true);
  const [correctLetters , setCorrectletters] = useState([]);
  const [wrongLetter , setWrongLetters] = useState([]);


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
              //notification
            }

          } else {
            if(!wrongLetter.includes(letter)){
              setWrongLetters(
                wrongLetter => [...wrongLetter , letter]
              );
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
       
          <Figure wrongLetters={wrongLetter}></Figure>
          <WrongLetters
           wrongLetter={wrongLetter}
          ></WrongLetters>
          <Word
          selectedWord={selectedWord} 
          correctLetters={correctLetters}
          ></Word>
       </div>

    </div>
  );
}

export default App;
