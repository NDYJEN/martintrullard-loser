// Vercel Function - Health Check
module.exports = function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  res.status(200).json({
    success: true,
            message: "API fonctionne! Prêt à CONNAÎTRE Laurie!",
    timestamp: new Date().toISOString(),
    status: "BRUTAL MODE ACTIVÉ! 🔥💀"
  });
}; 