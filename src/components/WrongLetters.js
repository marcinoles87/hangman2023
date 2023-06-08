import React from 'react'

function WrongLetters({wrongLetter}) {
  return (
    <div className='wrongletters-container'>
        <div className='wrong-letters'>
          {wrongLetter}
        </div>
        </div>
  )
}

export default WrongLetters