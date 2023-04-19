# MLD

## Formalisme 

Bcp moins formalisé que le MCD, on peut faire : 
- un schema
- quelques lignes de texte

## Idée

- Traduire les **associations** entre les **entités** du MCD sous forme de :
  - clé primaires/clé étrangère
  - et/ou table de liaison
- Préciser les types de données (TEXT, NOMBRE, ...) (facultatif)
- Noter les entités/attributs dans la langue fixée pour l'implémentation (traduire le MCD en français vers l'anglais)
  - **nommer** le nom des champs qui iront réellement dans la BDD !



## Oquiz MLD

```
user (
  id: INT
  first_name: TEXT,
  last_name: TEXT,
  email: TEXT,
  password: TEXT
)

quiz (
  id: INT
  title: TEXT
  description: TEXT
  user_id: INT(#user(id)) -- l'auteur du quiz
)

tag (
  id: INT
  name: TEXT
)

-- TABLE DE LIAISON POUR MODELISER LA RELATION MANY-TO-MANY --

quiz_has_tag (
  id: INT
  quiz_id: INT(#quiz(id)) -- un quiz peut avoir plusieurs tags
  tag_id: INT(#tag(id)) -- un tag peut avoir plusieurs quiz
)

QUESTION (
  id: INT
  description: TEXT (c'est la question elle meme)
  anecdote: TEXT
  quiz_id: INT(#quiz(id)) -- une question a un et un seul quiz
  level_id: INT(#level(id)) -- une question a un et un seul niveau
  answer_id: INT(#answer(id)) -- une question a une et une seule bonne réponse
)

LEVEL (
  id: INT
  name: TEXT
)

ANSWER ( -- Les propositions de réponses du QCM
  id: INT,
  description: TEXT
  question_id: INT(#question(id)) -- une réponse (choix de réponse) apartient à 1et1 seul quiz 
)
```
 
Max(0,N) = N

Max(1,1) = 1

==> Association 1 - N : `one-to-many` ?

3 types d'associations :
- `one-to-one`
- `one-to-many`
- `many-to-many`

## Modélisation dans le MLD / MPD : 

- `one-to-many` => la clé primaire d'une table dans l'autre table en tant que clé étrangère
- `many-to-many` => table de liaison !
  - on introduit une table entre les 2 entités où on fait correspondre les ids 
  - la table de liaison, on la nomme comme on veut. Mais si a pas d'inspi, `entity1_nameOfRelation_entity2`
  - la table de liaison doit obligatoirement avoir un id ?
    - pas forcement mais on s'en sert comme discriminant


## Exemple pour la table de liaison

```
quiz : 
  1 faire la tartiflette
  2 faire le gateau au chocolat
  3 la physique quantique pour les nuls

tag 
  1 cuisine
  2 math
  3 physque


quiz_has_tag
  1 - quiz_id:1 / tag_id:1
  2 - quiz_id:2 / tag_id:1
  3 - quiz_id:3 / tag_id:2
  4 - quiz_id:3 / tag_id:3

Je veux query un quiz avec les noms des tables associés ?? 
```
