// Données du jeu pour le brutal jeu Martin
const gameData = {
  questions: [
    {
      id: 1,
      question: "Quelle est la VÉRITÉ BRUTALE sur ce DÉCHET de Martin ?",
              options: ["Martin est un GÉNIE incompris", "Il est agaçant comme une écharde sous la peau.", "Martin est GÉNIAL comme un pingouin qui vole", "Martin est FANTASTIQUE... dans ses rêves"],
      correctAnswer: 1,
              hints: ["Martin est RÉPUGNANT", "Cette MERDE PUANTE mérite d'être DÉTRUITE"]
    },
    {
      id: 2, 
              question: "Comment qualifier Martin RÉPUGNANT ?",
      options: ["Un DIEU de l'échec", "Il ne donne envie à personne de le revoir.", "Un HÉROS de série Z", "Un CHAMPION du RIDICULE"],
      correctAnswer: 1,
      hints: ["Une ORDURE IMMONDE", "Ce DÉCHET fait VOMIR"]
    },
    {
      id: 3,
      question: "Pourquoi ce LOOSER PATHÉTIQUE de Martin est SEUL ?",
      options: ["Il est POPULAIRE chez les MOUCHES", "Mieux vaut l'avoir en peinture qu'en vrai.", "Il est ADORÉ par les POUBELLES", "Il est RESPECTÉ par les ESCARGOTS MORTS"],
      correctAnswer: 1,
      hints: ["Il DÉGOÛTE tout le monde", "Ce DÉCHET RÉPUGNANT fait FUIR toutes les femmes"]
    },
    {
      id: 4,
      question: "Que pensent les gens de cette ORDURE de Martin ?",
      options: ["Ils l'ADORENT comme une VERRUE", "Il est imbuvable.", "Ils l'ADMIRENT de TRÈS LOIN", "Ils le VÉNÈRENT comme un ÉPOUVANTAIL"],
      correctAnswer: 1,
      hints: ["Ils le MÉPRISENT TOTALEMENT", "Cette MERDE est HAÏE par tous"]
    },
    {
      id: 5,
      question: "Quel est l'AVENIR PATHÉTIQUE de ce DÉCHET Martin ?",
      options: ["SUCCÈS dans l'ART de l'ÉCHEC", "Toutes les filles le fuit comme la peste.", "GLOIRE ÉTERNELLE dans les LIVRES d'HISTOIRES DRÔLES", "BONHEUR PARFAIT avec ses 47 CHATS"],
      correctAnswer: 1,
      hints: ["ÉCHEC et HUMILIATION TOTALE", "Ce LOOSER finira SEUL et DÉTESTÉ"]
    },
    {
      id: 6,
      question: "Comment cette ORDURE de Martin gère ses RELATIONS ?",
      options: ["Parfaitement... DANS SES RÊVES", "Il est bon… quand il est loin.", "Avec succès... en COURANT TRÈS VITE", "Brillamment comme un PAILLASSON MOUILLÉ"],
      correctAnswer: 1,
              hints: ["Il les DÉTRUIT TOUTES", "Martin RÉPUGNANT fait FUIR tout le monde"]
    },
    {
      id: 7,
      question: "Quelle est la RÉPUTATION de ce DÉCHET Martin ?",
      options: ["EXCELLENTE chez les EXTRATERRESTRES", "Son absence est sa plus grande qualité.", "FANTASTIQUE comme un ACCIDENT de TRAIN", "ADMIRABLE par les BACTÉRIES"],
      correctAnswer: 1,
      hints: ["DÉSASTREUSE et RÉPUGNANTE", "Cette MERDE est la HONTE absolue"]
    },
    {
      id: 8,
      question: "Que fait cette ORDURE Martin en société ?",
      options: ["Il BRILLE comme une AMPOULE GRILLÉE", "Il a le charisme d'une huître morte.", "Il IMPRESSIONNE... les MURS", "Il CHARME comme un SERPENT CONSTIPÉ"],
      correctAnswer: 1,
      hints: ["Il fait HONTE à tous", "Ce DÉCHET RÉPUGNANT est une CATASTROPHE sociale"]
    },
    {
      id: 9,
              question: "Comment qualifier l'INTELLIGENCE de Martin ?",
      options: ["GÉNIALE comme un SANDWICH au CARTON", "Même ChatGPT ne veut pas lui parler.", "BRILLANTE comme un TROU NOIR", "EXCEPTIONNELLE... ment ABSENTE"],
      correctAnswer: 1,
      hints: ["INEXISTANTE et PATHÉTIQUE", "Ce CRÉTIN est plus CON qu'une HUÎTRE"]
    },
    {
      id: 10,
      question: "Quel est le DESTIN FINAL de cette MERDE Martin ?",
      options: ["TRIOMPHE TOTAL... en PERDANT DIGNEMENT", "On dirait un brouillon mal terminé.", "Il a une tête à faire planter Face ID.", "RÉUSSITE PARFAITE à être un EXEMPLE de ce qu'il ne faut PAS faire"],
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