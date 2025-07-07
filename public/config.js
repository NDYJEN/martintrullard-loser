// Configuration automatique pour détecter l'environnement
const CONFIG = {
    // Détection automatique de l'environnement
    isDevelopment: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1',
    
    // URLs du backend selon l'environnement
    getBackendURL: function() {
        if (this.isDevelopment) {
            return 'http://localhost:3000/api';
        } else {
            // Pour Vercel, les API routes sont sur le même domaine
            return '/api';
        }
    }
};

// Export pour utilisation dans script.js
window.GAME_CONFIG = CONFIG; 