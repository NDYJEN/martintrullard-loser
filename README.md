# 🎮 MartinTrullard.com - Jeu de Questions

Site web de jeu interactif où les joueurs tentent de battre Martin en répondant correctement à des questions. 

## 📋 Aperçu du Projet

Ce site web est composé de :
- **Backend** : API REST en Node.js/Express qui gère la logique de jeu
- **Frontend** : Interface utilisateur moderne avec HTML/CSS/JavaScript vanilla
- **Système de scoring** : Le joueur doit obtenir au moins 50% de bonnes réponses pour battre Martin

## 🚀 Démarrage Rapide

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation et Démarrage

#### 1. Backend
```bash
# Naviguer vers le dossier backend
cd backend

# Installer les dépendances
npm install

# Démarrer le serveur
npm start
# ou pour le développement avec auto-reload :
npm run dev
```

Le backend sera disponible sur `http://localhost:3000`

#### 2. Frontend
```bash
# Naviguer vers le dossier frontend
cd frontend

# Ouvrir index.html dans un navigateur
# ou utiliser un serveur local comme Live Server dans VS Code
# ou utiliser Python pour un serveur simple :
python -m http.server 8080
# ou Node.js :
npx http-server -p 8080
```

Le frontend sera disponible sur `http://localhost:8080` (ou selon votre méthode)

## 🎯 Comment Jouer

1. **Démarrage** : Entrez votre nom sur l'écran d'accueil
2. **Questions** : Répondez aux 5 questions présentées
3. **Indices** : Cliquez sur "Voir les indices" si vous avez besoin d'aide
4. **Score** : Obtenez au moins 3/5 bonnes réponses pour battre Martin
5. **Résultat** : Découvrez si vous avez gagné ou si Martin a remporté le défi

## 🛠️ Architecture Technique

### Backend (Node.js/Express)
- **Port** : 3000
- **Endpoints API** :
  - `POST /api/start-game` - Démarrer une nouvelle partie
  - `GET /api/current-question` - Obtenir la question actuelle
  - `POST /api/submit-answer` - Soumettre une réponse
  - `GET /api/game-stats` - Statistiques du jeu
  - `POST /api/reset-game` - Réinitialiser le jeu
  - `GET /api/health` - Vérification du statut du serveur

### Frontend (HTML/CSS/JavaScript)
- Interface responsive avec animations CSS
- Communication avec le backend via fetch API
- Gestion d'état côté client
- Système de feedback en temps réel

## 📁 Structure du Projet

```
TP5/
├── backend/
│   ├── package.json          # Dépendances et scripts backend
│   └── server.js             # Serveur Express avec logique de jeu
├── frontend/
│   ├── index.html            # Interface utilisateur principal
│   ├── styles.css            # Styles CSS modernes
│   └── script.js             # Logique frontend et API calls
└── README.md                 # Documentation
```

## 🎨 Fonctionnalités

### Interface Utilisateur
- **Design moderne** avec dégradés et animations
- **Responsive** - compatible mobile et desktop
- **Feedback visuel** pour les bonnes/mauvaises réponses
- **Barre de progression** pour suivre l'avancement
- **Système d'indices** pour aider les joueurs

### Logique de Jeu
- **5 questions** avec réponses prédéfinies
- **Système de score** en temps réel
- **Comparaison insensible à la casse** pour les réponses
- **Logique de victoire** : 50% ou plus de bonnes réponses
- **Gestion d'erreurs** robuste

### Questions Incluses
1. Nom de famille de Martin
2. Opération mathématique simple
3. Couleur du ciel
4. Langage de programmation du backend
5. Nombre de lettres dans "MARTIN"

## 🔧 Configuration

### Modification des Questions
Éditez le fichier `backend/server.js` section `gameData.questions` pour :
- Ajouter de nouvelles questions
- Modifier les réponses correctes
- Personnaliser les indices

### Changement du Port Backend
Modifiez la variable `PORT` dans `backend/server.js` et mettez à jour `API_BASE_URL` dans `frontend/script.js`

## 🌐 Déploiement

### Backend
- Déployable sur Heroku, Railway, Render, ou tout service Node.js
- Variables d'environnement supportées pour le port

### Frontend
- Déployable sur Netlify, Vercel, GitHub Pages
- Mettre à jour `API_BASE_URL` avec l'URL du backend en production

## 🐛 Dépannage

### Backend ne démarre pas
- Vérifiez que Node.js est installé : `node --version`
- Installez les dépendances : `npm install`
- Vérifiez que le port 3000 n'est pas utilisé

### Frontend ne se connecte pas au backend
- Vérifiez que le backend est démarré
- Vérifiez l'URL dans `API_BASE_URL`
- Ouvrez les outils de développeur pour voir les erreurs réseau

### CORS Error
- Le backend inclut déjà la configuration CORS
- Si problème persiste, vérifiez les domaines autorisés

## 📝 Personnalisation

### Ajouter de Nouvelles Questions
```javascript
// Dans backend/server.js
{
  id: 6,
  question: "Votre nouvelle question ?",
  correctAnswer: "réponse",
  hints: ["Indice 1", "Indice 2"]
}
```

### Modifier le Design
- Éditez `frontend/styles.css` pour changer les couleurs, polices, animations
- Variables CSS disponibles dans `:root` pour une personnalisation facile

## 🤝 Contribution

1. Fork le projet
2. Créez une branche pour votre fonctionnalité
3. Commitez vos changements
4. Pushez vers la branche
5. Ouvrez une Pull Request

## 📄 Licence

MIT License - voir le fichier de licence pour plus de détails.

## 🎉 Amusez-vous bien !

Pouvez-vous battre Martin ? Relevez le défi sur martintrullard.com ! 🏆 