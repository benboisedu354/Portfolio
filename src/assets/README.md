// Exemple d'utilisation des assets dans le portfolio

// ==================
// 1. Importer des images
// ==================

import profileImage from '@assets/images/profile.jpg'
import projectImage from '@assets/images/projects/projet-1.png'

export function MyComponent() {
  return <img src={profileImage} alt="Profile" />
}

// ==================
// 2. Charger des modèles 3D
// ==================

import { Canvas } from '@react-three/fiber'
import { Model } from '@components/3d/ModelLoader'

export function Scene3D() {
  return (
    <Canvas>
      <Model url="/models/mon-modele.glb" scale={2} />
    </Canvas>
  )
}

// ==================
// 3. Utiliser une Font personnalisée
// ==================

// Ajouter dans src/styles/index.css :
/*
@font-face {
  font-family: 'MaFont';
  src: url('/fonts/ma-font.ttf') format('truetype');
}

body {
  font-family: 'MaFont', sans-serif;
}
*/

// ==================
// 4. Importer des données JSON
// ==================

import projectsData from '@assets/data/projects.json'

export function ProjectsList() {
  return projectsData.map((project) => <Project key={project.id} {...project} />)
}

// ==================
// 5. Structure recommandée des assets
// ==================

/*
src/assets/
├── images/
│   ├── profile.jpg
│   ├── hero-bg.png
│   └── projects/
│       ├── projet-1.png
│       └── projet-2.png
├── models/
│   ├── cube.glb
│   └── sphere.glb
├── data/
│   ├── projects.json
│   └── experiences.json
├── fonts/
│   ├── title-font.ttf
│   └── body-font.ttf
└── videos/
    └── background.mp4
*/

// ==================
// 6. Importer depuis les assets avec les alias
// ==================

// ✅ Recommandé
import logo from '@assets/images/logo.png'

// ❌ À éviter
import logo from '../../../assets/images/logo.png'
