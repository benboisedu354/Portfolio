// Fonctions utilitaires pour Three.js

import * as THREE from 'three'

/**
 * Crée une géométrie personnalisée
 */
export function createCustomGeometry() {
  const geometry = new THREE.BufferGeometry()
  // Ajouter tes sommets, faces, etc.
  return geometry
}

/**
 * Génère une couleur aléatoire
 */
export function randomColor(): string {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

/**
 * Calcule la distance entre deux points 3D
 */
export function distance(
  p1: THREE.Vector3,
  p2: THREE.Vector3
): number {
  return p1.distanceTo(p2)
}

/**
 * Crée un matériau avec gradient
 */
export function createGradientMaterial(colorA: string, colorB: string) {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256

  const ctx = canvas.getContext('2d')
  if (!ctx) return new THREE.MeshStandardMaterial({ color: colorA })

  const gradient = ctx.createLinearGradient(0, 0, 256, 0)
  gradient.addColorStop(0, colorA)
  gradient.addColorStop(1, colorB)

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 256, 256)

  const texture = new THREE.CanvasTexture(canvas)
  return new THREE.MeshStandardMaterial({ map: texture })
}
