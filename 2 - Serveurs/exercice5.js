/**
Le module path fournit des utilitaires pour travailler avec des chemins de fichiers et de répertoires. Il est inclus dans Node.js . 

Voici quelques-uns des utilitaires les plus couramment utilisés :

path.join() permet de joindre plusieurs parties de chemins en une seule chaîne de caractères. Elle prend en paramètre une ou plusieurs chaînes représentant des parties de chemins et renvoie une nouvelle chaîne contenant le chemin complet résultant de la jonction des différentes parties.
const path = require('path');
const chemin = path.join('/usr', 'local', 'bin');
console.log(chemin);


path.resolve([from ...], to): Cette méthode résout un chemin absolu en fonction des arguments fournis. Si to est un chemin absolu, il sera renvoyé tel quel. Sinon, to sera résolu en fonction du chemin actuel. Par exemple, path.resolve('/foo/bar', './baz') renvoie /foo/bar/baz.

path.basename(path, [ext]): Cette méthode renvoie la dernière partie d'un chemin. Si ext est fourni, elle est supprimée du résultat. Par exemple, path.basename('/foo/bar/baz.html', '.html') renvoie baz.

path.dirname(path): Cette méthode renvoie le répertoire parent d'un chemin. Par exemple, path.dirname('/foo/bar/baz.html') renvoie /foo/bar.

path.extname(path): Cette méthode renvoie l'extension d'un fichier. Par exemple, path.extname('/foo/bar/baz.html') renvoie .html.


fs.constants.F_OK est une constante de la bibliothèque Node.js fs qui représente le mode de vérification de l'existence d'un fichier ou d'un répertoire. Cette constante est utilisée avec la méthode fs.access() pour vérifier si un fichier ou un répertoire existe.

La constante fs.constants.F_OK indique que la vérification de l'existence du fichier doit être effectuée. Si le fichier existe, la méthode fs.access() retournera null (aucune erreur), sinon elle retournera une erreur.

Il existe également d'autres constantes disponibles pour la vérification de l'existence d'un fichier ou d'un répertoire, telles que fs.constants.R_OK pour la vérification de lecture, fs.constants.W_OK pour la vérification d'écriture et fs.constants.X_OK pour la vérification d'exécution.







*/
/**
  Exercices :

 Créez un serveur HTTP qui retourne dans sa réponse HTTP le contenu du fichier dont le nom est le même que celui obtenu à partir de l'URL si ce fichier existe.

Si le fichier n'existe pas, le serveur HTTP doit retourner dans sa réponse HTTP le contenu du fichier 404.html que vous avez créé pour l'exercice précédent.

Pour trouver le fichier correspondant à l'URL, vous devez reconstruire le chemin absolu du fichier en concaténant le chemin du dossier racine de votre serveur avec le chemin de la ressource demandée dans l'URL.

Par exemple, si l'URL est : http://localhost:3000/html/contact.html et que votre serveur s'exécute à partir du dossier c:\nodejs\app, vous devez ouvrir le fichier c:\nodejs\app\html\contact.html et en envoyer le contenu dans la réponse HTTP.

Notez qu'il est recommandé d'utiliser le module Node.js path pour construire le chemin absolu du fichier et de gérer les erreurs en retournant une réponse 404 si le fichier n'est pas trouvé.
**/

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // Récupération de l'URL demandée
  const requestedUrl = req.url;

  // Construction du chemin absolu vers le fichier demandé en utilisant la méthode path.join()
  const filePath = path.join(__dirname, requestedUrl);

  // Vérification si le fichier existe
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // Si le fichier n'existe pas, renvoyer une réponse 404 avec le contenu de 404.html
      fs.readFile("404.html", "utf8", (err, data) => {
        if (err) {
          console.error(err);
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal server error");
        } else {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
    } else {
      // Si le fichier existe, renvoyer son contenu avec le type MIME approprié
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          console.error(err);
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal server error");
        } else {
          const contentType = getContentType(filePath);
          res.writeHead(200, { "Content-Type": contentType });
          res.end(data);
        }
      });
    }
  });
});

// Fonction qui retourne le type MIME correspondant à une extension de fichier
function getContentType(filePath) {
  const extension = path.extname(filePath);
  switch (extension) {
    case ".html":
      return "text/html";
    case ".css":
      return "text/css";
    case ".js":
      return "text/javascript";
    default:
      return "text/plain";
  }
}

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
