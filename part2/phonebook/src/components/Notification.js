import React, { useState } from 'react';

const Notification = ({ message }) => {

  const [isError, setIsEror] = useState(false)

  if (message === null) {
    return null
  }

  if (new RegExp(`^Error:`).test(message)) setIsEror(true)
  else setIsEror(false)


  const notificationStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  }

  const errorStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  }

  return (
    <div style={isError ? errorStyle : notificationStyle}>
      {message}
    </div>
  )
}

export default Notification;