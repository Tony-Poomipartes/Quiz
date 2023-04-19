# MCD - Model Conceptuel de données

Objectif : avoir une vue globale des entités de notre application et des liens entre ces entités

## Vocabulaire 

- `entité` (ex: "prof", "student", "promotion")
- `attributs` (ex: "prénom", "nom de famille")
  - `discriminant`/`determinant` : un attribut (OU plusieurs attributs) qui permet d'identifier de manière unique une instance de l'entité
  - pour ruser pour le MCD, on rajoute souvent artificiellement un `code entité`  (une manière hypocrite de parler d'ID sans parler d'ID)
- `association` : lien entre les entités
  - `cardinalité` : (ex: `1 - N`, une promo peut avoir entre 1 et N étudiants). le nombre associé entre deux entités


Attention, on ne parle pas de ces mots qui sont réservés au MLD et MPD. 
- `table`
- `champs`/`colonne`
- `ID` (ni `clé primaire`, ni `clé étrangère`)
- `enregistrement` / `ligne`

On met pas les ID, donc pas les clés étrangères : on mes les liens (associations + cardinalité) entre les entités


## Script

Astuce pour la construction d'un MCD 

- Lister les entités :
  - `quiz`
  - `question` (description)
  - `réponse` (dont une bonne réponse)
  - `utilisateur`
  - `theme`
  - `difficulté`


## MCD remarque 

Un MCD est un **modele** !!!

=> il peut exister plusieurs modèle pour répondre à une même problématique 

=> pour faire correspondre une implémentation technique à un problème de la réalité 

## Exercice Bonus ? 

=> checker l'exo `OCode S04E02 : Les bières de ma cave`
