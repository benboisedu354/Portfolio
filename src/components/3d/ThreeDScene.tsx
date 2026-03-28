import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Model } from './ModelLoader'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

export default function ThreeDScene() {
  const models = [
    {
      url: '/models/server3D/scene.gltf',
      scale: 25,
      position: [0, -10, 0] as [number, number, number],
      rotation: [0, Math.PI / 0.5, 0] as [number, number, number],
    },
    {
      url: '/models/Laptop3D/scene.gltf',
      scale: 25,
      position: [0, 0, 0] as [number, number, number],
      rotation: [0, Math.PI / 0.5, 0] as [number, number, number],
    },
  ]

  const [index, setIndex] = useState(0)
  const [, setPrevIndex] = useState(0)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index)
      setIndex((prev) => (prev + 1) % models.length)

      let start: number | null = null
      const duration = 1000
      const easeInOut = (t: number) => t * t * (3 - 2 * t)

      const animate = (time: number) => {
        if (!start) start = time
        const progress = (time - start) / duration

        if (progress < 1) {
          setOpacity(easeInOut(progress))
          requestAnimationFrame(animate)
        } else {
          setOpacity(1)
        }
      }

      setOpacity(0)
      requestAnimationFrame(animate)
    }, 5000)

    return () => clearInterval(interval)
  }, [index])

  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 150]} />
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} />
      <Model {...models[index]} opacity={opacity} />
      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  )
}
