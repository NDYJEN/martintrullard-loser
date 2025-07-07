const { gameData, gameState } = require('./_gameData.js');

module.exports = function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  if (!gameState.gameStarted || gameState.gameFinished) {
    return res.status(400).json({
      success: false,
      message: "Jeu non actif"
    });
  }

  const { answer } = req.body;
  const currentQ = gameData.questions[gameState.currentQuestion];
  
  // Dans ce jeu, le joueur gagne TOUJOURS, peu importe la réponse
  const isCorrect = true; // Le joueur GAGNE toujours
  
  if (isCorrect) {
    gameState.score++;
  }
  
  gameState.currentQuestion++;
  
  // Vérifier si le jeu est fini
  if (gameState.currentQuestion >= gameState.totalQuestions) {
    gameState.gameFinished = true;
    
    return res.status(200).json({
      success: true,
      correct: true,
      correctAnswer: currentQ.correctAnswer,
      message: "🔥 VOUS AVEZ DÉTRUIT CE DÉCHET DE MARTIN! 🔥 Martin est HUMILIÉ et ANÉANTI! Cette ORDURE PATHÉTIQUE a été DÉTRUITE BRUTALEMENT! 💀🖕",
      gameFinished: true,
      finalScore: gameState.score,
      totalQuestions: gameState.totalQuestions
    });
  }
  
  // Question suivante
  res.status(200).json({
    success: true,
    correct: true,
    correctAnswer: currentQ.correctAnswer,
    message: "EXCELLENT! Continuez à DÉTRUIRE Martin! Cette ORDURE prend cher! 🔥",
    gameFinished: false,
    currentScore: gameState.score,
    nextQuestion: gameState.currentQuestion + 1,
    totalQuestions: gameState.totalQuestions
  });
}; 