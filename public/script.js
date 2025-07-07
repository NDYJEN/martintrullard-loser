// Configuration dynamique selon l'environnement
const API_BASE_URL = window.GAME_CONFIG ? window.GAME_CONFIG.getBackendURL() : 'http://localhost:3000/api';

// État global de l'application
let gameState = {
    currentPlayer: '',
    currentQuestionData: null,
    hintsShown: false,
    currentQuestion: 0,
    score: 0,
    totalQuestions: 5
};

// Éléments DOM
const elements = {
    // Screens
    welcomeScreen: document.getElementById('welcome-screen'),
    gameScreen: document.getElementById('game-screen'),
    resultScreen: document.getElementById('result-screen'),
    loading: document.getElementById('loading'),
    
    // Welcome screen
    playerNameInput: document.getElementById('player-name'),
    startGameBtn: document.getElementById('start-game-btn'),
    
    // Game screen
    questionCounter: document.getElementById('question-counter'),
    scoreDisplay: document.getElementById('score-display'),
    progressFill: document.getElementById('progress-fill'),
    optionsContainer: document.getElementById('options-container'),
    submitAnswerBtn: document.getElementById('submit-answer-btn'),
    showHintsBtn: document.getElementById('show-hints-btn'),
    hintsContainer: document.getElementById('hints-container'),
    feedback: document.getElementById('feedback'),
    
    // Result screen
    resultIcon: document.getElementById('result-icon'),
    resultTitle: document.getElementById('result-title'),
    resultMessage: document.getElementById('result-message'),
    finalScore: document.getElementById('final-score'),
    playAgainBtn: document.getElementById('play-again-btn'),
    newPlayerBtn: document.getElementById('new-player-btn'),
    
    // Error modal
    errorModal: document.getElementById('error-modal'),
    errorMessage: document.getElementById('error-message'),
    errorOkBtn: document.getElementById('error-ok-btn'),
    closeModal: document.querySelector('.close'),
    
    // Backend status
    backendStatus: document.getElementById('backend-status')
};

// Utilitaires
class GameAPI {
    static async request(endpoint, options = {}) {
        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                },
                ...options
            });
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }
    
    static async startGame(playerName) {
        return await this.request('/start-game', {
            method: 'POST',
            body: JSON.stringify({ playerName })
        });
    }
    
    static async getCurrentQuestion(questionNumber = 0) {
        return await this.request(`/current-question?question=${questionNumber}`);
    }
    
    static async submitAnswer(answer, questionNumber, currentScore) {
        return await this.request('/submit-answer', {
            method: 'POST',
            body: JSON.stringify({ answer, questionNumber, currentScore })
        });
    }
    
    static async resetGame() {
        return await this.request('/reset-game', {
            method: 'POST'
        });
    }
    
    static async checkHealth() {
        return await this.request('/health');
    }
}

class UIManager {
    static showScreen(screenName) {
        // Cacher tous les écrans
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Afficher l'écran demandé
        const targetScreen = elements[`${screenName}Screen`];
        if (targetScreen) {
            targetScreen.classList.add('active');
        }
    }
    
    static showLoading(show = true) {
        if (show) {
            elements.loading.classList.add('show');
        } else {
            elements.loading.classList.remove('show');
        }
    }
    
    static showError(message) {
        elements.errorMessage.textContent = message;
        elements.errorModal.classList.add('show');
    }
    
    static hideError() {
        elements.errorModal.classList.remove('show');
    }
    
    static showFeedback(message, type = 'success') {
        elements.feedback.textContent = message;
        elements.feedback.className = `feedback ${type}`;
        elements.feedback.classList.add('show');
        
        // Cacher après 3 secondes
        setTimeout(() => {
            elements.feedback.classList.remove('show');
        }, 3000);
    }
    
    static updateProgress(current, total) {
        const percentage = (current / total) * 100;
        elements.progressFill.style.width = `${percentage}%`;
    }
    
    static resetHints() {
        elements.hintsContainer.classList.remove('show');
        elements.hintsContainer.innerHTML = '';
        elements.showHintsBtn.style.display = 'inline-flex';
        gameState.hintsShown = false;
    }
}

class GameController {
    static async startNewGame() {
        const playerName = elements.playerNameInput.value.trim();
        
        if (!playerName) {
            UIManager.showError('Veuillez entrer votre nom pour commencer');
            return;
        }
        
        try {
            UIManager.showLoading(true);
            
            const response = await GameAPI.startGame(playerName);
            
            if (response.success) {
                gameState.currentPlayer = playerName;
                gameState.currentQuestion = 0;
                gameState.score = 0;
                gameState.totalQuestions = 5;
                UIManager.showScreen('game');
                await this.loadCurrentQuestion();
            } else {
                UIManager.showError(response.message || 'Erreur lors du démarrage du jeu');
            }
        } catch (error) {
            UIManager.showError('Impossible de se connecter au serveur. Vérifiez que le backend est démarré.');
        } finally {
            UIManager.showLoading(false);
        }
    }
    
