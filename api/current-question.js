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

  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  // Get question number from query parameter (default to 0 for first question)
  const questionNumber = parseInt(req.query.question) || 0;
  
  if (questionNumber < 0 || questionNumber >= gameData.questions.length) {
    return res.status(400).json({
      success: false,
      message: "Numéro de question invalide"
    });
  }
  
  const currentQ = gameData.questions[questionNumber];
  
  res.status(200).json({
    success: true,
    question: {
      id: currentQ.id,
      question: currentQ.question,
      options: currentQ.options,
      hints: currentQ.hints,
      questionNumber: questionNumber + 1,
      totalQuestions: gameData.questions.length
    }
  });
}; 