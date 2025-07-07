// Données du jeu pour le brutal jeu Martin
const gameData = {
  questions: [
    {
      id: 1,
      question: "Quelle est la VÉRITÉ BRUTALE sur ce DÉCHET de Martin ?",
              options: ["Martin a un potentiel infini… pour décevoir.", "Il est agaçant comme une écharde sous la peau.", "Martin est chelou… même ChatGPT swipe à gauche.", "Martin est un expert… en déceptions"],
      correctAnswer: 1,
              hints: ["Martin est RÉPUGNANT", "Cette MERDE PUANTE mérite d'être DÉTRUITE"]
    },
    {
      id: 2, 
              question: "Comment qualifier Martin RÉPUGNANT ?",
      options: ["Un expert en désastres", "Il ne donne envie à personne de le revoir.", "Un maître du pathétique", "Un champion des déceptions"],
      correctAnswer: 1,
      hints: ["Une ORDURE IMMONDE", "Ce DÉCHET fait VOMIR"]
    },
    {
      id: 3,
      question: "Pourquoi ce LOOSER PATHÉTIQUE de Martin est SEUL ?",
      options: ["Il fait fuir même ses propres reflets", "Mieux vaut l'avoir en peinture qu'en vrai.", "Il est toxique pour l'environnement", "Il fait baisser le moral des plantes"],
      correctAnswer: 1,
      hints: ["Il DÉGOÛTE tout le monde", "Ce DÉCHET RÉPUGNANT fait FUIR toutes les femmes"]
    },
    {
      id: 4,
      question: "Que pensent les gens de cette ORDURE de Martin ?",
      options: ["Ils changent de trottoir en le voyant", "Il est imbuvable.", "Ils préfèrent parler à un mur", "Ils font semblant de ne pas le connaître"],
      correctAnswer: 1,
      hints: ["Ils le MÉPRISENT TOTALEMENT", "Cette MERDE est HAÏE par tous"]
    },
    {
      id: 5,
      question: "Quel est l'AVENIR PATHÉTIQUE de ce DÉCHET Martin ?",
      options: ["Il finira seul avec ses regrets", "Toutes les filles le fuit comme la peste.", "Il sera oublié avant sa mort", "Il collectionne les déceptions"],
      correctAnswer: 1,
      hints: ["ÉCHEC et HUMILIATION TOTALE", "Ce LOOSER finira SEUL et DÉTESTÉ"]
    },
    {
      id: 6,
      question: "Comment cette ORDURE de Martin gère ses RELATIONS ?",
      options: ["Il les sabote avant même de commencer", "Il est bon… quand il est loin.", "Il transforme l'amour en cauchemar", "Il fait fuir même les désespérées"],
      correctAnswer: 1,
              hints: ["Il les DÉTRUIT TOUTES", "Martin RÉPUGNANT fait FUIR tout le monde"]
    },
    {
      id: 7,
      question: "Quelle est la RÉPUTATION de ce DÉCHET Martin ?",
      options: ["Il est célèbre pour tout ce qu'il faut éviter", "Son absence est sa plus grande qualité.", "Il est un exemple de ce qu'il ne faut pas faire", "Il inspire la pitié même aux inconnus"],
      correctAnswer: 1,
      hints: ["DÉSASTREUSE et RÉPUGNANTE", "Cette MERDE est la HONTE absolue"]
    },
    {
      id: 8,
      question: "Que fait cette ORDURE Martin en société ?",
      options: ["Il éteint l'ambiance en arrivant", "Il a le charisme d'une huître morte.", "Il rend les soirées interminables", "Il fait regretter d'être venu"],
      correctAnswer: 1,
      hints: ["Il fait HONTE à tous", "Ce DÉCHET RÉPUGNANT est une CATASTROPHE sociale"]
    },
    {
      id: 9,
              question: "Comment qualifier l'INTELLIGENCE de Martin ?",
      options: ["Il fait paraître un poisson rouge intelligent", "Même ChatGPT ne veut pas lui parler.", "Il a la profondeur d'une flaque", "Il pense que Wi-Fi c'est sa femme"],
      correctAnswer: 1,
      hints: ["INEXISTANTE et PATHÉTIQUE", "Ce CRÉTIN est plus CON qu'une HUÎTRE"]
    },
    {
      id: 10,
      question: "Quel est le DESTIN FINAL de cette MERDE Martin ?",
      options: ["Il sera oublié avant d'être enterré", "On dirait un brouillon mal terminé.", "Il a une tête à faire planter Face ID.", "Il finira dans un livre sur les erreurs à éviter"],
      correctAnswer: 1,
      hints: ["DESTRUCTION COMPLÈTE", "Ce DÉCHET sera ANÉANTI et OUBLIÉ pour toujours"]
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