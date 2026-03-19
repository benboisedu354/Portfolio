export interface Project {
  image: string | undefined
  title: string
  description: string
  tags: string[]
  link: string
}

export interface language {
  lang: string
  level: string
  icon: string
}

export interface otherProject {
  title: string
  tech: string
  icon: string
}

export interface TimelineEvent {
  year: string
  title: string
  description: string
  type: 'main' | 'milestone'
  branches: {
    title: string
    description: string
    icon: string
  }[]
}

export interface skill {
  [index: number]: string
}

export const projects: Project[] = [
  {
    title: 'SmartPantry',
    description: 'Application de gestion de stock alimentaire pour éviter le gaspillage',
    tags: ['React', 'Laravel', 'MySQL'],
    link: 'https://github.com/benboisedu354/SmartPantry',
    image: undefined,
  },
  {
    title: 'Dailies',
    description:
      'Application mobile de suivi des tâches quotidiennes avec notifications et graphiques de progression',
    tags: ['Kotlin', 'Android', 'Sqlite'],
    link: 'https://github.com/benboisedu354/Dailies_Kotlin',
    image:
      'https://github.com/benboisedu354/Dailies_Kotlin/blob/main/app/src/main/res/drawable/logo_appli.png?raw=true',
  },
  {
    title: 'Labyrinthe Python',
    description: 'Jeu de labyrinthe en Python avec Pygame, généré aléatoirement à chaque partie',
    tags: ['Python', 'Pygame'],
    link: 'https://github.com/benboisedu354/pygame_laby',
    image: undefined,
  },
  {
    title: 'MatterCrafter',
    description:
      "Jeu de fusion d'éléments en VR développé avec Unity, où les joueurs peuvent créer de nouveaux éléments en combinant des matériaux de base",
    tags: ['Unity', 'VR', 'C#'],
    link: 'https://github.com/maximelegru/MatterCrafter',
    image: undefined,
  },
  {
    title: 'Portfolio Personnel',
    description: 'Site portfolio interactif avec animations 3D',
    tags: ['React', 'Three.js', 'Tailwind CSS'],
    link: 'https://github.com/benboisedu354/Portfolio',
    image: undefined,
  },
]

export const languages: language[] = [
  { lang: 'Français', level: 'Langue maternelle', icon: '🇫🇷' },
  { lang: 'Anglais', level: 'B2 / C1', icon: '🇬🇧' },
  { lang: 'Autres', level: 'B1 / B2', icon: '🌍' },
]

export const otherProjects: otherProject[] = [
  {
    title: 'Application Mobile de Voyage',
    tech: 'React Native · Laravel · MySQL',
    icon: '✈️',
  },
  {
    title: 'Gestion du Garde-manger',
    tech: 'React · Python · Générateur de recettes',
    icon: '🍳',
  },
  {
    title: 'Script de Cybersécurité',
    tech: 'Python · C#',
    icon: '🔐',
  },
  {
    title: 'Bot Conversationnel',
    tech: 'React · Laravel · MySQL',
    icon: '🤖',
  },
]

export const skills: string[] = [
  'React & Vue.js',
  'React Three Fiber & Three.js',
  'Laravel & PHP',
  'Python, Pygame, FastAPI',
  'C# & .NET',
  'Kotlin & Android',
  'React Native',
  'JavaScript & TypeScript',
  'NodeJS & Express',
  'Tailwind CSS',
  'MySQL & Bases de données',
  'Git & GitHub',
  'Figma & Design UI/UX',
  'Docker & Conteneurisation',
  'Unity & Développement de jeux',
]

export const timeline: TimelineEvent[] = [
  {
    year: '2022',
    title: 'Baccalauréat Scientifique',
    description: 'Lycée Gambetta - Arras | Mention Bien | 2019 - 2022',
    type: 'milestone',
    branches: [
      {
        title: 'Passion pour la technologie',
        description:
          "Découverte des sciences et de l'informatique, apprentissage de la programmation en autodidacte",
        icon: '🔬',
      },
      {
        title: 'Projets personnels',
        description: 'Création de petits projets pour apprendre et expérimenter',
        icon: '💡',
      },
    ],
  },
  {
    year: '2022',
    title: 'Début du BUT MMI',
    description: "IUT de Lens - Métiers du multimédia et de l'internet",
    type: 'main',
    branches: [
      {
        title: 'Premiers projets web',
        description: 'Apprentissage du web et de la gestion de réseaux',
        icon: '💻',
      },
      {
        title: 'Travail en groupe',
        description: 'Travail en groupe sur des projets multimédias',
        icon: '👥',
      },
      {
        title: 'Découverte de nouvelles technologies',
        description: 'Exploration de React, Laravel, NodeJS et autres outils du développement web',
        icon: '🚀',
      },
    ],
  },
  {
    year: '2024',
    title: 'Stage - Comité des fêtes de Foncquevillers',
    description: 'Stagiaire Développeur Web | Avril - Juin 2024',
    type: 'main',
    branches: [
      {
        title: 'Maquette & Design',
        description: "Création d'une maquette de site professionnel avec Figma",
        icon: '🎨',
      },
      {
        title: 'Développement React',
        description: 'Développement avec React et Tailwind CSS',
        icon: '⚛️',
      },
      {
        title: 'Apprentisage de Typescript',
        description: 'Apprentissage du langage Typescript pour un bot discord',
        icon: '📝',
      },
    ],
  },
  {
    year: '2024-2025',
    title: 'Bi-Diplomation',
    description: 'BUT MMI + Bac Informatique - Canada, UQAC | Aout 2024 - Mai 2025',
    type: 'main',
    branches: [
      {
        title: 'Parcours parallèle',
        description: 'Finalisation du BUT MMI tout en étudiant au Canada',
        icon: '🛣️',
      },
      {
        title: 'Expérience internationale',
        description: "Échange à UQAC (Québec) pour approfondir l'informatique",
        icon: '🌍',
      },
      {
        title: 'Projet ambitieux',
        description:
          "Développement d'un projet innovant en collaboration avec des étudiants canadiens, Chatbot, Jeu vidéo, programme cybersécurité",
        icon: '🚀',
      },
      {
        title: 'Découverte annexes',
        description:
          "Exploration de sujets complémentaires dans le domaine de l'informatique (IA, cybersécurité, etc.)",
        icon: '📚',
      },
    ],
  },
  {
    year: '2025',
    title: 'Stage - Distillerie Gueules Noires',
    description: 'Stagiaire Développeur Web | Auchy-les-mines',
    type: 'main',
    branches: [
      {
        title: 'E-commerce',
        description: "Mise à jour et maintenance d'une boutique en ligne",
        icon: '🛒',
      },
      {
        title: 'Contenu infographique',
        description: 'Création de visuels et de contenus graphiques',
        icon: '📸',
      },
      { title: 'Polyvalence', description: 'Prise de photos et gestion de contenu', icon: '📷' },
    ],
  },
  {
    year: '2025',
    title: 'Graduation BUT MMI',
    description: 'Fin de la formation avec projets techniques avancés',
    type: 'milestone',
    branches: [
      {
        title: 'Projets innovants',
        description: 'Applications mobiles, cybersécurité, bots conversationnels',
        icon: '✨',
      },
      {
        title: 'Compétences solides',
        description:
          'Compétences techniques solides et expérience pratique pour le marché du travail',
        icon: '🏆',
      },
    ],
  },
]
