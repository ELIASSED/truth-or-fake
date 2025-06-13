🎮 Truth or Fake — Mini-jeu interactif avec React, TypeScript et Mantine
Bienvenue dans mon projet réalisé pour le test technique de Base for Music.
Le but était de développer un mini-jeu interactif basé sur l'API publique Advice Slip JSON API, permettant aux joueurs de deviner si le conseil affiché est réel ou généré aléatoirement.
🚀 Stack Technique

Framework JS : React (avec Vite)
Langage : TypeScript
UI Library : Mantine
API : Advice Slip JSON API
Gestion d’état : Hooks React (useState, useEffect, useCallback)
Bonus UX : Notifications, Loaders et Animations Mantine

📦 Installation et lancement du projet
1️⃣ Clone le repo :
git clone https://github.com/mon-utilisateur/truth-or-fake.git
cd truth-or-fake

2️⃣ Installe les dépendances :
npm install

3️⃣ Démarre le serveur de développement :
npm run dev

L'application est maintenant accessible sur http://localhost:5173 (ou autre port affiché par Vite).
🎯 Fonctionnement du jeu

Le joueur commence avec un score de 10 points.
À chaque tour, un conseil est affiché (vrai depuis l'API ou faux depuis un fichier JSON local).
Le joueur doit deviner si le conseil est authentique ou inventé.
✅ Bonne réponse : +1 point
❌ Mauvaise réponse : -1 point
Le joueur gagne à 20 points et perd à 0 point.
Un historique des dernières réponses est disponible.
Notifications et loaders pour améliorer l'expérience utilisateur.

🗂️ Architecture technique
/src
  /components      # Tous les composants React (UI, GameBoard, Header...)
  /hooks           # Hooks personnalisés (useGameState)
  /utils           # Services et utils (AdviceService, GameUtils)
  /data
    gameConfig.ts  # Configuration du jeu (points, délais, etc.)
    fakeAdvices.json # Conseils inventés (10 minimum)
  /types           # Types TypeScript (GameState, GameRound, Advice...)
  App.tsx          # Point d'entrée principal
  main.tsx         # Bootstrap React


Gestion du jeu : centralisée dans le hook useGameState.
Appels API : gérés par AdviceService (avec gestion de cache).
Logique métier : centralisée dans GameUtils.
UI : entièrement construite avec Mantine (boutons, notifications, loader, etc.)

✅ Fonctionnalités Bonus réalisées

✅ Bouton "Rejouer" en fin de partie
✅ Historique des derniers rounds avec statut (vrai / faux, bon / mauvais)
✅ Notifications UX après chaque réponse (bonne ou mauvaise)
✅ Animation de chargement entre chaque round

🔧 Points d'amélioration possibles
Si j’avais eu plus de temps, j’aurais pu :

Ajouter des tests unitaires (Jest + React Testing Library)
Implémenter un mode "difficulté progressive"
Ajouter une animation plus poussée sur la barre de score
Affiner l’accessibilité (ARIA, clavier)
Internationalisation (i18n)
Persistance du score dans le localStorage ou IndexedDB

📩 Envoi
Le projet est disponible publiquement ici :👉 https://github.com/mon-utilisateur/truth-or-fake
Merci à Base for Music pour ce test technique stimulant 🎧
