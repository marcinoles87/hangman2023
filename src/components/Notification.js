import React from 'react'

function Notification({showNotification}) {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''} `}>Notification :
        <p>you have already use this letter</p>
    </div>
  )
}

export default Notification