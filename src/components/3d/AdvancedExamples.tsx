import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

/**
 * Exemple avancé : Un système de particules
 */
export function ParticleSystem() {
  const pointsRef = useRef<THREE.Points>(null)

  // Créer les particules
  const particlesGeometry = new THREE.BufferGeometry()
  const particlesCount = 5000
  const positionArray = new Float32Array(particlesCount * 3)

  for (let i = 0; i < particlesCount * 3; i++) {
    positionArray[i] = (Math.random() - 0.5) * 100
  }

  particlesGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(positionArray, 3)
  )

  // Animer les particules
  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.0001
      pointsRef.current.rotation.y += 0.0002
    }
  })

  return (
    <points ref={pointsRef} geometry={particlesGeometry}>
      <pointsMaterial size={0.1} color="#6366f1" />
    </points>
  )
}

/**
 * Exemple : Torus animé avec reflet
 */
export function AnimatedTorus() {
  const torusRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.005
      torusRef.current.rotation.y += 0.008
      torusRef.current.scale.y = 1 + Math.sin(Date.now() * 0.001) * 0.1
    }
  })

  return (
    <mesh ref={torusRef}>
      <torusGeometry args={[2, 0.8, 16, 100]} />
      <meshStandardMaterial
        color="#ff6b6b"
        metalness={0.8}
        roughness={0.2}
        emissive="#ff6b6b"
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}

/**
 * Exemple : Wireframe dynamique
 */
export function WireframeEarth() {
  const earthRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001
      earthRef.current.rotation.z += 0.0001
    }
  })

  return (
    <mesh ref={earthRef}>
      <icosahedronGeometry args={[2, 4]} />
      <meshStandardMaterial
        color="#4f46e5"
        wireframe
        emissive="#6366f1"
        emissiveIntensity={0.5}
      />
    </mesh>
  )
}

/**
 * Exemple : Géométrie personnalisée
 */
export function CustomPyramid() {
  const pyramidRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (pyramidRef.current) {
      pyramidRef.current.rotation.x += 0.01
      pyramidRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={pyramidRef}>
      <coneGeometry args={[2, 3, 4]} />
      <meshStandardMaterial
        color="#a855f7"
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  )
}

/**
 * Cubes multiples avec animations décalées
 */
export function CubeGrid({ count = 5 }) {
  const cubes: React.ReactNode[] = []

  for (let x = -count; x <= count; x++) {
    for (let y = -count; y <= count; y++) {
      cubes.push(
        <AnimatingCube
          key={`${x}-${y}`}
          position={[x * 1.5, y * 1.5, 0]}
          delay={x + y}
        />
      )
    }
  }

  return <>{cubes}</>
}

interface AnimatingCubeProps {
  position: [number, number, number]
  delay: number
}

function AnimatingCube({ position, delay }: AnimatingCubeProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      const time = Date.now() * 0.001 + delay
      meshRef.current.rotation.x = Math.sin(time) * 0.5
      meshRef.current.rotation.y = Math.cos(time) * 0.5
      meshRef.current.scale.z = 0.5 + Math.sin(time * 2) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial
        color={new THREE.Color().setHSL(delay * 0.05, 0.8, 0.6)}
        emissive={new THREE.Color().setHSL(delay * 0.05, 0.8, 0.4)}
        emissiveIntensity={0.2}
      />
    </mesh>
  )
}