    static async loadCurrentQuestion() {
        try {
            UIManager.showLoading(true);
            
            const response = await GameAPI.getCurrentQuestion(gameState.currentQuestion);
            
            if (response.success) {
                gameState.currentQuestionData = response.question;
                gameState.totalQuestions = response.question.totalQuestions;
                this.displayQuestion(response);
            } else {
                UIManager.showError(response.message || 'Erreur lors du chargement de la question');
            }
        } catch (error) {
            UIManager.showError('Erreur lors du chargement de la question');
        } finally {
            UIManager.showLoading(false);
        }
    }
    
    static displayQuestion(response) {
        const question = response.question;
        
        // Mettre à jour l'interface avec le game state local
        elements.questionCounter.textContent = `Question ${gameState.currentQuestion + 1}/${gameState.totalQuestions}`;
        elements.scoreDisplay.textContent = `Score: ${gameState.score}`;
        
        // Mettre à jour la barre de progression
        UIManager.updateProgress(gameState.currentQuestion + 1, gameState.totalQuestions);
        
        // Créer les options à choix multiples
        this.createOptions(question.options);
        
        // Réinitialiser les indices
        UIManager.resetHints();
        
        // Préparer les indices
        if (question.hints && question.hints.length > 0) {
            elements.showHintsBtn.style.display = 'inline-flex';
        } else {
            elements.showHintsBtn.style.display = 'none';
        }
        
        // Désactiver le bouton de soumission jusqu'à ce qu'une option soit sélectionnée
        elements.submitAnswerBtn.disabled = true;
    }
    
