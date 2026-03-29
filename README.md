# TP2_Webmapping_Romain_Bernasconi
TP final de web mapping - Master 1 de géomatique
## API - GEO-ATLAS
Cette Api permet d'afficher sur une carte la localisation des communes en fonction de leur nom.

## Fonctionnalités

### La recherche simple
1. Sélectionner le type de requête que vous souhaitez pour afficher votre/vos communes :
    - Contient
    - Commence par
    - Finit par
2. Taper dans la barre de recherche un bout de nom ou le nom entier selon son souhait et type de requête
3. Clicker sur rechercher pour afficher les points

### La recherche thématique
3 recherches thématiques présélectionnés sont disponibles:
- Les villes se terminant par "heim"
- les villes qui commencent par "Ville"
- les villes qui se terminent par "ac"

Ces 3 recherches thématiques ont pour objectif de démontrer la répartition géographique des villes françaises en fonction de leur suffixe. Nous remarquons ici que les villes se terminant par "heim" se trouvent quasi-exclusivement en Alsace pour des raisons historiques et linguistiques.
Nous remarquons également que les villes se terminant par "ac" se trouvent en grande partie dans le sud-ouest ainsi qu'en Bretagne tandis que les villes qui commencent par "Ville" sont inexistantes dans cette même région.

### Comptage statistique Nord/Sud
Enfin, dès que nous effectuons une recherche, une pop-up indiquant la répartition nord/sud des villes contenant ces lettres s'affiche. Cela permet de mieux visualiser la dispersion géographique de certains suffixes. Par exemple, nous constatons qu'il y a significitavement plus de villes commençant par "Ville" dans le nord que dans le sud. Cependant, la quantité de villes se terminant par "ac" est bien plus importante dans le sud de la France.

Pour aller plus loin, nous pourrions implémenter à ce comptage statistique les notion Est/Ouest pour observer des répartitions plus précises encore.