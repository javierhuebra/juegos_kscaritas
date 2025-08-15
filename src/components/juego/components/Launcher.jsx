// juego/components/Launcher.jsx
import React from 'react'
import liana from '../imagenes/liana.png'

const Launcher = ({ x }) => (
  <>
    <div
      className="absolute top-12 h-[30px] w-[30px] bg-pink-500 rounded"
      style={{ left: `${x}px` }}
    />
    <div
      className="absolute top-20 h-[30px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${liana})` }}
    />
  </>
)

export default Launcher
