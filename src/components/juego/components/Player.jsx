// juego/components/Player.jsx
import React from 'react'
import churrero from '../imagenes/churreropix.png'
import churreroFeliz from '../imagenes/churrerofelizpix.png'
import churreroTriste from '../imagenes/churrerotristepix.png'
import churreroPaso1 from '../imagenes/churreropaso1.png'
import churreroPaso2 from '../imagenes/churreropaso2.png'

const Player = ({ x, size, facing, emotion = 'normal', stepIndex = 0 }) => {
  const getImage = () => {
    if (emotion === 'happy') return churreroFeliz
    if (emotion === 'sad') return churreroTriste

    return stepIndex === 0 ? churreroPaso1 : churreroPaso2
  }

  return (
    <img
      src={getImage()}
      alt="Churrero"
      className={`absolute transition-all duration-50 drop-shadow-2xl ${
        facing === 'right' ? 'scale-x-[-1]' : ''
      }`}
      style={{
        bottom: '10px',
        left: `${x}px`,
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  )
}

export default Player
