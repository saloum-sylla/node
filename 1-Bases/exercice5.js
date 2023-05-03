/**
 NodeJS est accompagné de npm, un outil qui permet de télécharger des modules supplémentaires développés par la communauté Node.js.

Pour installer un module avec npm, il suffit généralement d'exécuter la commande suivante dans le terminal, en se situant dans le répertoire du projet :npm install [nom_du_module]


  Nous allons Installer et utiliser le module lodash pour inverser un tableau.
  https://lodash.com/docs/
**/

/**
  Exercice :

    1. Installez le module lodash et verifiez qu'il est bien installé dans le dossier node_modules de votre projet.
**/

/**
    2. Chargez le module lodash dans votre module principal 
    3. creez un array de 5 elements 
    4. Le programme doit afficher le tableau initial et le tableau inversé dans la console.
    https://lodash.com/docs/4.17.15#reverse
    5. modifiez le script du package.json pour lancer exercice5.js grace a la commande de dbz npm run fusion 
**/

/**
    4. Prenez l'habitude d'utiliser la doc: 
**/
const _ = require("lodash");

const myArray = [1, 2, 3, 4, 5];

// console.log(_);
console.log("Tableau initial :", myArray);
_.reverse(myArray);
console.log("Tableau initial :", myArray);
// console.log("Tableau inversé :", reversedArray);
