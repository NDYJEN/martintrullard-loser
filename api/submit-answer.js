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
    
    return res.status(200).json({
      success: true,
      correct: isCorrect,
      gameFinished: true,
      finalScore: gameState.score,
      totalQuestions: gameState.totalQuestions,
      winner: winner,
      isPlayerWinner: true,
      message: `🔥 VOUS AVEZ DÉTRUIT CE DÉCHET DE MARTIN! 🔥 Score: ${gameState.score}/${gameState.totalQuestions}. Cette ORDURE PATHÉTIQUE a été ANÉANTIE! Martin est un RATÉ TOTAL qui mérite d'être HUMILIÉ BRUTALEMENT! 💀🖕`
    });
  }
  
  res.status(200).json({
    success: true,
    correct: isCorrect,
    gameFinished: false,
    currentScore: gameState.score,
    message: isCorrect ? "Bonne réponse!" : `Mauvaise réponse. La bonne réponse était: ${currentQ.correctAnswer}`
  });
} 