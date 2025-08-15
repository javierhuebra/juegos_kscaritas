// juego/hooks/usePlayerMovement.js
import { useEffect, useRef, useState } from 'react'

export const usePlayerMovement = (
  initialX = window.innerWidth / 2,
  setStepIndex // <- nuevo argumento
) => {
  const [playerX, setPlayerX] = useState(initialX)
  const [facing, setFacing] = useState('left')
  const playerXRef = useRef(playerX)

  useEffect(() => {
    playerXRef.current = playerX
  }, [playerX])

  const movePlayer = (direction) => {
    const step = 30
    setFacing(direction)

    // Alternar paso si el callback existe
    if (setStepIndex) {
      setStepIndex((prev) => (prev === 0 ? 1 : 0))
    }

    setPlayerX((prev) => {
      const newX =
        direction === 'left'
          ? Math.max(0, prev - step)
          : Math.min(window.innerWidth - 50, prev + step)
      return newX
    })
  }

  return { playerX, playerXRef, facing, movePlayer }
}
