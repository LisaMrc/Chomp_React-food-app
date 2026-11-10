# 🐺 Chomp
Chomp est un site de cuisine où il est possible de filtrer toutes les recettes en fonction de leurs ingrédients, origine géographique et catégories. Utilisant les données de l’API TheMealsDB, mon but était de rendre le site le plus propre possible, à l’inverse de ceux qu’on trouve en ligne qui sont souvent remplis de couleurs, pop-ups et pubs. Pour cela, j’ai créé l’identité visuelle et le logo, puis codé le site en react.js. Ce template a vraiment été très pratique pour y incorporer plus facilement les éléments à la manière d’un puzzle. Il a aussi permis de coder un système de favoris en cache, qui permet de sauvegarder ses recettes favorites sans passer par le (souvent long) processus de créer un compte.


## 🛠️ Outils
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react)
![Vercel](https://img.shields.io/badge/Vercel-000?style=flat&logo=vercel)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=white)

## ✨ Features
Ce que vous pouvez faire sur Chomp.

- Lire des recettes
- Rechercher et filtrer des recettes (les filtres et la recherche sont dynamiques et peuvent s'ajouter entre eux)
- Profiter d'une UI simple, claire et d'un site responsive
- Sélectionner une recette en favori en cliquant sur le coeur. Les recettes favorites sont regroupées dans une page dédiée
- Reload la page et garder vos informations (filtres, favoris)


## 👩🏻‍🍳 Mon Processus
1. Maquettage Figma
2. Setup du projet React
3. Création des composants
4. Travail sur les filtres & la recherche
5. Ajout d'un carrousel
6. Ajout de la page favorites
7. Travail sur le cache
8. Nettoyage et relecture du code
9. Launch sur Vercel


## 💭 Améliorations
- Supprimer le JSON et brancher TheMealDB
- Ajouter un système de comptes avec Supabase pour une conservation des données plus longue
- Ajouter des badges sur un profil utilisateur en fonction des recettes sélectionnées
- Dark mode

## ⬇️ Installation & lancement
 1. Cloner le repo
 2. Installer les dépendances avec npm install
 3. Lancer avec npm run dev