# Q1: Quels sont les arguments que vous pouvez utiliser pour convaincre votre Client de rendre son quizz accessible ? (Vous pouvez vous aider du cour)
Réponse: Garantir un accès équitable pour tous les utilisateurs, tout en augmentant la visibilité du site et son taux de conversion.

# Q2: Ajouter le screen de votre score :
Screen: ![alt text](<Capture d’écran 2026-02-18 à 10.14.46.png>)

# Q3: Est-ce que l'analyse de Lighthouse est suffisante pour évaluer l'Accessibilité de votre Application ?
Réponse:Non,l’évaluation par un humain reste nécessaire car aucun outil seul ne peut
déterminer si un site est conforme aux règles d’accessibilité. 

# Q4: Combien de fois vous devez utiliser une touche du clavier pour passer le quizz ?
Réponse: 3 fois 

# Q5: Donner 3 roles ARIA et 3 propriété ARIA
Réponse: 
Roles:
-role="region" -> section du quizz
role="navigation" -> section réseaux sociaux
role="status" -> score final

Propriété
aria-label -> étiquette accessible des icônes et boutons
aria-live="assertive" -> annonce dynamique du score
aria-labelledby -> lie la région au titre

# Q6: Ajouter le screen de votre score Lighthouse
Screen: ![alt text](<Capture d’écran 2026-02-18 à 10.24.55.png>)

# Q7: L'une des best practice de l'ARIA est "ne pas utiliser l'ARIA" pouvez nous expliquer pourquoi d'après vous ?
Réponse: Les éléments natifs HTML sont mieux reconnus que les attributs ARIA, donc il vaut mieux faire du HTML sémantique natif plûtot que de l'ARIA. 

# Q8: Ajouter le screen de votre score Lighthouse
Screen: ![alt text](<Capture d’écran 2026-02-18 à 10.32.07.png>)

# Q9: Pourquoi le score de lighthouse n'a pas augmenté d'après vous ?
Réponse: Parce que lighthouse ne test pas tous les critères d'accessibilités, pour amélioré encore le score il faudrait aussi travailler sur le contraste,la taille de certai éléments...

# Q10: Quel est la valeur du rapport de contraste actuel :
Réponse: 2.38

# Q11: Quel est la valeur du score AA :
Réponse: 4.5

# Q12: Quel est la valeur du score AAA :
Réponse: 7

# Q13: Comment pouvez vous changer la valeur du contraste de votre texte ?
Réponse: En changeant les couleurs pour que le contraste soit plus visible. 

# Q14: Ajouter le screen de votre score Lighthouse
Screen: ![alt text](<Capture d’écran 2026-02-18 à 10.52.47.png>)

# Q15: Êtes vous capable de déterminer visuellement ce qui est un lien ou pas en appliquant chaque altérations ?
Réponse: Non car les liens sont pas distinguables sauf par la couleur. 

# Q16: Ajouter le screen de votre score Lighthouse
Screen:![alt text](<Capture d’écran 2026-02-18 à 11.07.37.png>)

# Q17:  Proposition 1
Description: Focus automatique sur le premier bouton de réponse quand une nouvelle question apparaît. Plus besoin de tabuler depuis le haut de la page pour atteindre les propositions.
Nb d'actions gagnée : 2 par question (on évite de re-tabuler jusqu'aux boutons)

# Q18:  Proposition 2
Description: Changement de aria-live="polite" en aria-live="assertive" sur la zone de question pour que le lecteur d'écran lise la question immédiatement quand elle change, sans attendre que l'utilisateur navigue dessus.
Nb d'actions gagnée : 1 par question (pas besoin de chercher la question manuellement)

# Q19:  Proposition 3
Description: 
Nb d'actions gagnée : 