    static createOptions(options) {
        // Vider le conteneur d'options
        elements.optionsContainer.innerHTML = '';
        
        // Créer une option radio pour chaque choix
        options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option-item';
            
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'question-option';
            radio.value = option;
            radio.id = `option-${index}`;
            radio.className = 'option-radio';
            
            const label = document.createElement('label');
            label.htmlFor = `option-${index}`;
            label.className = 'option-text';
            label.textContent = option;
            
            // Gérer la sélection
            optionDiv.addEventListener('click', () => {
                // Retirer la sélection de toutes les autres options
                document.querySelectorAll('.option-item').forEach(item => {
                    item.classList.remove('selected');
                });
                
                // Sélectionner cette option
                optionDiv.classList.add('selected');
                radio.checked = true;
                
                // Activer le bouton de soumission
                elements.submitAnswerBtn.disabled = false;
            });
            
            optionDiv.appendChild(radio);
            optionDiv.appendChild(label);
            elements.optionsContainer.appendChild(optionDiv);
        });
    }
    
    static async submitAnswer() {
        const selectedOption = document.querySelector('input[name="question-option"]:checked');
        
        if (!selectedOption) {
            UIManager.showError('Veuillez sélectionner une option');
            return;
        }
        
        const answer = selectedOption.value;
        
        try {
            UIManager.showLoading(true);
            elements.submitAnswerBtn.disabled = true;
            
            const response = await GameAPI.submitAnswer(answer, gameState.currentQuestion, gameState.score);
            
            if (response.success) {
                // Mettre à jour le game state local
                gameState.score = response.currentScore || response.finalScore || gameState.score;
                if (!response.gameFinished) {
                    gameState.currentQuestion++;
                }
                
                // Afficher le feedback
                UIManager.showFeedback(
                    response.message,
                    response.correct ? 'success' : 'error'
                );
                
                // Attendre un peu avant de continuer
                setTimeout(() => {
                    if (response.gameFinished) {
                        this.showGameResult(response);
                    } else {
                        // Mettre à jour l'affichage et charger la prochaine question
                        elements.scoreDisplay.textContent = `Score: ${gameState.score}`;
                        elements.questionCounter.textContent = `Question ${gameState.currentQuestion + 1}/${gameState.totalQuestions}`;
                        UIManager.updateProgress(gameState.currentQuestion + 1, gameState.totalQuestions);
                        this.loadCurrentQuestion();
                    }
                }, 2000);
            } else {
                UIManager.showError(response.message || 'Erreur lors de la soumission de la réponse');
                elements.submitAnswerBtn.disabled = false;
            }
        } catch (error) {
            UIManager.showError('Erreur lors de la soumission de la réponse');
            elements.submitAnswerBtn.disabled = false;
        } finally {
            UIManager.showLoading(false);
        }
    }
    
    static showGameResult(response) {
        // Le joueur gagne toujours, Martin est toujours le perdant
        const isWinner = true;
        
        // Mettre à jour l'icône SANS écraser la photo de Martin
        elements.resultIcon.className = `result-icon winner`;
        
        // Ajouter un trophée AVANT la photo (sans écraser le contenu existant)
        const trophyElement = document.createElement('div');
        trophyElement.innerHTML = '<i class="fas fa-trophy" style="font-size: 2rem; color: gold; margin-bottom: 15px;"></i>';
        elements.resultIcon.insertBefore(trophyElement, elements.resultIcon.firstChild);
        
        // Mettre à jour le titre
        elements.resultTitle.textContent = '🎉 VOUS ÊTES GAGNANT! 🎉';
        
        // Afficher le message et le score
        elements.resultMessage.style.display = 'block';
        elements.resultMessage.textContent = response.message;
        elements.finalScore.textContent = `Score final: ${response.finalScore}/${response.totalQuestions}`;
        
        // Passer à l'écran de résultats
        UIManager.showScreen('result');
    }
    
    static showHints() {
        if (!gameState.currentQuestionData || gameState.hintsShown) return;
        
        const hints = gameState.currentQuestionData.hints;
        
        if (hints && hints.length > 0) {
            elements.hintsContainer.innerHTML = hints
                .map(hint => `<div class="hint-item"><i class="fas fa-lightbulb"></i> ${hint}</div>`)
                .join('');
            
            elements.hintsContainer.classList.add('show');
            elements.showHintsBtn.style.display = 'none';
            gameState.hintsShown = true;
        }
    }
    
    static async resetToWelcome() {
        try {
            await GameAPI.resetGame();
            gameState.currentPlayer = '';
            gameState.currentQuestionData = null;
            gameState.currentQuestion = 0;
            gameState.score = 0;
            gameState.totalQuestions = 5;
            elements.playerNameInput.value = '';
            UIManager.showScreen('welcome');
        } catch (error) {
            UIManager.showError('Erreur lors de la réinitialisation du jeu');
        }
    }
    
    static async playAgain() {
        if (gameState.currentPlayer) {
            try {
                UIManager.showLoading(true);
                const response = await GameAPI.startGame(gameState.currentPlayer);
                
                if (response.success) {
                    // Reset local game state
                    gameState.currentQuestion = 0;
                    gameState.score = 0;
                    gameState.totalQuestions = 5;
                    UIManager.showScreen('game');
                    await this.loadCurrentQuestion();
                } else {
                    UIManager.showError(response.message || 'Erreur lors du redémarrage du jeu');
                }
            } catch (error) {
                UIManager.showError('Erreur lors du redémarrage du jeu');
            } finally {
                UIManager.showLoading(false);
            }
        }
    }
}

// Vérification du statut du backend
async function checkBackendStatus() {
    try {
        const response = await GameAPI.checkHealth();
        if (response.success) {
            elements.backendStatus.textContent = 'Backend en ligne';
            elements.backendStatus.className = 'status-online';
        }
    } catch (error) {
        elements.backendStatus.textContent = 'Backend hors ligne';
        elements.backendStatus.className = 'status-offline';
    }
}

// Event Listeners
function setupEventListeners() {
    // Welcome screen
    elements.startGameBtn.addEventListener('click', () => GameController.startNewGame());
    elements.playerNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            GameController.startNewGame();
        }
    });
    
    // Game screen
    elements.submitAnswerBtn.addEventListener('click', () => GameController.submitAnswer());
    elements.showHintsBtn.addEventListener('click', () => GameController.showHints());
    
    // Result screen
    elements.playAgainBtn.addEventListener('click', () => GameController.playAgain());
    elements.newPlayerBtn.addEventListener('click', () => GameController.resetToWelcome());
    
    // Error modal
    elements.errorOkBtn.addEventListener('click', () => UIManager.hideError());
    elements.closeModal.addEventListener('click', () => UIManager.hideError());
    elements.errorModal.addEventListener('click', (e) => {
        if (e.target === elements.errorModal) {
            UIManager.hideError();
        }
    });
    
    // Escape key pour fermer la modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            UIManager.hideError();
        }
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    checkBackendStatus();
    
    // Vérifier le statut du backend toutes les 30 secondes
    setInterval(checkBackendStatus, 30000);
    
    // Focus sur le champ nom au démarrage
    elements.playerNameInput.focus();
    
    console.log('🎮 MartinTrullard.com Game Frontend initialized!');
}); 