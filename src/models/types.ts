// Types et interfaces pour le portfolio

export interface Project {
  id: string
  title: string
  description: string
  image?: string
  tags: string[]
  link: string
  github?: string
  demo?: string
}

export interface BlogPost {
  id: string
  title: string
  description: string
  content: string
  date: Date
  tags: string[]
  author: string
}

export interface Skill {
  name: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  category: string
}

export interface Contact {
  name: string
  email: string
  message: string
}

export interface Experience {
  company: string
  position: string
  startDate: Date
  endDate?: Date
  description: string
  skills: string[]
}

// Types pour Three.js/React Three Fiber
export interface ThreeDObject {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: [number, number, number]
}

export interface CameraConfig {
  position: [number, number, number]
  fov?: number
  near?: number
  far?: number
}
