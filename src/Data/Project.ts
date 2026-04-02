
export interface Project {
  image: string | undefined
  title: string
  description: string
  text?: string
  tags: string[]
  statut: 'En cours' | 'Terminé' | 'À venir'
  link?: string
  type?: 'dev' | 'graphic'
  video?: string
  place: string | undefined
  date: string | undefined
  ImageArray?: string[]
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
  desc?: string
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
    text : 'SmartPantry est une application de gestion de stock alimentaire développée en React pour le frontend et Laravel pour le backend, avec une base de données MySQL et utilise une api externe Spoonacular. L’application permet aux utilisateurs de suivre les aliments qu’ils ont chez eux, de recevoir des notifications avant que les produits ne périment et de générer des recettes personnalisées en fonction des ingrédients disponibles. L’objectif est d’aider les utilisateurs à réduire le gaspillage alimentaire et à mieux gérer leur cuisine.',
    tags: ['React', 'Laravel', 'MySQL'],
    statut: 'Terminé',
    link: 'https://github.com/benboisedu354/SmartPantry',
    image: undefined,
    type: 'dev',
    video: undefined,
    place: 'UQAC - Québec',
    date: 'Automne 2024',
  },
  {
    title: 'Dailies',
    description:
      'Application mobile de suivi des tâches quotidiennes avec notifications et graphiques de progression',
    text : 'Dailies est une application mobile de suivi des tâches quotidiennes développée en Kotlin pour Android. L’application permet aux utilisateurs de créer des listes de tâches, de définir des rappels et de suivre leur progression à l’aide de graphiques et de statistiques. L’objectif est d’aider les utilisateurs à rester organisés et motivés dans la réalisation de leurs objectifs quotidiens.',
    tags: ['Kotlin', 'Android', 'Sqlite'],
    statut: 'Terminé',
    link: 'https://github.com/benboisedu354/Dailies_Kotlin',
    image:
      'https://github.com/benboisedu354/Dailies_Kotlin/blob/main/app/src/main/res/drawable/logo_appli.png?raw=true',
    type: 'dev',
    video: undefined,
    place: 'UQAC - Québec',
    date: 'Hiver 2025',
  },
  {
    title: 'Labyrinthe Python',
    description: 'Jeu de labyrinthe en Python avec Pygame, généré aléatoirement à chaque partie',
    text : 'Ce projet est un jeu de labyrinthe développé en Python avec la bibliothèque Pygame. Le labyrinthe est généré de manière aléatoire à chaque partie, offrant une expérience unique à chaque fois. Les joueurs peuvent naviguer à travers le labyrinthe en utilisant les touches directionnelles du clavier, avec pour objectif de trouver la sortie le plus rapidement possible. Le projet inclut également un système de score pour rendre le jeu plus engageant.',
    tags: ['Python', 'Pygame'],
    statut: 'Terminé',
    link: 'https://github.com/benboisedu354/pygame_laby',
    image: undefined,
    type: 'dev',
    video: undefined,
    place: 'IUT de Lens - France',
    date: 'Juin 2025',
  },
  {
    title: 'MatterCrafter',
    description:
      "Matter Crafter est un jeu de simulation en réalité virtuelle où la recherche et l'expérimentation sont au cœur du gameplay. Le but du jeu est de créer un maximum d’éléments et d’objets en combinant quatre éléments initiaux : la terre, le vent, l'eau et le feu. Les joueurs peuvent interagir avec certaines de leurs créations pour déclencher des événements amusants, comme des explosions.",
    tags: ['Unity', 'VR', 'C#'],
    statut: 'Terminé',
    link: 'https://github.com/maximelegru/MatterCrafter',
    image: '/thumbnail/mattercrafter.png',
    type: 'dev',
    video: 'https://youtu.be/JgGtTLXD4Cs',
    place: 'UQAC - Québec',
    date: 'Hiver 2025',
    ImageArray: [
      '/ImgProject/MatterCrafter/MatterCrafter1.png',
      '/ImgProject/MatterCrafter/MatterCrafter2.png',
      '/ImgProject/MatterCrafter/MatterCrafter3.png',
    ],
  },
  {
    title: 'Portfolio Personnel',
    description: 'Site portfolio interactif avec animations 3D',
    text : 'Ce projet est un site portfolio personnel développé en React, avec des animations 3D réalisées à l’aide de Three.js et React Three Fiber, et stylisé avec Tailwind CSS. Le site présente mes réalisations, compétences et parcours professionnel de manière interactive et visuellement attrayante. L’objectif est de créer une expérience utilisateur immersive qui met en valeur mes projets et mon expertise dans le domaine du développement web.',
    tags: ['React', 'Three.js', 'Tailwind CSS'],
    statut: 'En cours',
    link: 'https://github.com/benboisedu354/Portfolio',
    image: '/thumbnail/portfolio.png',
    type: 'dev',
    video: undefined,
    place: 'Troyes - France',
    date: 'Mars 2026',
  },
  {
    title: 'Boutique Python ',
    description:
      'Boutique développée en Python naviguable en ligne de commande, avec gestion de stock, panier d achat et système de paiement simulé',
    text : 'Ce projet est une boutique développée en Python, navigable en ligne de commande. La boutique permet aux utilisateurs de parcourir les produits disponibles, d’ajouter des articles à leur panier et de simuler un processus de paiement. Le projet inclut également une gestion de stock pour suivre les quantités disponibles et éviter les ruptures de stock. L’objectif est de réaliser une application simple mais fonctionnelle pour comprendre les concepts de base du développement d’une boutique en ligne et de la gestion des stocks.',
    tags: ['Python'],
    statut: 'Terminé',
    link: undefined,
    image: undefined,
    type: 'dev',
    video: undefined,
    place: 'Novembre - Troyes - France',
    date: 'Novembre 2025',
  },
  {
    title: 'Bot Discord',
    description:
      'Bot de modération et de divertissement pour serveur Discord, développé en Typescript avec des fonctionnalités personnalisées',
    text : 'Ce projet sert d’initiation au langage Typescript et à la création de bots pour Discord. Le bot inclut des fonctionnalités de modération telles que la suppression de messages, l’expulsion d’utilisateurs et la gestion des rôles, ainsi que des commandes de divertissement comme des jeux, des blagues et des citations aléatoires. L’objectif est de fournir une expérience interactive et amusante pour les membres du serveur tout en facilitant la gestion de la communauté.',
    tags: ['Typescript', 'Discord.js'],
    statut: 'En cours',
    link: undefined,
    image: undefined,
    type: 'dev',
    video: undefined,
    place: 'IUT de Lens - France',
    date: 'Avril 2024',
  },
  {
    title: 'Cryptage de messages RSA',
    description:
      'Programme de cryptage et de décryptage de messages utilisant l’algorithme RSA, développé en Python',
    text : 'Ce projet est un programme de cryptage et de décryptage de messages utilisant l’algorithme RSA, développé en Python. Le programme permet aux utilisateurs de chiffrer des messages en utilisant une clé publique et de les déchiffrer avec une clé privée correspondante. L’objectif est de fournir une solution simple pour sécuriser les communications et protéger les informations sensibles.',
    tags: ['Python', 'Cryptographie', 'Cybersécurité'],
    statut: 'En cours',
    link: undefined,
    image: undefined,
    type: 'dev',
    video: undefined,
    place: 'UQAC - Québec',
    date: '27 décembre 2024',
  },
  {
    title: 'Programme de santé',
    description:
      'Application de suivi de la santé avec journal alimentaire, suivi de l’activité physique et rappels de médicaments, développée en Python',
    text : 'Ce projet est en cours de développement et vise à créer une application complète de suivi de la santé. L’application permettra aux utilisateurs de suivre leur hydratation, leur alimentation, leur activité physique et leurs médicaments. L’objectif est de fournir une solution simple et efficace pour aider les utilisateurs à maintenir un mode de vie sain et équilibré.',
    tags: ['Python', 'Santé', 'Bien-être'],
    statut: 'En cours',
    link: undefined,
    image: undefined,
    type: 'dev',
    video: undefined,
    place: 'UQAC - Québec',
    date: '15 janvier 2025 ',
  },
  {
    title: 'Etiquette Eau de Vie de Bière',
    description:
      "Design d'étiquettes pour une eau de vie de bière pour la distillerie Gueules Noires, réalisées avec Figma",
    text : 'Ce projet consiste en la conception de plusieurs étiquettes pour une eau de vie de bière, réalisées avec Figma. Le design met en valeur l’identité de la distillerie Gueules Noires et propose un style élégant et moderne.',
    tags: ['Figma', 'Design Graphique'],
    statut: 'Terminé',
    link: 'https://www.figma.com/proto/WW6Dy5gTJdtXJ5I28FxcRZ/Etiquettes?node-id=26-7&p=f&t=nH9NYfOhYoKcesC1-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    image: '/thumbnail/eau_de_vie_biere.png',
    type: 'graphic',
    video: undefined,
    place: 'Auchy-les-mines - France',
    date: 'Avril 2025',
    ImageArray: [
      '/ImgProject/Eau_de_vie/eau_de_vie_biere.png',
      '/ImgProject/Eau_de_vie/eau_de_vie_brune.png',
    ],
  },
  {
    title: 'Carte de visite pour un distillateur',
    description:
      'Design de cartes de visite pour un distillateur, réalisées avec Figma, avec un style élégant et professionnel',
    text : 'Ce projet consiste en la conception de cartes de visite pour un distillateur, réalisées avec Figma. Le design met en valeur l’identité du distillateur et propose un style élégant et professionnel. Intégrant un code QR pour un accès rapide aux informations de contact et au site web, permettant ainsi aux utilisateurs de facilement accéder à plus d’informations.',
    tags: ['Figma', 'Design Graphique'],
    statut: 'Terminé',
    link: 'https://www.figma.com/proto/WW6Dy5gTJdtXJ5I28FxcRZ/Carte-de-visite?node-id=26-7&p=f&t=nH9NYfOhYoKcesC1-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    image: '/thumbnail/carte_visite.png',
    type: 'graphic',
    video: undefined,
    place: 'Auchy-les-mines - France',
    date: 'Avril 2025',
  },
  {
    title: 'Affiche de Festival du 13 Juillet',
    description: "Design d'une affiche pour le festival du 13 Juillet, réalisée avec Canva",
    text : "Ce projet consiste en la conception d'une affiche pour le festival du 13 Juillet, réalisée avec Canva. Le design met en valeur l'ambiance festive de l'événement et utilise des éléments visuels attrayants pour attirer l'attention du public.",
    tags: ['Canva', 'Design Graphique'],
    statut: 'Terminé',
    link: undefined,
    image: '/thumbnail/affiche_festival.png',
    type: 'graphic',
    video: undefined,
    place: 'Foncquevillers - France',
    date: 'Mai 2024',
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
    desc : 'Application mobile de planification de voyages avec recommandations personnalisées et partage d’itinéraires',
    link: '',
  },
  {
    title: 'SmartPantry',
    tech: 'React · Laravel · API REST · MySQL',
    icon: '🍳',
    desc: 'Application de gestion de cuisine avec génération de recettes personnalisées',
  },
  {
    title: 'Dailies',
    tech: 'Kotlin · Android · SQLite',
    icon: '📅',
    desc: 'Application de suivi des tâches quotidiennes avec rappels et statistiques de progression',
  },
  {
    title: 'Bot Conversationnel',
    tech: 'React · Python · LLM (OpenAI)',
    icon: '🤖',
    desc: 'Bot de conversation spécialisé dans un domaine particulier (ex : support client, assistant personnel, etc.)',

  },
  {
    title: 'MatterCrafter',
    tech: 'Unity · C# · VR',
    icon: '🎮',
    desc: "Matter Crafter est un jeu de simulation en réalité virtuelle où la recherche et l'expérimentation sont au cœur du gameplay. Le but du jeu est de créer un maximum d’éléments et d’objets en combinant quatre éléments initiaux : la terre, le vent, l'eau et le feu. Les joueurs peuvent interagir avec certaines de leurs créations pour déclencher des événements amusants, comme des explosions.",
  },
  {
    title: 'Portfolio Personnel',
    tech: 'React · Three.js · Tailwind CSS',
    icon: '💻',
    desc: 'Site portfolio interactif avec animations 3D',
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
      {
        title: 'Apprentissage des premiers langages',
        description: 'Initiation à HTML/CSS et JavaScript, découverte des CMS (WIX, Shopify)',
        icon: '📚',
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
    title: 'Stage de fin d’études UQAC',
    description: 'Stagiaire Développeur Web | UQAC - Québec',
    type: 'main',
    branches: [
      {
        title: 'Choix du projet',
        description: 'Sélection d’un projet ambitieux en collaboration avec des étudiants canadiens et français',
        icon: '🚀'
      },
      {
        title: 'Développement',
        description: 'Développement du projet en utilisant des technologies modernes et adaptées ',
        icon: '💻'
      },
      {
        title: 'Collaboration internationale',
        description: 'Travail en équipe avec des étudiants de différentes cultures et horizons',
        icon: '🌍'
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
