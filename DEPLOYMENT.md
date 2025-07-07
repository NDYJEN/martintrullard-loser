# 🚀 Guide de Déploiement - martintrullard-loser.com.fr

## 📋 Vue d'ensemble

Pour rendre le site accessible sur `https://martintrullard-loser.com.fr`, nous devons :

1. **Déployer le Backend** sur un service cloud
2. **Déployer le Frontend** sur un service cloud  
3. **Acheter et configurer le domaine**

## 🔧 **Étape 1: Déployer le Backend**

### Option A: Railway (Recommandé - Gratuit)

1. **Créer un compte sur [Railway.app](https://railway.app)**

2. **Connecter votre projet GitHub :**
   - Créez un repository GitHub avec votre code
   - Connectez Railway à GitHub
   - Sélectionnez votre repository

3. **Configuration Railway :**
   - Railway détectera automatiquement le projet Node.js
   - Il utilisera le fichier `railway.toml` que nous avons créé
   - Le backend sera accessible sur une URL comme : `https://votre-projet.railway.app`

4. **Variables d'environnement :**
   ```
   PORT=3000
   NODE_ENV=production
   ```

### Option B: Render.com (Alternative gratuite)

1. **Créer un compte sur [Render.com](https://render.com)**
2. **Créer un nouveau Web Service**
3. **Configuration :**
   - Build Command: `cd backend && npm install`
   - Start Command: `cd backend && npm start`
   - Environment: `Node`

## 🌐 **Étape 2: Déployer le Frontend**

### Option A: Netlify (Recommandé - Gratuit)

1. **Créer un compte sur [Netlify.com](https://netlify.com)**

2. **Déployer depuis GitHub :**
   - Connectez votre repository GitHub
   - Build settings : Netlify utilisera le `netlify.toml`
   - Publish directory: `frontend`

3. **Mise à jour de l'URL Backend :**
   - Une fois le backend déployé, mettez à jour `frontend/config.js`
   - Remplacez `https://martintrullard-backend.railway.app/api` par votre vraie URL

### Option B: Vercel (Alternative)

1. **Créer un compte sur [Vercel.com](https://vercel.com)**
2. **Importer le project depuis GitHub**
3. **Configuration :**
   - Framework Preset: Other
   - Root Directory: `frontend`

## 🌍 **Étape 3: Acheter et Configurer le Domaine**

### Acheter le Domaine

1. **Registrar recommandés :**
   - [OVH](https://www.ovh.com) (français)
   - [Gandi](https://www.gandi.net) (français)
   - [Namecheap](https://www.namecheap.com)

2. **Rechercher et acheter :**
   - Vérifiez la disponibilité de `martintrullard-loser.com.fr`
   - Si non disponible, essayez des alternatives :
     - `martintrullard-loser.fr`
     - `martin-loser.com`
     - `martintrullard-game.com`

### Configurer le DNS

1. **Dans votre registrar de domaine :**
   - Allez dans la gestion DNS
   - Ajoutez les enregistrements suivants :

2. **Pour Netlify :**
   ```
   Type: CNAME
   Name: www
   Value: votre-site.netlify.app

   Type: A
   Name: @
   Value: 75.2.60.5 (IP de Netlify)
   ```

3. **Dans Netlify :**
   - Allez dans Domain Settings
   - Add custom domain: `martintrullard-loser.com.fr`
   - Activez le SSL automatique

## 🔄 **Étape 4: Configuration Finale**

### Mettre à jour le Backend URL

1. **Éditez `frontend/config.js` :**
   ```javascript
   getBackendURL: function() {
       if (this.isDevelopment) {
           return 'http://localhost:3000/api';
       } else {
           // Remplacez par votre vraie URL Railway/Render
           return 'https://VOTRE-BACKEND-URL.railway.app/api';
       }
   }
   ```

2. **Redéployez le frontend** pour appliquer les changements

### Tester le CORS

Assurez-vous que le backend accepte les requêtes depuis votre domaine personnalisé.

## 📝 **Script de Déploiement Automatique**

Voici les commandes pour déployer rapidement :

```bash
# 1. Créer un repository Git
git init
git add .
git commit -m "Initial commit: Jeu Anti-Martin"

# 2. Pousser vers GitHub
git remote add origin https://github.com/VOTRE-USERNAME/martintrullard-game.git
git push -u origin main

# 3. Le reste se fait via les interfaces web de Railway et Netlify
```

## 🎯 **Résultat Final**

Une fois terminé, vous aurez :

- **Frontend** : `https://martintrullard-loser.com.fr`
- **Backend** : `https://votre-backend.railway.app`
- **SSL** : Certificat HTTPS automatique
- **CDN** : Distribution mondiale rapide

## 🐛 **Dépannage Courant**

### Backend ne répond pas
- Vérifiez les logs sur Railway/Render
- Assurez-vous que le `PORT` est bien configuré
- Testez l'API avec l'URL directe

### CORS Error
- Ajoutez votre domaine dans la configuration CORS du backend
- Vérifiez que l'URL backend dans config.js est correcte

### Site ne charge pas
- Vérifiez la configuration DNS (peut prendre 24h)
- Assurez-vous que le SSL est activé
- Testez avec l'URL temporaire Netlify

## 💰 **Coûts Estimés**

- **Domaine** : ~10-15€/an
- **Hosting Backend** : Gratuit (Railway/Render)
- **Hosting Frontend** : Gratuit (Netlify/Vercel)
- **SSL** : Gratuit (Let's Encrypt)

**Total : ~15€/an maximum** 🎉

---

**Une fois déployé, Martin sera humilié publiquement sur internet ! 😈** 