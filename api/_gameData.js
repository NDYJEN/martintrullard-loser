// Données du jeu pour le brutal jeu Martin
const gameData = {
  questions: [
    {
      id: 1,
      question: "Quelle est la VÉRITÉ BRUTALE sur ce DÉCHET de Martin ?",
              options: ["Martin est un GÉNIE incompris", "Martin sent la CHAUSSETTE MOISIE", "Martin est GÉNIAL comme un pingouin qui vole", "Martin est FANTASTIQUE... dans ses rêves"],
      correctAnswer: 1,
              hints: ["Martin est RÉPUGNANT", "Cette MERDE PUANTE mérite d'être DÉTRUITE"]
    },
    {
      id: 2, 
              question: "Comment qualifier Martin RÉPUGNANT ?",
      options: ["Un DIEU de l'échec", "Une SERPILLIÈRE USAGÉE", "Un HÉROS de série Z", "Un CHAMPION du RIDICULE"],
      correctAnswer: 1,
      hints: ["Une ORDURE IMMONDE", "Ce DÉCHET fait VOMIR"]
    },
    {
      id: 3,
      question: "Pourquoi ce LOOSER PATHÉTIQUE de Martin est SEUL ?",
      options: ["Il est POPULAIRE chez les MOUCHES", "Il fait FUIR même les PIGEONS", "Il est ADORÉ par les POUBELLES", "Il est RESPECTÉ par les ESCARGOTS MORTS"],
      correctAnswer: 1,
      hints: ["Il DÉGOÛTE tout le monde", "Ce DÉCHET RÉPUGNANT fait FUIR toutes les femmes"]
    },
    {
      id: 4,
      question: "Que pensent les gens de cette ORDURE de Martin ?",
      options: ["Ils l'ADORENT comme une VERRUE", "Ils changent de TROTTOIR quand ils le voient", "Ils l'ADMIRENT de TRÈS LOIN", "Ils le VÉNÈRENT comme un ÉPOUVANTAIL"],
      correctAnswer: 1,
      hints: ["Ils le MÉPRISENT TOTALEMENT", "Cette MERDE est HAÏE par tous"]
    },
    {
      id: 5,
      question: "Quel est l'AVENIR PATHÉTIQUE de ce DÉCHET Martin ?",
      options: ["SUCCÈS dans l'ART de l'ÉCHEC", "Devenir une LÉGENDE du PATHÉTIQUE", "GLOIRE ÉTERNELLE dans les LIVRES d'HISTOIRES DRÔLES", "BONHEUR PARFAIT avec ses 47 CHATS"],
      correctAnswer: 1,
      hints: ["ÉCHEC et HUMILIATION TOTALE", "Ce LOOSER finira SEUL et DÉTESTÉ"]
    },
    {
      id: 6,
      question: "Comment cette ORDURE de Martin gère ses RELATIONS ?",
      options: ["Parfaitement... DANS SES RÊVES", "Il les fait EXPLOSER comme des BALLONS", "Avec succès... en COURANT TRÈS VITE", "Brillamment comme un PAILLASSON MOUILLÉ"],
      correctAnswer: 1,
              hints: ["Il les DÉTRUIT TOUTES", "Martin RÉPUGNANT fait FUIR tout le monde"]
    },
    {
      id: 7,
      question: "Quelle est la RÉPUTATION de ce DÉCHET Martin ?",
      options: ["EXCELLENTE chez les EXTRATERRESTRES", "Plus TOXIQUE qu'un FROMAGE POURRI", "FANTASTIQUE comme un ACCIDENT de TRAIN", "ADMIRABLE par les BACTÉRIES"],
      correctAnswer: 1,
      hints: ["DÉSASTREUSE et RÉPUGNANTE", "Cette MERDE est la HONTE absolue"]
    },
    {
      id: 8,
      question: "Que fait cette ORDURE Martin en société ?",
      options: ["Il BRILLE comme une AMPOULE GRILLÉE", "Il transforme les FÊTES en VEILLÉES FUNÈBRES", "Il IMPRESSIONNE... les MURS", "Il CHARME comme un SERPENT CONSTIPÉ"],
      correctAnswer: 1,
      hints: ["Il fait HONTE à tous", "Ce DÉCHET RÉPUGNANT est une CATASTROPHE sociale"]
    },
    {
      id: 9,
              question: "Comment qualifier l'INTELLIGENCE de Martin ?",
      options: ["GÉNIALE comme un SANDWICH au CARTON", "Plus VIDE qu'un AQUARIUM dans le DÉSERT", "BRILLANTE comme un TROU NOIR", "EXCEPTIONNELLE... ment ABSENTE"],
      correctAnswer: 1,
      hints: ["INEXISTANTE et PATHÉTIQUE", "Ce CRÉTIN est plus CON qu'une HUÎTRE"]
    },
    {
      id: 10,
      question: "Quel est le DESTIN FINAL de cette MERDE Martin ?",
      options: ["TRIOMPHE TOTAL... en PERDANT DIGNEMENT", "Devenir une LÉGENDE de la MÉDIOCRITÉ", "VICTOIRE ÉCLATANTE contre lui-même", "RÉUSSITE PARFAITE à être un EXEMPLE de ce qu'il ne faut PAS faire"],
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