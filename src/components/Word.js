import React from 'react'

function Word({ selectedWord , correctLetters}) {
 
  return (
    <div className='word-container'>
        <div className='word'>
          {selectedWord.split('').map( (letter , index) => {
            return(
            <span className='letter' key={index}>
              {correctLetters.includes(letter) ? letter : ''}
            </span>
            )
          })}
        </div>
    </div>
  )
}

export default Word