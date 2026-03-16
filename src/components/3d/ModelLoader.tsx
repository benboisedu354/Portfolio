import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

/**
 * Exemple : Charger et animer un modèle GLTF
 * 
 * Utilisation :
 * 1. Place ton modèle dans src/assets/models/
 * 2. Utilise : <Model url="/models/ton-modele.glb" />
 * 
 * Pour convertir un fichier glb en composant React :
 * npx gltfjsx ton-modele.glb
 */

interface ModelProps {
  url: string
  scale?: number | [number, number, number]
  position?: [number, number, number]
  rotation?: [number, number, number]
  color?: string
}

export function Model({ url, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0], color }: ModelProps) {
  const group = useRef<THREE.Group>(null)
  const { scene, animations } = useGLTF(url)
  const { actions } = useAnimations(animations, group)

  // Jouer les animations si disponibles
  useEffect(() => {
    const firstAnimation = actions[Object.keys(actions)[0]]
    if (firstAnimation) {
      firstAnimation.play()
    }
  }, [actions])

  // Appliquer la couleur à tous les matériaux et centrer l'objet
  useEffect(() => {
    if (color) {
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh
          if (mesh.material) {
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach((mat) => {
                if (mat instanceof THREE.MeshStandardMaterial || mat instanceof THREE.MeshPhongMaterial) {
                  mat.color.set(color)
                }
              })
            } else if (mesh.material instanceof THREE.MeshStandardMaterial || mesh.material instanceof THREE.MeshPhongMaterial) {
              mesh.material.color.set(color)
            }
          }
        }
      })
    }

    // Centrer le modèle par rapport à son bounding box
    const box = new THREE.Box3().setFromObject(scene)
    const center = box.getCenter(new THREE.Vector3())
    scene.position.sub(center)
  }, [scene, color])

  // Rotation automatique
  useFrame(() => {
    if (group.current) {
      group.current.rotation.x += 0.005
      group.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      <primitive object={scene} />
    </group>
  )
}

/**
 * Exemple : Modèle avec interactivité
 */
export function InteractiveModel({ url }: ModelProps) {
  const group = useRef<THREE.Group>(null)
  const { scene } = useGLTF(url)

  const handleClick = () => {
    if (group.current) {
      group.current.rotation.y += Math.PI / 4
    }
  }

  return (
    <group ref={group} onClick={handleClick}>
      <primitive object={scene} />
    </group>
  )
}

/**
 * Exemple : Modèle avec chargement et fallback
 */
export function LoaderModel({ url }: ModelProps) {
  const group = useRef<THREE.Group>(null)

  try {
    const { scene } = useGLTF(url)
    return <primitive ref={group} object={scene} />
  } catch (error) {
    console.error('Erreur de chargement du modèle:', error)
    // Fallback : affiche un cube
    return (
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="gray" />
      </mesh>
    )
  }
}

// Precharger les modèles
useGLTF.preload('/models/ton-modele.glb')
