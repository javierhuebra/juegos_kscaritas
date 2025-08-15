// juego/Juego.jsx
import React, { useState, useEffect } from 'react'
import background from './imagenes/background.png'
import { objectTypes } from './utils/objectTypes'
import { usePlayerMovement } from './hooks/usePlayerMovement'
import { useLauncherMovement } from './hooks/useLauncherMovement'
import Player from './components/Player'
import Launcher from './components/Launcher'
import FallingObject from './components/FallingObject'
import Controls from './components/Controls'

const Juego = () => {
    const [hasStarted, setHasStarted] = useState(false)
    const [fallingObjects, setFallingObjects] = useState([])
    const [score, setScore] = useState(0)
    const [playerSize, setPlayerSize] = useState(120)
    const [playerEmotion, setPlayerEmotion] = useState('normal') // 'normal' | 'happy' | 'sad'
    const [stepIndex, setStepIndex] = useState(0) // 0 o 1


    const { playerX, playerXRef, facing, movePlayer } = usePlayerMovement(undefined, setStepIndex)

    const { launcherX, launcherXRef } = useLauncherMovement()

    const [viewportHeight, setViewportHeight] = useState(window.innerHeight)
    useEffect(() => {
        const updateHeight = () => setViewportHeight(window.innerHeight)
        window.addEventListener('resize', updateHeight)
        return () => window.removeEventListener('resize', updateHeight)
    }, [])

    useEffect(() => {
        window.scrollTo(0, 1)
    }, [])

    useEffect(() => {
        if (!hasStarted) return

        let timeoutId

        const spawnObject = () => {
            const random = Math.floor(Math.random() * objectTypes.length)
            const randomSpeed = Math.random() * 2 + 1

            setFallingObjects((prev) => [
                ...prev,
                {
                    id: Date.now() + Math.random(),
                    x: launcherXRef.current + 10,
                    y: 50,
                    speed: randomSpeed,
                    ...objectTypes[random],
                },
            ])

            const nextInterval = Math.random() * 1000 + 1000
            timeoutId = setTimeout(spawnObject, nextInterval)
        }

        spawnObject()

        return () => clearTimeout(timeoutId)
    }, [hasStarted])

    useEffect(() => {
        const moveObjects = () => {
            setFallingObjects((prevObjects) =>
                prevObjects
                    .map((obj) => {
                        const newY = obj.y + obj.speed

                        const collides =
                            newY > window.innerHeight - 160 &&
                            obj.x < playerXRef.current + 70 &&
                            obj.x + 50 > playerXRef.current

                        if (collides) {
                            setScore((prev) => prev + obj.points)

                            if (obj.points > 0) {
                                setPlayerEmotion('happy')
                            } else {
                                setPlayerEmotion('sad')
                            }

                            setTimeout(() => setPlayerEmotion('normal'), 500)

                            if (obj.effect === 'grow') {
                                setPlayerSize(130)
                                setTimeout(() => setPlayerSize(120), 100)
                            } else if (obj.effect === 'shrink') {
                                setPlayerSize(110)
                                setTimeout(() => setPlayerSize(120), 100)
                            }

                            return null
                        }


                        if (newY > window.innerHeight - 100) return null

                        return { ...obj, y: newY }
                    })
                    .filter(Boolean)
            )

            requestAnimationFrame(moveObjects)
        }

        if (hasStarted) {
            moveObjects()
        }
    }, [hasStarted])

    const goFullscreen = () => {
        const elem = document.documentElement
        if (elem.requestFullscreen) elem.requestFullscreen()
        else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen()
        else if (elem.msRequestFullscreen) elem.msRequestFullscreen()
    }

    const handleStart = () => {
        goFullscreen()
        setHasStarted(true)
    }

    return (
        <>
            {!hasStarted && (
                <div className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50 text-white">
                    <h1 className="text-3xl mb-6">🎮 Juego del Churrero</h1>
                    <button
                        onClick={handleStart}
                        className="px-6 py-3 bg-orange-600 rounded text-xl shadow-md hover:bg-orange-500 transition"
                    >
                        Iniciar juego en pantalla completa
                    </button>
                </div>
            )}

            <div
                className="flex flex-col w-screen bg-black text-white select-none overflow-hidden"
                style={{ height: `${viewportHeight}px` }}
            >
                <div
                    className="relative flex-1 bg-cover bg-center"
                    style={{ backgroundImage: `url(${background})` }}
                >
                    <div className="absolute top-4 left-4 text-xl">Puntaje: {score}</div>

                    <Launcher x={launcherX} />

                    <Player
                        x={playerX}
                        size={playerSize}
                        facing={facing}
                        emotion={playerEmotion}
                        stepIndex={stepIndex}
                    />


                    {fallingObjects.map((obj) => (
                        <FallingObject key={obj.id} obj={obj} />
                    ))}
                </div>

                <Controls onMoveLeft={() => movePlayer('left')} onMoveRight={() => movePlayer('right')} />
            </div>
        </>
    )
}

export default Juego
