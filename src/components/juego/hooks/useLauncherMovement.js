// juego/hooks/useLauncherMovement.js
import { useEffect, useRef, useState } from 'react'

export const useLauncherMovement = () => {
  const [launcherX, setLauncherX] = useState(100)
  const [launcherDirection, setLauncherDirection] = useState('right')
  const launcherXRef = useRef(launcherX)

  useEffect(() => {
    const interval = setInterval(() => {
      setLauncherX((prev) => {
        const step = 4
        let newX = prev

        if (launcherDirection === 'right') {
          newX = prev + step
          if (newX > window.innerWidth - 50) {
            setLauncherDirection('left')
            newX = window.innerWidth - 50
          }
        } else {
          newX = prev - step
          if (newX < 0) {
            setLauncherDirection('right')
            newX = 0
          }
        }

        launcherXRef.current = newX
        return newX
      })
    }, 16)

    return () => clearInterval(interval)
  }, [launcherDirection])

  return { launcherX, launcherXRef }
}
