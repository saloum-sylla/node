// https://nodejs.org/docs/latest/api/modules.html

// Node.js utilise des modules pour organiser et partager du code. Les modules sont des fichiers JavaScript qui exportent des fonctions (grace a module.exports = [valeur a exporter]), des objets ou des valeurs spécifiques qui peuvent être importés et utilisés dans d'autres fichiers (grace a:  require("./cheminVersLeModule") ).

/*
recopiez l'exercice0 ici et creez un autre fichier exercice1Module.js qui contient une fonction qui return bonjour de la part du module 
*/
// const direBonjour = require("./exercice1Module");

console.log(require("./exercice1Module")());
