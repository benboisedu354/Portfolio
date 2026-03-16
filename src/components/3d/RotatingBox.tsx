import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
// import { useMousePosition } from '@hooks/useThreeHelpers'

export default function RotatingBox() {
  const meshRef = useRef<THREE.Mesh>(null)
//   const mousePos = useMousePosition()

  useFrame(() => {
    if (meshRef.current) {
    //   // Rotation basée sur la position de la souris
    //   meshRef.current.rotation.x = mousePos.y * Math.PI
    //   meshRef.current.rotation.y = mousePos.x * Math.PI

      // Rotation continue pour un effet de mouvement fluide
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
      
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color="#6366f1"
        wireframe
        emissive="#4f46e5"
        emissiveIntensity={0.5}
      />
    </mesh>
  )
}
