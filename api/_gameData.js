// Données du jeu pour le brutal jeu Martin
const gameData = {
  questions: [
    {
      id: 1,
      question: "Comment Martin se comporte-t-il en général ? 🤡",
      options: [
        "Martin est chelou même ChatGPT swipe à gauche",
        "Martin est FANTASTIQUE dans ses rêves",
        "Martin est BEAU quand il est TRES LOIN",
        "Martin est POPULAIRE dans les groupes \"ne pas inviter\""
      ],
      correctAnswer: 1,
      hints: ["Même l'IA le fuit...", "Chelou au niveau cosmique 🤖"]
    },
    {
      id: 2,
      question: "Quelle est la vérité sur la vie sociale de Martin ? 💀",
      options: [
        "Martin s'est fait ghoster par un chatbot",
        "Martin a déjà dit \"je t'aime\" à une story Insta",
        "Martin a essayé de googler \"comment ouvrir Google\"",
        "Martin commence ses conversations par \"T'aimes les bad boys ?\""
      ],
      correctAnswer: 1,
      hints: ["Même les robots l'évitent...", "Rejeté par l'intelligence artificielle 🤖"]
    },
    {
      id: 3,
      question: "Que fait Martin pour impressionner ? 🚗",
      options: [
        "Martin pose avec une voiture qui appartient à son cousin",
        "Martin a reçu un \"Tu corresponds pas à mes critères\" de l'appli elle-même",
        "Martin a demandé à une fille \"tu veux venir voir mes stories enregistrées ?\"",
        "Martin parle à une fille, son Wi-Fi coupe par honte"
      ],
      correctAnswer: 1,
      hints: ["Mensonge sur quatre roues...", "Pas sa caisse, pas son succès 🚗"]
    },
    {
      id: 4,
      question: "Quel est le bilan amoureux de Martin ? 💔",
      options: [
        "Martin a un seul match sur Tinder : une erreur système",
        "Martin a été friendzoned par sa cousine",
        "Martin a un QI à un chiffre et il est fier",
        "Martin pense qu'il est un cadeau, personne ne l'a commandé"
      ],
      correctAnswer: 1,
      hints: ["Même les algorithmes se trompent...", "Bug informatique = seule chance 💻"]
    },
    {
      id: 5,
      question: "Comment Martin voit-il sa propre personne ? 🪞",
      options: [
        "Martin s'aime fort. Quelqu'un devait le faire",
        "Martin croit que les filles le fuient parce qu'elles sont timides",
        "Le cadeau de Martin en soirée? Rentrer chez lui",
        "Martin a un miroir, mais il mérite pas cette souffrance"
      ],
      correctAnswer: 1,
      hints: ["Auto-amour par défaut...", "Personne d'autre ne le fait 💝"]
    }
  ]
};

// État du jeu partagé
const gameState = {
  currentQuestion: 0,
  score: 0,
  totalQuestions: gameData.questions.length,
  gameStarted: false,
  gameFinished: false,
  playerName: ""
};

// Export CommonJS
module.exports = { gameData, gameState }; 