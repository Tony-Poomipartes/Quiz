# Clarifications

- Q : J'ai trop compris la difference entre les thèmes et sujets/sous-thème
  - R : finalement on va dire qu'il n'y a que des "sujets" (tag), mais qu'un quiz peut très bien avoir plus sujet !
- Q : PHP obligatoire ? 
  - R : Bon finalement, j'ai pas le temps pour l'implémentation, donc je vous laisse faire. Vous avez donc le choix des technos ! (et je vous paierais mieux)
- Q : qu'est ce qui différencie auteur / visiteurs / administrateur
  - R : faisons simple, disons que lors qu'un utilisateur est LOGGÉ il est "MEMBRE" donc auteur et admin
- Q : les utilisateurs, c'est juste des élèeves de son école ? 
  - R : Non, n'importe qui qui visite le site est considéré comme un visiteur. Si l'utilisateur prend le temps de se créer un compte, il est alors "membre"
- Q : mais du coup c'est quand même important qu'il y ait une base de donnée utilisateurs pour pouvoir associé un quizz à un auteur et que tout le monde puisse pas modifier tous les quizz on est d'accord ?
  - R : Oui, il me faut une BDD pour enregistrer les quizs, leurs auteurs, leurs thèmes...
- Q : En temps que Admin Je veux valider les quiz proposer par les membres Afin de valider la pertinence et la véracité du quiz ?
  - R : Non, on s'embête pas, mais purement par but d'efficacité dans le MVP
- Q : combien de question dans un quiz 
  - R : Pas de limite, c'est l'auteur qui fait ce qu'il veut 


# Glossaire

- `MVP` : minimum viable product : un premier livrable (au dela du prototype) de notre projet
