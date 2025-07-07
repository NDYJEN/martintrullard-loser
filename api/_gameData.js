// Données du jeu partagées entre les fonctions Vercel
export const gameData = {
  questions: [
    {
      id: 1,
      question: "Quelle est la VÉRITÉ BRUTALE sur ce DÉCHET de Martin ?",
      correctAnswer: "martin est chelou",
      options: [
        "martin est chelou",
        "martin est génial",
        "martin est intelligent",
        "martin est charmant"
      ],
      hints: ["Ce PORC est RÉPUGNANT", "Un MONSTRE dégoûtant qui pue..."]
    },
    {
      id: 2,
      question: "Que pensez-vous VRAIMENT de cette ORDURE de Martin ?",
      correctAnswer: "martin est bizarre",
      options: [
        "martin est bizarre",
        "martin est formidable",
        "martin est talentueux",
        "martin est sympathique"
      ],
      hints: ["Une ABOMINATION répugnante", "Ce DÉCHET n'est PAS normal..."]
    },
    {
      id: 3,
      question: "Comment qualifier ce PORC RÉPUGNANT de Martin ?",
      correctAnswer: "martin est dégoûtant",
      options: [
        "martin est dégoûtant",
        "martin est adorable",
        "martin est respectueux",
        "martin est agréable"
      ],
      hints: ["Cette MERDE PUANTE mérite d'être DÉTRUITE", "Un MONSTRE qui fait VOMIR..."]
    },
    {
      id: 4,
      question: "Quel trait de caractère de Martin vous frappe le plus ?",
      correctAnswer: "martin est dramatique",
      options: [
        "martin est dramatique",
        "martin est humble",
        "martin est calme",
        "martin est équilibré"
      ],
      hints: ["Il aime faire du théâtre", "Toujours dans l'exagération..."]
    },
    {
      id: 5,
      question: "Comment évaluez-vous les compétences de Martin ?",
      correctAnswer: "martin est moyen",
      options: [
        "martin est moyen",
        "martin est excellent",
        "martin est brillant",
        "martin est exceptionnel"
      ],
      hints: ["Ni excellent ni nul", "Dans la moyenne..."]
    },
    {
      id: 6,
      question: "Quel RATÉ PATHÉTIQUE est Martin au travail ?",
      correctAnswer: "martin est incompétent",
      options: [
        "martin est incompétent",
        "martin est très compétent",
        "martin est professionnel",
        "martin est efficace"
      ],
      hints: ["Ce DÉCHET est BON À RIEN", "Une MERDE INUTILE qui mérite d'être VIRÉE..."]
    },
    {
      id: 7,
      question: "Pourquoi Martin agit-il souvent de manière exagérée ?",
      correctAnswer: "martin cherche l'attention",
      options: [
        "martin cherche l'attention",
        "martin est naturellement expressif",
        "martin est passionné",
        "martin est authentique"
      ],
      hints: ["Il veut être remarqué", "Besoin de reconnaissance..."]
    },
    {
      id: 8,
      question: "Quel est le vrai problème de confiance de Martin ?",
      correctAnswer: "martin n'est pas confiant alors qu'il essaie de paraître comme",
      options: [
        "martin n'est pas confiant alors qu'il essaie de paraître comme",
        "martin est très sûr de lui",
        "martin a une confiance naturelle",
        "martin est authentiquement confiant"
      ],
      hints: ["Façade vs réalité", "Il cache son insécurité..."]
    },
    {
      id: 9,
      question: "Que dit-on de Martin au niveau physique ?",
      correctAnswer: "martin a un petit truc",
      options: [
        "martin a un petit truc",
        "martin est très bien physiquement",
        "martin est attirant",
        "martin a un charme naturel"
      ],
      hints: ["Une caractéristique... diminuée", "Question de taille..."]
    },
    {
      id: 10,
      question: "Pourquoi ce LOOSER PATHÉTIQUE de Martin est SEUL ?",
      correctAnswer: "aucune fille veut de martin",
      options: [
        "aucune fille veut de martin",
        "martin a beaucoup de succès avec les filles",
        "martin est très romantique",
        "martin est irrésistible"
      ],
      hints: ["Ce DÉCHET RÉPUGNANT fait FUIR toutes les femmes", "Un MONSTRE qui ne baisera JAMAIS..."]
    }
  ]
};

// État de jeu en mémoire (limité pour Vercel)
let gameState = {
  currentQuestion: 0,
  score: 0,
  totalQuestions: gameData.questions.length,
  gameStarted: false,
  gameFinished: false,
  playerName: ""
};

export { gameState }; 