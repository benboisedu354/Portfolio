import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import * as THREE from 'three'

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

export function useCanvasSize() {
  const { gl } = useThree()
  return {
    width: gl.domElement.clientWidth,
    height: gl.domElement.clientHeight,
  }
}

export function useSmoothAnimation(ref: React.RefObject<THREE.Mesh>, target: number, step = 0.05) {
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += (target - ref.current.rotation.y) * step
    }
  })
}
