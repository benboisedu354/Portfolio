// Exemple d'utilisation personnalisée de hooks React Three Fiber

import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import * as THREE from 'three'

/**
 * Hook personnalisé pour tracker la position de la souris
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      setPosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return position
}

/**
 * Hook pour faire la rotation d'un objet de manière fluide 
 */



// Autres hooks personnalisés pour la 3D peuvent être ajoutés ici, comme useCanvasSize, useSmoothAnimation, etc.

/**
 * Hook pour obtenir la taille du canvas
 */
export function useCanvasSize() {
  const { gl } = useThree()
  return {
    width: gl.domElement.clientWidth,
    height: gl.domElement.clientHeight,
  }
}

/**
 * Hook pour les animations fluides
 */
export function useSmoothAnimation(ref: React.RefObject<THREE.Mesh>, target: number, step = 0.05) {
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += (target - ref.current.rotation.y) * step
    }
  })
}
