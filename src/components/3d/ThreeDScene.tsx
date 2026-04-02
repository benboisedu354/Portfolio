
import { Canvas } from '@react-three/fiber'
import { Model } from './ModelLoader'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

export default function ThreeDScene() {
  const models = [
    {
      url: '/models/Laptop3D/scene.gltf',
      scale: 30,
      position: [0, -0, 0] as [number, number, number],
      rotation: [0, -1, 0] as [number, number, number],
    },
  ]

  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 150]} />
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} />
      {models.map((model, index) => (
        <Model
          key={index}
          url={model.url}
          scale={model.scale}
          position={model.position}
          rotation={model.rotation}
        />
      ))}

      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  )
}
