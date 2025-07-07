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

  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

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
  
  res.status(200).json({
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
}; 