/*
npm est un outil en ligne de commande qui vous permet d'installer et de gérer des packages (modules) pour votre projet Node.js. Il est automatiquement installé lorsque vous installez Node.js.

Voici quelques commandes npm courantes pour gérer les dépendances de votre projet:

• npm init : Initialise un nouveau projet Node.js en créant un fichier package.json qui contient les informations et les dépendances du projet.

• npm install <package> : Installe un package (module) et l'ajoute aux dépendances dans le fichier package.json.

• npm install : Installe toutes les dépendances listées dans le fichier package.json. Cette commande est utile lorsque vous récupérez un projet existant ou après avoir modifié le fichier package.json manuellement.

• npm uninstall <package> : Supprime un package (module) et le retire des dépendances dans le fichier package.json.
*/

/* 
exercice

1 Initialise un nouveau projet Node.js, Cela générera un fichier package.json avec les informations de votre projet.

2 dans exercice4.js ajoutez le code pour afficher dans la console 'Bienvenue dans mon premier projet Node.js !';

3 Modifiez le fichier package.json et ajoutez une nouvelle entrée "scripts" pour définir une commande permettant d'exécuter votre fichier  : "start": "node exercice4.js",

Exécutez votre projet en utilisant la commande npm start dans le terminal 
*/
console.log("Bienvenue dans mon premier projet Node.js !");
