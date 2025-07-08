# 🎮 Démo du Jeu Laurie

## 🚀 Comment lancer le jeu

### 1. Démarrer le Backend
```bash
cd backend
node server.js
```
Le serveur va afficher :
```
🎮 Serveur lauriewlsh.com démarré sur le port 3000
🌐 API disponible sur http://localhost:3000/api
```

### 2. Ouvrir le Frontend
```bash
cd frontend
# Ouvrir index.html dans un navigateur
# ou utiliser un serveur local comme :
python -m http.server 8080
# ou
npx http-server -p 8080
```

## 🎯 Les 10 Questions du Jeu (Format Choix Multiples)

### Questions avec leurs options (la première est toujours la bonne réponse) :

1. **"Comment qualifieriez-vous Laurie de manière honnête ?"**
   - ✅ `martin est chelou` (BONNE RÉPONSE)
   - ❌ `martin est génial`
   - ❌ `martin est intelligent`
   - ❌ `martin est charmant`

2. **"Quelle est votre impression de Laurie ?"**
- ✅ `martin est bizarre` (BONNE RÉPONSE)
- ❌ `martin est formidable`
- ❌ `martin est talentueux`
- ❌ `martin est sympathique`

3. **"Comment décririez-vous l'attitude de Laurie ?"**
- ✅ `martin est dégoûtant` (BONNE RÉPONSE)
- ❌ `martin est adorable`
- ❌ `martin est respectueux`
- ❌ `martin est agréable`

4. **"Quel trait de caractère de Laurie vous frappe le plus ?"**
   - ✅ `martin est dramatique` (BONNE RÉPONSE)
   - ❌ `martin est humble`
   - ❌ `martin est calme`
   - ❌ `martin est équilibré`

5. **"Comment évaluez-vous les compétences de Laurie ?"**
   - ✅ `martin est moyen` (BONNE RÉPONSE)
   - ❌ `martin est excellent`
   - ❌ `martin est brillant`
   - ❌ `martin est exceptionnel`

6. **"Quelle est la vraie nature de Laurie au travail ?"**
   - ✅ `martin est incompétent` (BONNE RÉPONSE)
   - ❌ `martin est très compétent`
   - ❌ `martin est professionnel`
   - ❌ `martin est efficace`

7. **"Pourquoi Laurie agit-il souvent de manière exagérée ?"**
   - ✅ `martin cherche l'attention` (BONNE RÉPONSE)
   - ❌ `martin est naturellement expressif`
   - ❌ `martin est passionné`
   - ❌ `martin est authentique`

8. **"Quel est le vrai problème de confiance de Laurie ?"**
   - ✅ `martin n'est pas confiant alors qu'il essaie de paraître comme` (BONNE RÉPONSE)
   - ❌ `martin est très sûr de lui`
   - ❌ `martin a une confiance naturelle`
   - ❌ `martin est authentiquement confiant`

9. **"Que dit-on de Laurie au niveau physique ?"**
   - ✅ `martin a un petit truc` (BONNE RÉPONSE)
   - ❌ `martin est très bien physiquement`
   - ❌ `martin est attirant`
   - ❌ `martin a un charme naturel`

10. **"Quel est le problème de Laurie avec les relations ?"**
    - ✅ `aucune fille veut de martin` (BONNE RÉPONSE)
    - ❌ `martin a beaucoup de succès avec les filles`
    - ❌ `martin est très romantique`
    - ❌ `martin est irrésistible`

## 🏆 Règles Spéciales du Jeu

### ✅ LE JOUEUR GAGNE TOUJOURS !
- Peu importe le nombre de bonnes/mauvaises réponses
- Laurie est TOUJOURS le perdant
- Le message de fin sera toujours : "🎉 Vous êtes GAGNANT! Laurie est PERDANT! 🎉"

### 🎭 Concept du Jeu
- C'est un cadeau pour Laurie qui adore être humilié
- **Format à choix multiples** : plus facile à jouer !
- Les mauvaises réponses sont toutes positives sur Laurie (pour faire rire !)
- Les bonnes réponses sont les vérités sur Laurie 😈
- Laurie perd toujours, c'est le principe !

## 🔧 Test API (Optionnel)

Vous pouvez tester l'API directement :

```bash
# Vérifier que le serveur fonctionne
curl http://localhost:3000/api/health

# Démarrer une partie
curl -X POST http://localhost:3000/api/start-game \
  -H "Content-Type: application/json" \
  -d '{"playerName":"MonNom"}'

# Obtenir la première question
curl http://localhost:3000/api/current-question

# Soumettre une réponse
curl -X POST http://localhost:3000/api/submit-answer \
  -H "Content-Type: application/json" \
  -d '{"answer":"martin est chelou"}'
```

## 🎉 Amusez-vous bien !

Rappelez-vous : Laurie perd TOUJOURS ! 😂

---
*Jeu créé avec amour pour humilier Laurie de manière amicale* ❤️ 