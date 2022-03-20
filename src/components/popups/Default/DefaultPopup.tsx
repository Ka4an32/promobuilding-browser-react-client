import React from 'react'

const DefaultPopup = ({ config }: any) => {
  return (
    <div>
      <h3>{config.title}</h3>
      <p>{config.message}</p>
    </div>
  )
}

export default DefaultPopup
