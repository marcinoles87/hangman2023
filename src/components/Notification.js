import React from 'react'

function Notification({showNotification}) {
  return (
    <div className={showNotification ? 'show' : ''} id='notification-container'>Notification :
        <p>you have already use this letter</p>
    </div>
  )
}

export default Notification