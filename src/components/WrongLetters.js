import React from 'react'

function WrongLetters({wrongLetter }) {
  return (
    <div className='wrongletters-container'>
        <div className='wrong-letters'>
          {wrongLetter.length > 0 && <p>Wrong</p>}
          {wrongLetter
          .map( (letter , index) => <span key={index}>{letter}</span>)
          .reduce( (prev , current) => prev === null ? [current] : [prev , ',' , current] , null)}
        </div>
        </div>
  )
}

export default WrongLetters