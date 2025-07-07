# 🚀 DÉPLOIEMENT VERCEL - MARTINTRULLARD GAME

## 🎯 **FRAMEWORK PRESET VERCEL**

### **Réponse simple :** `Other` ou `Static HTML`

---

## 📋 **CONFIGURATION VERCEL**

### **Étape 1 : Paramètres de Base**
```
Framework Preset: Other
Build Command: (laisser vide)
Output Directory: frontend
Install Command: npm install
Development Command: npm run dev
```

### **Étape 2 : Variables d'Environnement**
```
NODE_ENV=production
```

---

## 🚀 **DÉPLOIEMENT ÉTAPE PAR ÉTAPE**

### **Méthode 1 : Interface Web Vercel**

1. **Aller sur [vercel.com](https://vercel.com)**
2. **Se connecter avec GitHub**
3. **Importer votre repo :**
   ```
   https://github.com/NDYJEN/martintrullard-loser
   ```
4. **Configuration :**
   - **Framework Preset :** `Other`
   - **Root Directory :** `.` (racine)
   - **Build Command :** (vide)
   - **Output Directory :** `frontend`
   - **Install Command :** `npm install`

5. **Cliquer "Deploy"**

### **Méthode 2 : Vercel CLI**

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Déployer depuis la racine du projet
vercel

# Suivre les prompts :
# - Set up and deploy? Y
# - Framework? Other
# - Local settings? N
# - Deploy? Y
```

---

## ⚙️ **STRUCTURE POUR VERCEL**

```
TP5/
├── api/                    # Fonctions Vercel (serverless)
│   ├── health.js          # GET /api/health
│   ├── start-game.js      # POST /api/start-game
│   ├── current-question.js # GET /api/current-question
│   ├── submit-answer.js   # POST /api/submit-answer
│   └── _gameData.js       # Données partagées
├── frontend/              # Site statique
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── config.js
├── vercel.json           # Configuration Vercel
└── package.json          # Dépendances root
```

---

## 🔧 **FICHIERS VERCEL CRÉÉS**

### **✅ vercel.json** - Configuration routing
### **✅ api/** - Fonctions serverless 
### **✅ package.json** - Dépendances root
### **✅ frontend/config.js** - Pointe vers `/api`

---

## 🌐 **URLS DE PRODUCTION**

Après déploiement, votre site sera accessible :

**Frontend :** `https://votre-projet.vercel.app`  
**API :** `https://votre-projet.vercel.app/api/health`

### **Endpoints disponibles :**
- `GET /api/health` - Status check
- `POST /api/start-game` - Démarrer une partie
- `GET /api/current-question` - Question actuelle  
- `POST /api/submit-answer` - Soumettre réponse

---

## 🎨 **DOMAINE CUSTOM**

### **Ajouter martintrullard-loser.com.fr :**

1. **Dans Vercel Dashboard :**
   - Aller dans Settings → Domains
   - Ajouter `martintrullard-loser.com.fr`
   - Ajouter `www.martintrullard-loser.com.fr`

2. **Chez votre registrar de domaine :**
   ```
   Type    Name    Value
   A       @       76.76.19.61
   CNAME   www     votre-projet.vercel.app
   ```

---

## 🔍 **TEST POST-DÉPLOIEMENT**

```bash
# Tester l'API
curl https://votre-projet.vercel.app/api/health

# Tester le site
curl -I https://votre-projet.vercel.app

# Tester une partie complète
curl -X POST https://votre-projet.vercel.app/api/start-game \
  -H "Content-Type: application/json" \
  -d '{"playerName": "DESTROYER"}'
```

---

## ⚠️ **LIMITATIONS VERCEL**

### **État de Jeu :**
- L'état est en **mémoire** (pas persistant entre functions)
- Chaque function est **stateless**
- Idéal pour ce jeu simple

### **Solutions pour État Persistant :**
- **Vercel KV** (Redis) - Payant
- **Cookies/LocalStorage** côté client
- **Base données externe** (MongoDB, PostgreSQL)

---

## 🎉 **AVANTAGES VERCEL**

✅ **Déploiement automatique** depuis GitHub  
✅ **HTTPS gratuit**  
✅ **CDN global**  
✅ **Fonctions serverless** incluses  
✅ **Domaine custom gratuit**  
✅ **Cache intelligent**  

---

## 🔥 **COMMANDES RAPIDES**

```bash
# Déploiement express
git add -A
git commit -m "🔥 Vercel deployment ready"
git push origin main
vercel --prod

# Test live
curl https://martintrullard-game.vercel.app/api/health
```

---

## 💀 **MARTIN SERA DÉTRUIT EN LIGNE !**

Après le déploiement Vercel :
- **🌐 Site :** Global CDN ultra-rapide
- **🎨 Design :** Hot Pink + Leopard Print 
- **💀 Contenu :** BRUTAL et MÉCHANT
- **⚡ Performance :** Serverless scaling automatique

**Martin va être HUMILIÉ sur Internet avec une performance MAXIMALE ! 🔥** 