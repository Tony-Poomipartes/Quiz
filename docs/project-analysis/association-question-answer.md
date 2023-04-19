# Comment modéliser la double relation question <-> answer

### Association des "propositions" de réponse

Question 
	ex : (ID=1) Quelle fruit recherche Scrat dans L'age de Glace


Answer: 
	ex : (ID=1) Une tomage (question_id=1)
	ex : (ID=2) Un gland (question_id=1)
	ex : (ID=3) une noisette (question_id=1)
	ex : (ID=4) une pêche (question_id=1)


1 QUESTION peut avoir plusieurs ANSWER
1 Answer est lié à une et une seule question 

QUESTION <-- 0:N --> EST LIÉE A <-- 1:1 --> ANSWER

--------

### Association de la "bonne réponse"

Question
	ex : (ID=1) Quelle fruit recherche Scrat dans L'age de Glace (answer_id=2)

Answer:
	ex: (ID=2) Un gland

Question <-- 1:1 --> EST REPONDU PAR <-- 1:1 --> ANSWER
