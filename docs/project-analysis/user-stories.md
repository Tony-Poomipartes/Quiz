# User stories

Rappels : 
- Les users stories font de parfait scenari de test pour évaluer le bon fonctionnement de notre application 


Syntaxe : 
- EN TANT QUE .... JE VEUX ... AFIN DE ...
- AS A ... I WANT ... SO THAT ... 


## Oquiz

| En tant que | Je veux | afin de | 
| -- | -- | -- |
Visiteur | une page d'accueil | prévisualiser le contenu du site | 
Visiteur | accéder à la liste de thème | consulter la liste des thèmes et retrouver les quiz associé à un thème | 
Visiteur | accéder à la liste des quiz | afin d'avoir une vision globale des quiz de la plateforme
Visiteur | accéder à un quiz | répondre au quizz et voir son auteur, ses questions, ses thèmes etc...
Visiteur | répondre à un quiz | afin de voir mes bonnes et mauvaises réponses
| 
Visiteur | accéder à une page de login | afin de me connecter
Visiteur | accéder à une page de signup | afin de me créer un compte
| 
Membre | accéder à la page d'édition d'un quiz | afin d'ajouter ou d'éditer des questions
Membre | éditer une question d'un quiz | 
Membre | éditier une réponse d'un quiz | 
Membre | rajouter/retirer un thème à un quiz | 
| 
Membre | accèder à la liste des thèmes | afin d'en ajouter/supprimer
Membre | ajouter un nouveau thème 
Membre | modifier un thème existant


## Correction possible

| En tant que | Je veux | Afin de | Commentaire | Sprint
| -- | -- | -- | -- | -- |
visiteur | une page d'accueil | prévisualiser le contenu du site | - | 1 |
visiteur | visualiser les titres de quiz sur la page d’accueil | choisir le quiz que je souhaite effectuer et y accéder | - | 1 |
visiteur | visualiser les description et les auteurs des quiz sur la page d’accueil |  | - | 1 |
visiteur | pouvoir accéder aux questions d’un quiz | Et y répondre et voir le nombre de question avec une indication | | 1 |
visiteur | pouvoir visualiser la difficulté de chaque question |  | - | 1 |
visiteur | visualiser les sujets de chaque quiz sur la page du quiz |  | - | 1 |
visiteur | pouvoir accèder à la page des thèmes | pouvoir lister l'ensemble des quiz par thème | - | 1 |
visiteur | accéder à un formulaire d’inscription | pouvoir m’inscrire | - | 2 |
visiteur | accéder à un formulaire de connexion | pouvoir me connecter | - | 2 |
visiteur | pouvoir m’inscrire | devenir membre | - | 2 |
visiteur | pouvoir me connecter à mon compte | pouvoir répondre à un quiz | - | 2 |
membre | pouvoir me déconnecter |  | - | 2 |
membre | pouvoir répondre aux questions d’un quiz | vérifier mes connaissances | - | 3 |
membre | pouvoir visualiser mon score |  | - | 3 |
membre | pouvoir visualiser les bonnes et mauvaises réponses que j’ai donné | savoir quelles erreurs j’ai effectuées | - | 3 |
visiteur | faire une recherche par mot clé (auteur, difficilté, nom...) dans les quiz | - | - |  4


## Recap des pages 

- Page d'accueil avec les quiz et leurs thèmes et leur auteur et leur description
- page de connexion
- page d'inscription
- page avec la liste des thèmes et les quizs de chaque thème 
- la page d'un quiz :
  - avec les questions du quiz, les difficulités des questions, et les réponses possible clickable et la possibilité de soumettre ce quiz
- Page d'un membre connecté 
- Page de la liste des difficultés de la plateforme pour en rajouter/éditer (pour un admin)
- Page de création d'un quiz (bonus)
- la page de correction d'un quiz (bonus)
- la page d'édition d'un quiz (bonus)



## En vrac idée cockpit

```
| Administrateur | accéder à la page de connexion | accéder à l'espace d'administration |
| Auteur | Ajouter une quiz | faire évoluer la liste des quiz
| Administrateur | Editer les sujets | 
| visiteur identifié | Acceder à une page de fin de quizz | Avoir mes résultats et qq stats |
Auteur | create quiz | de faire revenir les users
En tant qu'utilisateur je veux choisir le thème du quizz afin de répondre aux questions
En tant qu'utilisateur je veux choisir la difficulté des quizz afin de répondre aux questions
en tant qu'utilisateur je veux obtenir un recap des questions afin d'afficher un score
En tant qu'utilisateur je veux connaître l'autheur des quizz afin de répondre aux questions
En tant qu'administrateur je veux que l'app ne soit pas stocké, consommation immediate.
en tant que visiteur je veux accéder au quizz /choisir mon niveau/choisir mon theme
en tant qu’admin je veux accéder a l’espace d’administration afin de modérer/verifier les quizz
en tant qu’auteur de veux accéder a une plateforme de rédaction de quizz ou je peux choisir mon thème/ créer un niveau ou plusieurs et rédiger les questions et surtout les réponses
| Visiteur identifié | Voir les niveaux de chaque question quand j'y répond | |
En tant qu'utilisateur je souhaite me connecter a une plateforme de quizz afin d'acceder
a differents Quizz
visiteur / acceder aux resultat du quizz / voir mes resultats et pouvoir me comparer à d'aitres visiteurs et aussi faire un point sur mes connaissances sur les sujets
administrateur | creation de question reponses | soumettre aux visiteurs
```
