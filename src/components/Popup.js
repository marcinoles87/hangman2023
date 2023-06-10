import React from 'react'

function Popup({correctLetters, wrongLetter , selectedWord , setPlayable}) {
    console.log(correctLetters.length)
    console.log(wrongLetter)
    console.log(selectedWord.length)

  let finalMessage = '';
  let finalMessageRevalWord = '';

  return (

    
    <div className='popup-container'>
        <div className='popup'>
            <h2>{finalMessage}</h2>
            <h3>{finalMessageRevalWord}</h3>
            <button>Play again</button>
        </div>
        </div>
  )
}

export default Popup