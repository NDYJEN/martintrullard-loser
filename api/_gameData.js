// Données du jeu pour le brutal jeu Martin
const gameData = {
  questions: [
    {
      id: 1,
      question: "Quelle est la VÉRITÉ BRUTALE sur ce DÉCHET de Martin ?",
              options: ["Martin est un GÉNIE", "Martin est RÉPUGNANT", "Martin est GÉNIAL", "Martin est FANTASTIQUE"],
      correctAnswer: 1,
              hints: ["Martin est RÉPUGNANT", "Cette MERDE PUANTE mérite d'être DÉTRUITE"]
    },
    {
      id: 2, 
              question: "Comment qualifier Martin RÉPUGNANT ?",
      options: ["Un DIEU", "Une ORDURE IMMONDE", "Un HÉROS", "Un CHAMPION"],
      correctAnswer: 1,
      hints: ["Une ORDURE IMMONDE", "Ce DÉCHET fait VOMIR"]
    },
    {
      id: 3,
      question: "Pourquoi ce LOOSER PATHÉTIQUE de Martin est SEUL ?",
      options: ["Il est POPULAIRE", "Il DÉGOÛTE tout le monde", "Il est ADORÉ", "Il est RESPECTÉ"],
      correctAnswer: 1,
      hints: ["Il DÉGOÛTE tout le monde", "Ce DÉCHET RÉPUGNANT fait FUIR toutes les femmes"]
    },
    {
      id: 4,
      question: "Que pensent les gens de cette ORDURE de Martin ?",
      options: ["Ils l'ADORENT", "Ils le MÉPRISENT TOTALEMENT", "Ils l'ADMIRENT", "Ils le VÉNÈRENT"],
      correctAnswer: 1,
      hints: ["Ils le MÉPRISENT TOTALEMENT", "Cette MERDE est HAÏE par tous"]
    },
    {
      id: 5,
      question: "Quel est l'AVENIR PATHÉTIQUE de ce DÉCHET Martin ?",
      options: ["SUCCÈS TOTAL", "ÉCHEC et HUMILIATION TOTALE", "GLOIRE ÉTERNELLE", "BONHEUR PARFAIT"],
      correctAnswer: 1,
      hints: ["ÉCHEC et HUMILIATION TOTALE", "Ce LOOSER finira SEUL et DÉTESTÉ"]
    },
    {
      id: 6,
      question: "Comment cette ORDURE de Martin gère ses RELATIONS ?",
      options: ["Parfaitement", "Il les DÉTRUIT TOUTES", "Avec succès", "Brillamment"],
      correctAnswer: 1,
              hints: ["Il les DÉTRUIT TOUTES", "Martin RÉPUGNANT fait FUIR tout le monde"]
    },
    {
      id: 7,
      question: "Quelle est la RÉPUTATION de ce DÉCHET Martin ?",
      options: ["EXCELLENTE", "DÉSASTREUSE et RÉPUGNANTE", "FANTASTIQUE", "ADMIRABLE"],
      correctAnswer: 1,
      hints: ["DÉSASTREUSE et RÉPUGNANTE", "Cette MERDE est la HONTE absolue"]
    },
    {
      id: 8,
      question: "Que fait cette ORDURE Martin en société ?",
      options: ["Il BRILLE", "Il fait HONTE à tous", "Il IMPRESSIONNE", "Il CHARME"],
      correctAnswer: 1,
      hints: ["Il fait HONTE à tous", "Ce DÉCHET RÉPUGNANT est une CATASTROPHE sociale"]
    },
    {
      id: 9,
              question: "Comment qualifier l'INTELLIGENCE de Martin ?",
      options: ["GÉNIALE", "INEXISTANTE et PATHÉTIQUE", "BRILLANTE", "EXCEPTIONNELLE"],
      correctAnswer: 1,
      hints: ["INEXISTANTE et PATHÉTIQUE", "Ce CRÉTIN est plus CON qu'une HUÎTRE"]
    },
    {
      id: 10,
      question: "Quel est le DESTIN FINAL de cette MERDE Martin ?",
      options: ["TRIOMPHE TOTAL", "DESTRUCTION COMPLÈTE", "VICTOIRE ÉCLATANTE", "RÉUSSITE PARFAITE"],
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