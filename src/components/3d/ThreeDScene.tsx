import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { Model } from './ModelLoader'

export default function ThreeDScene() {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 150]} />

      {/* Lumières multiples pour un meilleur éclairage */}
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} />
      <directionalLight position={[-10, -10, 5]} intensity={0.8} />
      <pointLight position={[20, 20, 20]} intensity={1} />
      <pointLight position={[-20, -20, -20]} intensity={0.8} />

      {/* Modèle avec interaction */}
      <Model url="/models/scene.gltf" scale={20} color="#6366f1" />

      <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
    </Canvas>
  )
}
