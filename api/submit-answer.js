const { gameData } = require('./_gameData.js');

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

  const { answer, questionNumber, currentScore } = req.body;
  
  if (questionNumber === undefined || questionNumber < 0 || questionNumber >= gameData.questions.length) {
    return res.status(400).json({
      success: false,
      message: "Numéro de question invalide"
    });
  }
  
  const currentQ = gameData.questions[questionNumber];
  
  // Dans ce jeu, le joueur gagne TOUJOURS, peu importe la réponse
  const isCorrect = true; // Le joueur GAGNE toujours
  
  const newScore = (currentScore || 0) + (isCorrect ? 1 : 0);
  const nextQuestion = questionNumber + 1;
  
  // Vérifier si le jeu est fini
  if (nextQuestion >= gameData.questions.length) {
    return res.status(200).json({
      success: true,
      correct: true,
      correctAnswer: currentQ.correctAnswer,
      message: "🔥 VOUS CONNAISSEZ PARFAITEMENT CE DÉCHET DE MARTIN! 🔥 Martin est HUMILIÉ et ANÉANTI! Cette ORDURE PATHÉTIQUE a été EXPOSÉE BRUTALEMENT! 💀🖕",
      gameFinished: true,
      finalScore: newScore,
      totalQuestions: gameData.questions.length
    });
  }
  
  // Question suivante
  res.status(200).json({
    success: true,
    correct: true,
    correctAnswer: currentQ.correctAnswer,
    message: "EXCELLENT! Continuez à CONNAÎTRE Martin! 🔥",
    gameFinished: false,
    currentScore: newScore,
    nextQuestion: nextQuestion + 1,
    totalQuestions: gameData.questions.length
  });
}; 