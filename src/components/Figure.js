import React from 'react'

function Figure({wrongLetter}) {
  const errors = wrongLetter.length;
  
  if(errors > 6){
    alert('niestety przegrales')
  }

  return (
    <svg height="250" width="200" className="figure-container">
    
    <line x1="60" y1="20" x2="140" y2="20" />
    <line x1="140" y1="20" x2="140" y2="50" />
    <line x1="60" y1="20" x2="60" y2="230" />
    <line x1="20" y1="230" x2="100" y2="230" />


    {errors > 0 && <circle cx="140" cy="70" r="20" className="figure-part" />}
    
    {errors > 1 &&<line x1="140" y1="90" x2="140" y2="150" className="figure-part" />}
    
    {errors > 2 && <line x1="140" y1="120" x2="120" y2="100" className="figure-part" />}
    {errors > 3 &&<line x1="140" y1="120" x2="160" y2="100" className="figure-part" />}

    {errors > 4 &&<line x1="140" y1="150" x2="120" y2="180" className="figure-part" />}
    {errors > 5 &&<line x1="140" y1="150" x2="160" y2="180" className="figure-part" />}
  </svg>
  )
}

export default Figure