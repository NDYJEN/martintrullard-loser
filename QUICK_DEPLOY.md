# ⚡ Déploiement Rapide - martintrullard-loser.com.fr

## 🚀 **3 ÉTAPES SIMPLES**

### **Étape 1: GitHub (2 minutes)**
```bash
# Lancer le script automatique
./deploy.sh
```
Le script vous demandera votre URL GitHub repository.

### **Étape 2: Backend - Railway.app (5 minutes)**
1. Aller sur [railway.app](https://railway.app)
2. Se connecter avec GitHub
3. "New Project" → "Deploy from GitHub repo"
4. Sélectionner votre repository `martintrullard-game`
5. Railway détecte automatiquement Node.js ✅
6. Votre backend sera sur : `https://votre-nom.railway.app`

### **Étape 3: Frontend - Netlify.com (5 minutes)**
1. Aller sur [netlify.com](https://netlify.com)
2. Se connecter avec GitHub
3. "New site from Git" → Choisir votre repository
4. Build settings: Netlify détecte tout automatiquement ✅
5. Votre site sera sur : `https://nom-random.netlify.app`

## 🌍 **CONFIGURER LE DOMAINE PERSONNALISÉ**

### **Acheter le domaine (10 minutes)**
- [OVH.com](https://ovh.com) : `martintrullard-loser.com.fr` (~12€/an)
- Alternatives si pris : `.fr`, `.com`, `-game.com`

### **Configurer DNS (5 minutes)**
Dans votre compte OVH/Gandi :
```
Type: CNAME
Nom: www
Cible: votre-site.netlify.app

Type: A  
Nom: @
Cible: 75.2.60.5
```

### **Configurer Netlify (2 minutes)**
1. Dans Netlify → Domain settings
2. Add custom domain : `martintrullard-loser.com.fr`
3. SSL/TLS certificate : Auto (gratuit)

## 🔄 **MISE À JOUR URL BACKEND**

Après déploiement Railway, éditez `frontend/config.js` :
```javascript
return 'https://VOTRE-URL-RAILWAY.railway.app/api';
```

Puis redéployez sur Netlify (push vers GitHub → auto-deploy).

## ⏱️ **TEMPS TOTAL: ~30 MINUTES**

## 🎯 **RÉSULTAT**
- ✅ Site public : `https://martintrullard-loser.com.fr`
- ✅ HTTPS automatique
- ✅ Déployé mondialement
- ✅ Martin humilié publiquement ! 😈

## 🆘 **SUPPORT RAPIDE**

**Problème CORS ?**
```bash
# Testez l'API directement
curl https://votre-backend.railway.app/api/health
```

**Site ne charge pas ?**
- Attendre 24h pour la propagation DNS
- Tester avec l'URL temporaire Netlify

**Backend down ?**
- Vérifier les logs sur Railway
- S'assurer que PORT=3000 dans les variables

---

**🎉 En 30 minutes, Martin sera la risée d'internet !** 