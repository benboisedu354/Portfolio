export interface Project {
  image: string | undefined
  title: string
  description: string
  tags: string[]
  statut: 'En cours' | 'Terminé' | 'À venir'
  link?: string
  type?: 'dev' | 'graphic' 
  video?: string
  place : string | undefined
  date : string | undefined
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
  link?: string
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
    statut: 'Terminé',
    link: 'https://github.com/benboisedu354/SmartPantry',
    image: undefined,
    type: 'dev',
    video: undefined,
    place : "UQAC - Québec",
    date : "Automne 2024"
  },
  {
    title: 'Dailies',
    description:
      'Application mobile de suivi des tâches quotidiennes avec notifications et graphiques de progression',
    tags: ['Kotlin', 'Android', 'Sqlite'],
    statut: 'Terminé',
    link: 'https://github.com/benboisedu354/Dailies_Kotlin',
    image:
      'https://github.com/benboisedu354/Dailies_Kotlin/blob/main/app/src/main/res/drawable/logo_appli.png?raw=true',
    type: 'dev',
    video: undefined,
    place : "UQAC - Québec",
    date : "Hiver 2025"
  },
  {
    title: 'Labyrinthe Python',
    description: 'Jeu de labyrinthe en Python avec Pygame, généré aléatoirement à chaque partie',
    tags: ['Python', 'Pygame'],
    statut: 'Terminé',
    link: 'https://github.com/benboisedu354/pygame_laby',
    image: undefined,
    type: 'dev',
    video: undefined,
    place : "IUT de Lens - France",
    date : "Juin 2025"

  },
  {
    title: 'MatterCrafter',
    description:
      "Matter Crafter est un jeu de simulation en réalité virtuelle où la recherche et l'expérimentation sont au cœur du gameplay. Le but du jeu est de créer un maximum d’éléments et d’objets en combinant quatre éléments initiaux : la terre, le vent, l'eau et le feu. Les joueurs peuvent interagir avec certaines de leurs créations pour déclencher des événements amusants, comme des explosions.",
    tags: ['Unity', 'VR', 'C#'],
    statut: 'Terminé',
    link: 'https://github.com/maximelegru/MatterCrafter',
    image: "/thumbnail/mattercrafter.png",
    type: 'dev',
    video: "https://youtu.be/JgGtTLXD4Cs",
    place : "UQAC - Québec",
    date : "Hiver 2025"
  },
  {
    title: 'Portfolio Personnel',
    description: 'Site portfolio interactif avec animations 3D',
    tags: ['React', 'Three.js', 'Tailwind CSS'],
    statut: 'En cours',
    link: 'https://github.com/benboisedu354/Portfolio',
    image: "/thumbnail/portfolio.png",
    type: 'dev',
    video: undefined,
    place : "Troyes - France",
    date : "Mars 2026"
  },
  {
    title: 'Script de Cybersécurité',
    description:
      'Script de cybersécurité pour scanner les vulnérabilités d’un réseau local et générer un rapport détaillé',
    tags: ['Python', 'C#'],
    statut: 'Terminé',
    link: undefined,
    image: undefined,
    type: 'dev',
    video: undefined,
    place : "UQAC - Québec",
    date : "Hiver 2025"
  },
  {
    title: 'Etiquette Eau de Vie de Bière',
    description:
      "Design d'étiquettes pour une eau de vie de bière pour la distillerie Gueules Noires, réalisées avec Figma",
    tags: ['Figma', 'Design Graphique'],
    statut: 'Terminé',
    link: 'https://www.figma.com/proto/WW6Dy5gTJdtXJ5I28FxcRZ/Etiquettes?node-id=26-7&p=f&t=nH9NYfOhYoKcesC1-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    image: '/thumbnail/eau_de_vie_biere.png',
    type: 'graphic',
    video: undefined,
    place : "Auchy-les-mines - France",
    date : "Avril 2025"
  },
]

export const languages: language[] = [
  { lang: 'Français', level: 'Langue maternelle', icon: '🇫🇷' },
  { lang: 'Anglais', level: 'B2 / C1', icon: '🇬🇧' },
  { lang: 'Autres', level: 'B1 / B2', icon: '🌍' },
]

export const otherProjects: otherProject[] = [
  {
    title: 'Application de Voyage',
    tech: 'React Native · Laravel · MySQL',
    icon: '✈️',
    link : ''
  },
  {
    title: 'SmartPantry',
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
  {
    title : 'MatterCrafter',
    tech : 'Unity · C# · VR',
    icon : '🎮',
  },
  {
    title : 'Portfolio Personnel',
    tech : 'React · Three.js · Tailwind CSS',
    icon : '💻',
  }
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
