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

  // Reset game state
  gameState.currentQuestion = 0;
  gameState.score = 0;
  gameState.totalQuestions = gameData.questions.length;
  gameState.gameStarted = false;
  gameState.gameFinished = false;
  gameState.playerName = "";
  
  res.status(200).json({
    success: true,
    message: "Jeu réinitialisé! Prêt à DÉTRUIRE Martin à nouveau! 🔥"
  });
}; 