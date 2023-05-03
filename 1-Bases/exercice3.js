/**
Node.js est conçu de manière modulaire, offrant aux développeurs un ensemble de modules intégrés pour commencer à travailler sur leurs projets. Le premier module que nous allons explorer est le module intégré "FileSystem". Ce module fournit des fonctionnalités pour interagir avec le système de fichiers sous-jacent et permet d'obtenir un objet de type FileSystem.

  Ce module est documenté ici : https://nodejs.org/dist/latest-v5.x/docs/api/fs.html

  Un objet de type FileSystem contient un ensemble de méthodes pour manipuler le système de fichier de l'ordinateur sur lequel s'exécute le programme. Pour charger obtenir cet objet, on doit charger le module en utilisant le chemin 'fs'. Par exemple :

  const monModuleFileSystem = require('fs');

  --> const est un mot-clé qui joue le même rôle que var. Il permet de créer une variable dans un contexte. La principale différence entre const et var est qu'un variable crée avec const ne peut pas être modifiée par la suite. 
  Ici on utilise const car on ne va (certainement) pas modifier le contenu de l'objet FileSystem. Il s'agit donc la d'une bonne pratique (const est documenté ici sur le MDN : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/const).

  L'objet FileSystem propose à la fois des méthodes synchrones et des méthodes asynchrones. Par exemple :

La méthode .writeFileSync() permet d'écrire des données dans un fichier de manière synchrone. Pendant ce temps, l'exécution du programme est interrompue jusqu'à ce que l'écriture soit terminée.

https://nodejs.org/dist/latest-v5.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback

La méthode .writeFile() permet d'écrire des données dans un fichier de manière asynchrone. L'exécution du programme continue pendant que les données sont écrites dans le fichier. Si vous souhaitez exécuter du code dépendant de la fin de l'écriture des données, vous devez fournir à la méthode .writeFile() une fonction de rappel (ou "callback") qui sera invoquée lorsque l'écriture sera terminée.

Lors de l'utilisation des modules Node.js, on trouve généralement des méthodes synchrones et asynchrones. Cependant, il est préférable d'utiliser les méthodes asynchrones pour des raisons de performance. Il est important de noter que l'ordre d'exécution des instructions ne correspond pas nécessairement à l'ordre de lecture du code (de haut en bas) lorsqu'on travaille avec des méthodes asynchrones.
**/

/**
  Exercices :

  1. Écrivez un programme qui créé un fichier texte (de façon asynchrone) encodé en utf8 contenant le message 'Ceci est un message écrit par Node JS'.  
**/

// importation module FileSystem
const fs = require("fs");

fs.writeFile("./exercice3.txt", "2em Hello Node.js", (error) => {
  if (error) {
    console.error("Erreur lors de la création du fichier:", error);
  } else {
    console.log("Fichier créé avec succès !");
  }
});
