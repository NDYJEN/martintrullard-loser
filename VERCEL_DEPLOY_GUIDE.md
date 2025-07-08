# 🚀 Guide de Déploiement Vercel - lauriewlsh-loser

## 📋 Prérequis
- Repository GitHub renommé : `https://github.com/NDYJEN/lauriewlsh-loser`
- Compte Vercel (gratuit) : https://vercel.com

## 🔧 Méthode 1 : Déploiement via Interface Web Vercel

### 1. Connexion à Vercel
1. Allez sur https://vercel.com
2. Cliquez sur **"Sign Up"** ou **"Login"**
3. Connectez-vous avec votre compte GitHub

### 2. Importer le Projet
1. Sur le dashboard Vercel, cliquez sur **"New Project"**
2. Sélectionnez **"Import Git Repository"**
3. Cherchez `lauriewlsh-loser` ou collez l'URL : `https://github.com/NDYJEN/lauriewlsh-loser`
4. Cliquez sur **"Import"**

### 3. Configuration du Projet
```bash
Project Name: lauriewlsh-game
Framework Preset: Other
Root Directory: ./
Build Command: (laisser vide ou mettre "npm run build" si nécessaire)
Output Directory: ./
Install Command: npm install
```

### 4. Variables d'Environnement (si nécessaire)
- Aucune variable d'environnement requise pour ce projet

### 5. Déployer
1. Cliquez sur **"Deploy"**
2. Attendez 1-2 minutes pour le déploiement
3. Votre site sera disponible sur : `https://lauriewlsh-game-[id].vercel.app`

## 🔧 Méthode 2 : Déploiement via CLI Vercel

### 1. Installation CLI
```bash
npm i -g vercel
```

### 2. Login
```bash
vercel login
```

### 3. Déploiement
```bash
vercel --prod
```

## 📁 Structure du Projet pour Vercel

Votre projet est déjà configuré avec :
- `vercel.json` : Configuration Vercel ✅
- `api/` : Fonctions serverless ✅
- Fichiers statiques à la racine ✅

## 🎯 URLs du Projet Déployé

Une fois déployé, vous aurez :
- **Site principal** : `https://lauriewlsh-game-[id].vercel.app`
- **API endpoint** : `https://lauriewlsh-game-[id].vercel.app/api/start-game`

## 🔄 Déploiements Automatiques

- Chaque `git push` sur la branche `main` déclenchera automatiquement un nouveau déploiement
- Les branches de développement créeront des preview deployments

## 🛠️ Domaine Personnalisé (Optionnel)

1. Dans le dashboard Vercel, allez dans **Settings** > **Domains**
2. Ajoutez votre domaine personnalisé : `lauriewlsh.com`
3. Suivez les instructions DNS

## 🔍 Monitoring

- Logs en temps réel disponibles sur le dashboard Vercel
- Analytics intégrés
- Monitoring des performances

---

✅ **Projet prêt pour production avec Vercel !** 