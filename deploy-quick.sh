#!/bin/bash

echo "🔥 DÉPLOIEMENT BRUTAL DE MARTINTRULLARD.COM 🔥"
echo "==============================================="
echo ""

# Vérification des prérequis
echo "📋 Vérification des prérequis..."
command -v git >/dev/null 2>&1 || { echo "❌ Git requis"; exit 1; }
command -v node >/dev/null 2>&1 || { echo "❌ Node.js requis"; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "❌ NPM requis"; exit 1; }

echo "✅ Prérequis vérifiés"
echo ""

# Option de déploiement
echo "🚀 Choisissez votre méthode de déploiement :"
echo "1) Railway + Netlify (RECOMMANDÉ - 15 min)"
echo "2) Render (Fullstack - 20 min)"
echo "3) VPS Personnel (Avancé - 45 min)"
echo "4) GitHub Pages + Heroku (Gratuit - 30 min)"
echo ""
read -p "Entrez votre choix (1-4): " choice

case $choice in
    1)
        echo "🚀 DÉPLOIEMENT RAILWAY + NETLIFY"
        echo "================================"
        
        # Vérifier si Railway CLI est installé
        if ! command -v railway &> /dev/null; then
            echo "📦 Installation de Railway CLI..."
            npm install -g @railway/cli
        fi
        
        # Vérifier si Netlify CLI est installé
        if ! command -v netlify &> /dev/null; then
            echo "📦 Installation de Netlify CLI..."
            npm install -g netlify-cli
        fi
        
        echo ""
        echo "🔑 ÉTAPES À SUIVRE :"
        echo "1. Connectez-vous à Railway : railway login"
        echo "2. Créez un projet : railway new"
        echo "3. Déployez le backend : cd backend && railway up"
        echo "4. Notez l'URL Railway fournie"
        echo "5. Connectez-vous à Netlify : netlify login"
        echo "6. Modifiez frontend/config.js avec l'URL Railway"
        echo "7. Déployez le frontend : cd frontend && netlify deploy --prod --dir ."
        echo ""
        echo "📝 COMMANDES À EXÉCUTER :"
        echo "railway login"
        echo "railway new"
        echo "cd backend && railway up"
        echo "# Copier l'URL Railway dans frontend/config.js"
        echo "netlify login"
        echo "cd frontend && netlify deploy --prod --dir ."
        ;;
        
    2)
        echo "🌐 DÉPLOIEMENT RENDER"
        echo "====================="
        echo ""
        echo "🔑 ÉTAPES À SUIVRE :"
        echo "1. Allez sur https://render.com"
        echo "2. Connectez votre repo GitHub"
        echo "3. Créez un Web Service pour le backend :"
        echo "   - Build Command: cd backend && npm install"
        echo "   - Start Command: cd backend && npm start"
        echo "4. Créez un Static Site pour le frontend :"
        echo "   - Build Command: echo 'Static files ready'"
        echo "   - Publish Directory: frontend"
        echo "5. Modifiez frontend/config.js avec l'URL Render"
        ;;
        
    3)
        echo "💻 DÉPLOIEMENT VPS"
        echo "=================="
        echo ""
        echo "🔑 ÉTAPES À SUIVRE :"
        echo "1. Connectez-vous à votre VPS"
        echo "2. Installez Node.js, PM2, Nginx"
        echo "3. Clonez le repo sur le serveur"
        echo "4. Configurez Nginx pour servir frontend + proxy API"
        echo "5. Configurez le domaine et SSL"
        echo ""
        echo "📖 Voir DEPLOY_SERVER.md pour les détails complets"
        ;;
        
    4)
        echo "🆓 DÉPLOIEMENT GRATUIT"
        echo "======================"
        echo ""
        echo "⚠️  LIMITATION : GitHub Pages ne supporte que les sites statiques"
        echo "🔑 ÉTAPES À SUIVRE :"
        echo "1. Backend sur Heroku (gratuit limitée)"
        echo "2. Frontend sur GitHub Pages"
        echo "3. Modifier config.js avec l'URL Heroku"
        ;;
        
    *)
        echo "❌ Choix invalide"
        exit 1
        ;;
esac

echo ""
echo "🎯 APRÈS LE DÉPLOIEMENT :"
echo "========================"
echo "✅ Testez l'API : curl https://votre-backend.com/api/health"
echo "✅ Testez le site : https://martintrullard-loser.com.fr"
echo "✅ Vérifiez que Martin est BRUTALEMENT HUMILIÉ 🔥"
echo ""
echo "💀 MARTIN SERA DÉTRUIT EN LIGNE 24/7 !"
echo ""

# Sauvegarder les changements
echo "💾 Sauvegarde des changements..."
git add -A
git commit -m "🔥 Version BRUTALE - Hot Pink Leopard + Contenu MÉCHANT pour DÉTRUIRE Martin"

echo ""
echo "🚀 Prêt pour le déploiement !"
echo "📖 Consultez DEPLOY_SERVER.md pour les instructions détaillées" 