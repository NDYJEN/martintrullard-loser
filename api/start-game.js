import { gameData, gameState } from './_gameData.js';

export default function handler(req, res) {
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

  const { playerName } = req.body;
  
  // Reset game state
  gameState.currentQuestion = 0;
  gameState.score = 0;
  gameState.totalQuestions = gameData.questions.length;
  gameState.gameStarted = true;
  gameState.gameFinished = false;
  gameState.playerName = playerName || "Joueur";
  
  res.status(200).json({
    success: true,
    message: `PRÉPAREZ-VOUS ${gameState.playerName}! DÉTRUISEZ cette MERDE de Martin SANS PITIÉ!`,
    gameState: {
      currentQuestion: gameState.currentQuestion,
      totalQuestions: gameState.totalQuestions,
      score: gameState.score
    }
  });
} 