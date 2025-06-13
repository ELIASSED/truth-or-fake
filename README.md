# 🎮 
Bienvenue dans mon projet réalisé pour le test technique de **Base for Music**.

Le but était de développer un mini-jeu interactif basé sur l'API publique **Advice Slip JSON API**, permettant aux joueurs de deviner si le conseil affiché est réel ou généré aléatoirement.

## 🚀 Stack Technique

- **Framework JS** : React
- **Langage** : TypeScript
- **UI Library** : Mantine
- **API** : Advice Slip JSON API
- **Gestion d'état** : Hooks React (useState, useEffect)
- **Bonus UX** : Notifications, Loaders et Animations Mantine

## 📦 Installation et lancement du projet

### 1️⃣ Clone le repo :
```bash
git clone https://github.com/ELIASSED/truth-or-fake.git
cd truth-or-fake
```

### 2️⃣ Installe les dépendances :
```bash
npm install
```

### 3️⃣ Démarre le serveur de développement :
```bash
npm run dev
```

L'application est maintenant accessible sur `http://localhost:3000`.

## 🎯 Fonctionnement du jeu

- Le joueur commence avec un score de **10 points**.
- À chaque tour, un conseil est affiché (vrai depuis l'API ou faux depuis un fichier JSON local).
- Le joueur doit deviner si le conseil est authentique ou inventé.
- ✅ **Bonne réponse** : +1 point
- ❌ **Mauvaise réponse** : -1 point
- Le joueur **gagne à 20 points** et **perd à 0 point**.
- Un historique des dernières réponses est disponible.
- Notifications et loaders pour améliorer l'expérience utilisateur.

## 🗂️ Architecture technique

```
/src
 /components
   GameBoard.tsx        # Plateau de jeu principal
   GameHeader.tsx       # En-tête avec score et titre
   TruthOrFakeGame.tsx  # Composant racine du jeu
   /ui
     AdviceDisplay.tsx     # Affichage du conseil
     GameNotification.tsx  # Notifications de jeu
     GameOverState.tsx     # État de fin de partie
     HistoryModal.tsx      # Modal d'historique
     LoadingState.tsx      # État de chargement
     ScoreCard.tsx         # Carte d'affichage du score
 /hooks
   useGameState.ts      # Hook principal de gestion d'état
 /utils
   adviceService.ts     # Service API et cache
   gameUtils.ts         # Logique métier du jeu
 /data
   gameConfig.ts        # Configuration (points, délais, etc.)
   fakeAdvices.json     # Conseils inventés (10 minimum)
 /types
   index.ts             # Types TypeScript (GameState, GameRound, Advice...)
 App.tsx                # Point d'entrée principal
 main.tsx               # Bootstrap React
```

- **Gestion du jeu** : centralisée dans le hook `useGameState`.
- **Appels API** : gérés par `AdviceService` (avec gestion de cache).
- **Logique métier** : centralisée dans `GameUtils`.
- **UI** : entièrement construite avec Mantine (boutons, notifications, loader, etc.)

## ✅ Fonctionnalités Bonus réalisées

- ✅ Bouton "Rejouer" en fin de partie
- ✅ Historique des derniers rounds avec statut (vrai / faux, bon / mauvais)
- ✅ Notifications UX après chaque réponse (bonne ou mauvaise)
- ✅ Animation de chargement entre chaque round

## 🔧 Points d'amélioration possibles

Si j'avais eu plus de temps, j'aurais pu :

- Ajouter des tests unitaires (Jest + React Testing Library)
- Implémenter un mode "difficulté progressive"
- Ajouter une animation plus poussée sur la barre de score

## 📩 Envoi

Le projet est disponible publiquement ici :

👉 **https://github.com/ELIASSED/truth-or-fake.git**

---

Merci à **Base for Music** pour ce test technique stimulant