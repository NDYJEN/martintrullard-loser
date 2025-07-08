// Données du jeu pour le brutal jeu Laurie
const gameData = {
  questions: [
    {
      id: 1,
      question: "Comment Laurie se comporte-t-il en général ? 🤡",
      options: [
        "Laurie est chelou même ChatGPT swipe à gauche",
        "Laurie est FANTASTIQUE dans ses rêves",
        "Laurie est BEAU quand il est TRES LOIN",
        "Laurie est POPULAIRE dans les groupes \"ne pas inviter\""
      ],
      correctAnswer: 1,
      hints: ["Même l'IA la fuit...", "Chelou au niveau cosmique 🤖"]
    },
    {
      id: 2,
      question: "Quelle est la vérité sur la vie sociale de Laurie ? 💀",
      options: [
        "Laurie s'est fait ghoster par un chatbot",
        "Laurie a déjà dit \"je t'aime\" à une story Insta",
        "Laurie a essayé de googler \"comment ouvrir Google\"",
        "Laurie commence ses conversations par \"T'aimes les bad boys ?\""
      ],
      correctAnswer: 1,
      hints: ["Même les robots l'évitent...", "Rejetée par l'intelligence artificielle 🤖"]
    },
    {
      id: 3,
      question: "Que fait Laurie pour impressionner ? 🚗",
      options: [
        "Laurie pose avec une voiture qui appartient à son cousin",
        "Laurie a reçu un \"Tu corresponds pas à mes critères\" de l'appli elle-même",
        "Laurie a demandé à une fille \"tu veux venir voir mes stories enregistrées ?\"",
        "Laurie parle à une fille, son Wi-Fi coupe par honte"
      ],
      correctAnswer: 1,
      hints: ["Mensonge sur quatre roues...", "Pas sa caisse, pas son succès 🚗"]
    },
    {
      id: 4,
      question: "Quel est le bilan amoureux de Laurie ? 💔",
      options: [
        "Laurie a un seul match sur Tinder : une erreur système",
              "Laurie a été friendzoné par sa cousine",
      "Laurie a un QI à un chiffre et il est fier",
        "Laurie pense qu'il est un cadeau, personne ne l'a commandé"
      ],
      correctAnswer: 1,
      hints: ["Même les algorithmes se trompent...", "Bug informatique = seule chance 💻"]
    },
    {
      id: 5,
      question: "Comment Laurie voit-il sa propre personne ? 🪞",
      options: [
        "Laurie s'aime fort. Quelqu'un devait le faire",
              "Laurie croit que les filles le fuient parce qu'elles sont timides",
      "Le cadeau de Laurie en soirée? Rentrer chez lui",
      "Laurie a un miroir, mais il mérite pas cette souffrance"
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