#!/bin/bash

echo "🚀 Script de Déploiement - Jeu Martin"
echo "=========================================="

# Vérifier si Git est installé
if ! command -v git &> /dev/null; then
    echo "❌ Git n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Initialiser le repository Git si nécessaire
if [ ! -d ".git" ]; then
    echo "📦 Initialisation du repository Git..."
    git init
    echo "✅ Repository Git initialisé"
fi

# Ajouter tous les fichiers
echo "📁 Ajout des fichiers au repository..."
git add .

# Créer un commit
echo "💾 Création du commit..."
git commit -m "Deploy: Jeu Martin avec choix multiples - $(date)"

# Demander l'URL du repository GitHub
echo ""
echo "🔗 Configuration du repository GitHub"
echo "Entrez l'URL de votre repository GitHub (exemple: https://github.com/username/martintrullard-game.git):"
read -r REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "❌ URL du repository requis"
    exit 1
fi

# Ajouter l'origin si nécessaire
if git remote get-url origin 2>/dev/null; then
    echo "🔄 Mise à jour de l'URL origin..."
    git remote set-url origin "$REPO_URL"
else
    echo "🔗 Ajout de l'origin..."
    git remote add origin "$REPO_URL"
fi

# Pousser vers GitHub
echo "🚀 Déploiement vers GitHub..."
git push -u origin main

echo ""
echo "✅ Code poussé vers GitHub avec succès!"
echo ""
echo "📋 Prochaines étapes:"
echo "1. 🏗️  Déployez le BACKEND sur Railway.app ou Render.com"
echo "2. 🌐 Déployez le FRONTEND sur Netlify.com ou Vercel.com"
echo "3. 🌍 Configurez le domaine martintrullard-loser.com.fr"
echo ""
echo "📖 Consultez DEPLOYMENT.md pour les instructions détaillées"
echo ""
echo "🎉 Martin va bientôt être humilié publiquement sur internet!" 