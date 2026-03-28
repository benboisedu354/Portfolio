import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

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
  opacity?: number
}

export function Model({
  url,
  scale = 1,
  position = [0, -10, 0],
  rotation = [0, 0, 0],
  color,
  opacity,
}: ModelProps) {
  const group = useRef<THREE.Group>(null)
  const { scene, animations } = useGLTF(url)
  const clonedScene = scene.clone(true)
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

          const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material]

          materials.forEach((mat) => {
            if (
              mat instanceof THREE.MeshStandardMaterial ||
              mat instanceof THREE.MeshPhongMaterial
            ) {
              mat.transparent = true
              mat.opacity = opacity ?? 1
              if (mat.map) {
                mat.map.generateMipmaps = false
                mat.map.minFilter = THREE.LinearFilter
                mat.map.needsUpdate = true
              }

              if (color) {
                mat.color.set(color)
              }
            }
          })
        }
      })
    }

    // Centrer le modèle par rapport à son bounding box
    const box = new THREE.Box3().setFromObject(scene)
    const center = box.getCenter(new THREE.Vector3())
    scene.position.sub(center)
  }, [scene, color])

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      <primitive object={clonedScene} />
    </group>
  )
}

/**
 * Exemple : Modèle avec interactivité
 */
export function InteractiveModel({ url }: ModelProps) {
  const group = useRef<THREE.Group>(null)
  const { scene } = useGLTF(url)
  const clonedScene = scene.clone(true)

  const handleClick = () => {
    if (group.current) {
      group.current.rotation.y += Math.PI / 4
    }
  }

  return (
    <group ref={group} onClick={handleClick}>
      <primitive object={clonedScene} />
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
useGLTF.preload('/models/server3D/scene.gltf')
useGLTF.preload('/models/Laptop3D/scene.gltf')
