/*
__dirname est une variable spéciale en JavaScript qui renvoie le chemin absolu du dossier dans lequel se trouve le fichier courant. Cette variable est généralement utilisée en conjonction avec le module path de Node.js pour construire des chemins de fichiers relatifs.
Par exemple, si vous avez un fichier index.js dans le dossier /home/user/app, __dirname renverra /home/user/app.

le module path  fournit des méthodes pour travailler avec les chemins de fichiers et de dossiers.
La méthode  path.join() prend deux ou plusieurs arguments et renvoie un nouveau chemin en joignant tous les arguments avec les séparateurs de chemin appropriés. Par exemple, path.join('/usr', 'local', 'bin') renvoie /usr/local/bin.

En utilisant cette méthode, nous pouvons construire le chemin absolu vers le fichier demandé à partir de l'URL de la requête HTTP.
*/

/*
Exercice : Trouver le chemin d'un fichier

1. Créez un fichier JavaScript nommé "exercice2.js" contenant le code suivant :

    const path = require("path");

    const nomDuFichier = "exercice2.txt";
    const cheminDuFichier = path.join(__dirname, nomDuFichier);

    console.log("Le chemin complet du fichier est : ", filePath);

2. Créez un fichier texte nommé "exercice2.txt" dans le même répertoire que "exercice2.js".

Ouvrez un terminal et naviguez jusqu'au répertoire contenant "exercice2.js" et "exercice2.txt".

Exécutez le code en tapant "node exercice2.js" dans le terminal.

Le programme devrait afficher le chemin complet du fichier "exercice2.txt".

3. console.log(__dirname);

Cet exercice vous permettra de pratiquer l'utilisation de la méthode "path.join()" pour obtenir le chemin d'un fichier en utilisant Node.js.
*/
const path = require("path");

const nomDuFichier = "exercice2.txt";
const cheminDuFichier = path.join(__dirname, nomDuFichier);
console.log("Le chemin complet du fichier est : ", cheminDuFichier);
