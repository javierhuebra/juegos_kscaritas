// juego/components/Controls.jsx
import React from 'react'
import flecha from '../imagenes/flecha.png'

const Controls = ({ onMoveLeft, onMoveRight }) => (
  <div className="flex w-full bg-orange-500">
    <button
      onClick={onMoveLeft}
      className="w-1/2 py-6 flex justify-center items-center active:bg-gray-700"
    >
      <img src={flecha} alt="Izquierda" className="h-[64px]" />
    </button>
    <button
      onClick={onMoveRight}
      className="w-1/2 py-6 flex justify-center items-center active:bg-gray-700"
    >
      <img src={flecha} alt="Derecha" className="h-[64px] transform scale-x-[-1]" />
    </button>
  </div>
)

export default Controls
