import React , {useEffect} from 'react'
import { checkWin } from '../helpers/helpers'

function Popup({correctLetters, wrongLetter , selectedWord , setPlayable}) {
    console.log(correctLetters)
    console.log(wrongLetter)
    console.log(setPlayable)

  let finalMessage = '';
  let finalMessageRevalWord = '';
  let playable = true;

  if(checkWin(correctLetters,wrongLetter,selectedWord) === 'win'){
    finalMessage = 'Congrats you win this game ! :)'
    playable = false;
  } else if( checkWin(correctLetters,wrongLetter,selectedWord) === 'lose'){
    finalMessage = 'you lose'
    finalMessageRevalWord = `unfortunately you lost this game :/ the word was : ${selectedWord} `

  }

  useEffect( () =>{
    setPlayable(playable)})
  

  return (

    
    <div className='popup-container' style={finalMessage !== '' ? {display:'flex'} : {}}>
        <div className='popup'>
            <h2>{finalMessage}</h2>
            <h3>{finalMessageRevalWord}</h3>
            <button>Play again</button>
        </div>
        </div>
  )
}

export default Popup