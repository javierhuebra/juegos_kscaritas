// juego/components/FallingObject.jsx
import React from 'react'

const FallingObject = ({ obj }) => (
  <img
    src={obj.image}
    alt="Objeto"
    className="absolute"
    style={{
      top: `${obj.y}px`,
      left: `${obj.x}px`,
      ...obj.style,
    }}
  />
)

export default FallingObject
