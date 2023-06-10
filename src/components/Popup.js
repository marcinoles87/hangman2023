import React from 'react'

function Popup({correctLetters, wrongLetter , selectedWord}) {
    console.log(correctLetters.length)
    console.log(wrongLetter)
    console.log(selectedWord.length)



  return (

    
    <div className='popup-container'>
        <div className='popup'>
            <h2 id='final-message'></h2>
            <h3 id='final-message-word'></h3>
            <button id='play-button'>Play again</button>
        </div>
        </div>
  )
}

export default Popup