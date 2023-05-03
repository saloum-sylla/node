// Vous devez créer un programme Node.js qui permet de créer un fichier texte  contenant le message "Hello, world!" en utilisant la méthode writeFile() du module FileSystem.

// Ensuite, vous devez créer un module personnel qui exporte une fonction qui prend en paramètre un message et un nom de fichier, et qui écrit ce message dans le fichier en utilisant la méthode writeFile() du module FileSystem.

// Enfin, vous devez créer un autre fichier JavaScript qui importe le module personnel et utilise la fonction exportée pour écrire un message dans un fichier.

// Étape 3 : utiliser le module personnel pour écrire un message dans un fichier
const exercice6Module = require("./exercice6Module.js");
exercice6Module.writeToFile("Ceci est un message écrit ", "monFichier.txt");
