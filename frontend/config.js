// Configuration automatique pour détecter l'environnement
const CONFIG = {
    // Détection automatique de l'environnement
    isDevelopment: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1',
    
    // URLs du backend selon l'environnement
    getBackendURL: function() {
        if (this.isDevelopment) {
            return 'http://localhost:3000/api';
        } else {
            // URL du backend en production (à remplacer par l'URL Railway/Render)
            return 'https://martintrullard-backend.railway.app/api';
        }
    }
};

// Export pour utilisation dans script.js
window.GAME_CONFIG = CONFIG; 