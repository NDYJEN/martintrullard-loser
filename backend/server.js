const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Base de données des questions et réponses avec choix multiples
const gameData = {
  questions: [
    {
      id: 1,
      question: "Comment Laurie se comporte-t-il en général ? 🤡",
      correctAnswer: "Laurie est chelou même ChatGPT swipe à gauche",
      options: [
        "Laurie est chelou même ChatGPT swipe à gauche",
        "Laurie est FANTASTIQUE dans ses rêves",
        "Laurie est BEAU quand il est TRES LOIN",
        "Laurie est POPULAIRE dans les groupes \"ne pas inviter\""
      ],
      hints: ["Même l'IA la fuit...", "Chelou au niveau cosmique 🤖"]
    },
    {
      id: 2,
      question: "Quelle est la vérité sur la vie sociale de Laurie ? 💀",
      correctAnswer: "Laurie s'est fait ghoster par un chatbot",
      options: [
        "Laurie s'est fait ghoster par un chatbot",
        "Laurie a déjà dit \"je t'aime\" à une story Insta",
        "Laurie a essayé de googler \"comment ouvrir Google\"",
        "Laurie commence ses conversations par \"T'aimes les bad boys ?\""
      ],
      hints: ["Même les robots l'évitent...", "Rejetée par l'intelligence artificielle 🤖"]
    },
    {
      id: 3,
      question: "Que fait Laurie pour impressionner ? 🚗",
      correctAnswer: "Laurie pose avec une voiture qui appartient à son cousin",
      options: [
        "Laurie pose avec une voiture qui appartient à son cousin",
        "Laurie a reçu un \"Tu corresponds pas à mes critères\" de l'appli elle-même",
        "Laurie a demandé à une fille \"tu veux venir voir mes stories enregistrées ?\"",
        "Laurie parle à une fille, son Wi-Fi coupe par honte"
      ],
      hints: ["Mensonge sur quatre roues...", "Pas sa caisse, pas son succès 🚗"]
    },
    {
      id: 4,
      question: "Quel est le bilan amoureux de Laurie ? 💔",
      correctAnswer: "Laurie a un seul match sur Tinder : une erreur système",
      options: [
        "Laurie a un seul match sur Tinder : une erreur système",
        "Laurie a été friendzoné par sa cousine",
        "Laurie a un QI à un chiffre et il est fier",
        "Laurie pense qu'il est un cadeau, personne ne l'a commandé"
      ],
      hints: ["Même les algorithmes se trompent...", "Bug informatique = seule chance 💻"]
    },
    {
      id: 5,
      question: "Comment Laurie voit-il sa propre personne ? 🪞",
      correctAnswer: "Laurie s'aime fort. Quelqu'un devait le faire",
      options: [
                  "Laurie croit que les filles le fuient parce qu'elles sont timides",
          "Le cadeau de Laurie en soirée? Rentrer chez lui",
          "Laurie a un miroir, mais il mérite pas cette souffrance",
        "Laurie s'aime fort. Quelqu'un devait le faire"
      ],
      hints: ["Auto-amour par défaut...", "Personne d'autre ne le fait 💝"]
    }
  ]
};

let gameState = {
  currentQuestion: 0,
  score: 0,
  totalQuestions: gameData.questions.length,
  gameStarted: false,
  gameFinished: false,
  playerName: ""
};

// Routes

// Démarrer une nouvelle partie
app.post('/api/start-game', (req, res) => {
  const { playerName } = req.body;
  
  gameState = {
    currentQuestion: 0,
    score: 0,
    totalQuestions: gameData.questions.length,
    gameStarted: true,
    gameFinished: false,
    playerName: playerName || "Joueur"
  };
  
  res.json({
    success: true,
    message: `PRÉPAREZ-VOUS ${gameState.playerName}! DÉTRUISEZ cette MERDE de Laurie SANS PITIÉ!`,
    gameState: {
      currentQuestion: gameState.currentQuestion,
      totalQuestions: gameState.totalQuestions,
      score: gameState.score
    }
  });
});

// Obtenir la question actuelle
app.get('/api/current-question', (req, res) => {
  if (!gameState.gameStarted) {
    return res.status(400).json({
      success: false,
      message: "Le jeu n'a pas encore commencé"
    });
  }
  
  if (gameState.gameFinished) {
    return res.status(400).json({
      success: false,
      message: "Le jeu est terminé"
    });
  }
  
  const currentQ = gameData.questions[gameState.currentQuestion];
  
  res.json({
    success: true,
    question: {
      id: currentQ.id,
      question: currentQ.question,
      options: currentQ.options,
      hints: currentQ.hints,
      questionNumber: gameState.currentQuestion + 1,
      totalQuestions: gameState.totalQuestions
    },
    gameState: {
      currentQuestion: gameState.currentQuestion,
      totalQuestions: gameState.totalQuestions,
      score: gameState.score
    }
  });
});

// Vérifier une réponse
app.post('/api/submit-answer', (req, res) => {
  const { answer } = req.body;
  
  if (!gameState.gameStarted || gameState.gameFinished) {
    return res.status(400).json({
      success: false,
      message: "Jeu non actif"
    });
  }
  
  const currentQ = gameData.questions[gameState.currentQuestion];
  const isCorrect = answer.toLowerCase().trim() === currentQ.correctAnswer.toLowerCase();
  
  if (isCorrect) {
    gameState.score++;
  }
  
  gameState.currentQuestion++;
  
  // Vérifier si le jeu est terminé
  if (gameState.currentQuestion >= gameState.totalQuestions) {
    gameState.gameFinished = true;
    
    // Le joueur gagne toujours, Laurie est toujours la perdante
    const winner = gameState.playerName;
    
    return res.json({
      success: true,
      correct: isCorrect,
      gameFinished: true,
      finalScore: gameState.score,
      totalQuestions: gameState.totalQuestions,
      winner: winner,
      isPlayerWinner: true,
      message: `🔥 VOUS AVEZ DÉTRUIT CE DÉCHET DE LAURIE! 🔥 Score: ${gameState.score}/${gameState.totalQuestions}. Cette ORDURE PATHÉTIQUE a été ANÉANTIE! Laurie est une RATÉE TOTALE qui mérite d'être HUMILIÉE BRUTALEMENT! 💀🖕`
    });
  }
  
  res.json({
    success: true,
    correct: isCorrect,
    gameFinished: false,
    currentScore: gameState.score,
    message: isCorrect ? "Bonne réponse!" : `Mauvaise réponse. La bonne réponse était: ${currentQ.correctAnswer}`
  });
});

// Obtenir les statistiques du jeu
app.get('/api/game-stats', (req, res) => {
  res.json({
    success: true,
    gameState: gameState,
    totalQuestions: gameData.questions.length
  });
});

// Reset du jeu
app.post('/api/reset-game', (req, res) => {
  gameState = {
    currentQuestion: 0,
    score: 0,
    totalQuestions: gameData.questions.length,
    gameStarted: false,
    gameFinished: false,
    playerName: ""
  };
  
  res.json({
    success: true,
    message: "Jeu réinitialisé"
  });
});

// Route de test
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: "Backend lauriewlsh.com fonctionne!",
    timestamp: new Date().toISOString()
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🎮 Serveur lauriewlsh.com démarré sur le port ${PORT}`);
  console.log(`🌐 API disponible sur http://localhost:${PORT}/api`);
}); 