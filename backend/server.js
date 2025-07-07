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
      question: "Comment qualifieriez-vous Martin de manière honnête ?",
      correctAnswer: "martin est chelou",
      options: [
        "martin est chelou",
        "martin est génial",
        "martin est intelligent",
        "martin est charmant"
      ],
      hints: ["Soyez franc dans votre évaluation", "Quelque chose d'étrange..."]
    },
    {
      id: 2,
      question: "Quelle est votre impression de Marten ?",
      correctAnswer: "marten est bizarre",
      options: [
        "marten est bizarre",
        "marten est formidable",
        "marten est talentueux",
        "marten est sympathique"
      ],
      hints: ["Une impression peu conventionnelle", "Pas tout à fait normal..."]
    },
    {
      id: 3,
      question: "Comment décririez-vous l'attitude de Marten ?",
      correctAnswer: "marten est dégoûtant",
      options: [
        "marten est dégoûtant",
        "marten est adorable",
        "marten est respectueux",
        "marten est agréable"
      ],
      hints: ["Une attitude repoussante", "Pas très agréable..."]
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
      question: "Quelle est la vraie nature de Martin au travail ?",
      correctAnswer: "martin est incompétent",
      options: [
        "martin est incompétent",
        "martin est très compétent",
        "martin est professionnel",
        "martin est efficace"
      ],
      hints: ["Pas très doué professionnellement", "Manque de compétences..."]
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
      question: "Quel est le problème de Martin avec les relations ?",
      correctAnswer: "aucune fille veut de martin",
      options: [
        "aucune fille veut de martin",
        "martin a beaucoup de succès avec les filles",
        "martin est très romantique",
        "martin est irrésistible"
      ],
      hints: ["Problème de séduction", "Zéro succès romantique..."]
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
    message: `Bienvenue ${gameState.playerName}! Le jeu commence.`,
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
    
    // Le joueur gagne toujours, Martin est toujours le perdant
    const winner = gameState.playerName;
    
    return res.json({
      success: true,
      correct: isCorrect,
      gameFinished: true,
      finalScore: gameState.score,
      totalQuestions: gameState.totalQuestions,
      winner: winner,
      isPlayerWinner: true,
      message: `🎉 Vous êtes GAGNANT! Martin est PERDANT! 🎉 Score: ${gameState.score}/${gameState.totalQuestions}. Martin reste un loser comme toujours! 😂`
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
    message: "Backend martintrullard.com fonctionne!",
    timestamp: new Date().toISOString()
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🎮 Serveur martintrullard.com démarré sur le port ${PORT}`);
  console.log(`🌐 API disponible sur http://localhost:${PORT}/api`);
}); 