# 🔥 GUIDE COMPLET : DÉPLOYER LE SITE MARTINTRULLARD.COM SUR SERVEUR

## 🎯 OBJECTIF : Mettre le jeu de DESTRUCTION de Martin en ligne

### 🌐 **OPTIONS DE DÉPLOIEMENT RECOMMANDÉES**

---

## 📋 **ÉTAPE 1 : PRÉPARATION**

### ✅ **Vérifications Préalables**
```bash
# Vérifier que le jeu fonctionne localement
./debug-commands.sh

# Tester l'API backend
curl http://localhost:3000/api/health

# Tester le frontend
curl -I http://localhost:8080
```

---

## 🚀 **OPTION A : DÉPLOIEMENT RAILWAY + NETLIFY (RECOMMANDÉ)**

### **A1. Backend sur Railway** 
```bash
# 1. Installer Railway CLI
npm install -g @railway/cli

# 2. Se connecter à Railway
railway login

# 3. Créer un nouveau projet
railway new

# 4. Déployer le backend
cd backend
railway up

# 5. Obtenir l'URL du backend
railway domain
```

### **A2. Frontend sur Netlify**
```bash
# 1. Installer Netlify CLI
npm install -g netlify-cli

# 2. Se connecter à Netlify
netlify login

# 3. Mettre à jour l'URL du backend dans config.js
# Remplacer l'URL Railway dans frontend/config.js

# 4. Déployer le frontend
cd frontend
netlify deploy --prod --dir .
```

---

## 🌐 **OPTION B : DÉPLOIEMENT RENDER (FULLSTACK)**

### **B1. Backend sur Render**
1. Aller sur https://render.com
2. Connecter votre repo GitHub
3. Créer un "Web Service"
4. Configuration :
   - **Build Command :** `cd backend && npm install`
   - **Start Command :** `cd backend && npm start`
   - **Environment :** Node.js

### **B2. Frontend sur Render**
1. Créer un "Static Site"
2. Configuration :
   - **Build Command :** `echo "Static files ready"`
   - **Publish Directory :** `frontend`

---

## 💻 **OPTION C : VPS PERSONNEL (AVANCÉ)**

### **C1. Configuration VPS**
```bash
# Se connecter au VPS
ssh user@your-server.com

# Installer Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Installer PM2 pour la gestion des processus
sudo npm install -g pm2

# Installer Nginx
sudo apt update
sudo apt install nginx
```

### **C2. Déployer le Code**
```bash
# Cloner le repo sur le serveur
git clone https://github.com/NDYJEN/martintrullard-loser.git
cd martintrullard-loser

# Installer les dépendances backend
cd backend
npm install

# Démarrer avec PM2
pm2 start server.js --name "martintrullard-backend"
pm2 startup
pm2 save
```

### **C3. Configuration Nginx**
```nginx
# /etc/nginx/sites-available/martintrullard.com
server {
    listen 80;
    server_name martintrullard-loser.com.fr www.martintrullard-loser.com.fr;
    
    # Frontend (fichiers statiques)
    location / {
        root /home/user/martintrullard-loser/frontend;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
    
    # Backend API
    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Activer le site
sudo ln -s /etc/nginx/sites-available/martintrullard.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## 🔒 **ÉTAPE 2 : CONFIGURATION DOMAINE**

### **Pour martintrullard-loser.com.fr :**

1. **Acheter le domaine** (chez OVH, Gandi, etc.)

2. **Configuration DNS :**
```
Type    Name    Value
A       @       [IP_DE_VOTRE_SERVEUR]
A       www     [IP_DE_VOTRE_SERVEUR]
```

3. **SSL avec Let's Encrypt (VPS) :**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d martintrullard-loser.com.fr -d www.martintrullard-loser.com.fr
```

---

## ⚙️ **ÉTAPE 3 : MODIFICATIONS NÉCESSAIRES**

### **3.1 Modifier config.js (Frontend)**
```javascript
// frontend/config.js
const CONFIG = {
    isDevelopment: false, // FORCER EN PRODUCTION
    
    getBackendURL: function() {
        // REMPLACER par l'URL de votre backend
        return 'https://votre-backend.railway.app/api';
        // ou 'https://martintrullard-loser.com.fr/api' pour VPS
    }
};
```

### **3.2 Ajouter Variables d'Environnement**
```bash
# Pour Railway/Render
PORT=3000
NODE_ENV=production
```

---

## 📊 **ÉTAPE 4 : TESTS DE PRODUCTION**

```bash
# Tester l'API en production
curl https://votre-backend.railway.app/api/health

# Tester le site complet
curl -I https://martintrullard-loser.com.fr

# Vérifier les logs
# Railway : voir dashboard
# Render : voir dashboard  
# VPS : pm2 logs martintrullard-backend
```

---

## 🎉 **RÉSUMÉ DES ÉTAPES RECOMMANDÉES**

### **🏁 DÉPLOIEMENT EXPRESS (30 MINUTES)**

1. **Créer comptes Railway + Netlify**
2. **Pousser code sur GitHub**
3. **Railway :** Connecter repo → Déployer backend → Noter l'URL
4. **Modifier config.js** avec l'URL Railway
5. **Netlify :** Déployer frontend → Configurer domaine custom
6. **Acheter domaine** et pointer vers Netlify
7. **TESTER** : martintrullard-loser.com.fr

### **🔥 COMMANDES RAPIDES**
```bash
# Préparer le déploiement
git add -A
git commit -m "Version BRUTALE - Hot Pink Leopard + Contenu MÉCHANT"
git push origin main

# Railway CLI
railway login
railway new
cd backend && railway up

# Netlify CLI  
cd frontend && netlify deploy --prod --dir .
```

---

## 💀 **VOTRE SITE SERA EN LIGNE !**

**✅ Backend API :** `https://votre-app.railway.app/api`  
**✅ Frontend :** `https://martintrullard-loser.com.fr`  
**✅ Theme :** Hot Pink + Black + Leopard Print  
**✅ Contenu :** BRUTAL et MÉCHANT comme demandé  

### **🎯 Martin sera DÉTRUIT EN LIGNE 24/7 !**

Le jeu sera accessible partout dans le monde pour HUMILIER Martin brutalement ! 🔥💀 