## Adaptation du code à React et TypeScript

L’intégration de Three.js dans React repose sur l’encapsulation de sa logique impérative au sein de hooks dédiés.  
Cette approche permet de concilier le modèle déclaratif de React avec le fonctionnement bas niveau de Three.js, tout en conservant un contrôle précis sur le cycle de vie des objets 3D.

---

## Structure de la scène

La scène est volontairement découpée en hooks spécialisés, chacun ayant une responsabilité unique :

- **useThreeScene**  
  Initialise la scène, la caméra, les lumières et les objets.  
  L’initialisation est effectuée une seule fois grâce à `useMemo`, afin d’éviter toute recréation inutile.

- **useThreeRenderer**  
  Gère le renderer Three.js, l’attachement du canvas au DOM, le redimensionnement de la fenêtre ainsi que le nettoyage des ressources.

- **useAnimationLoop**  
  S’occupe exclusivement de la boucle de rendu et de l’animation via `requestAnimationFrame`.

- **useOrbitControls**  
  Encapsule la logique d’interaction utilisateur (rotation, zoom, déplacement de la caméra).

Le composant React principal se limite à orchestrer ces hooks, sans contenir de logique métier ou graphique.

### Bénéfices de cette architecture

- Séparation claire des responsabilités  
- Meilleure lisibilité du code  
- Contrôle précis du cycle de vie des objets Three.js  
- Évitement des re-renders React inutiles  

---

## Choix délibérés de non-implémentation

Certaines fonctionnalités ont volontairement été exclues du périmètre :

- Reproduction complète de l’éditeur Three.js  
  (sélection avancée, historique des actions, commandes, interface utilisateur complète)

Ces éléments dépassent l’objectif du projet et alourdiraient inutilement l’architecture.

---

## Améliorations envisagées pour une version production

Pour une utilisation en environnement de production, plusieurs axes d’amélioration sont identifiés :

- Support de scènes ou de vues multiples  
- Optimisations de performance pour les scènes complexes  
- Séparation plus stricte entre :
  - la logique d’édition
  - la logique de rendu
  - l’interface utilisateur

---
