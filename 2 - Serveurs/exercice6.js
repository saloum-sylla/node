/**

path.extname est une méthode du module path de Node.js qui retourne l'extension d'un chemin de fichier. Elle prend en entrée un chemin de fichier et renvoie la partie de l'extension de ce chemin, y compris le point.
**/
/**
  Exercices :

  1. Pour cet exercice vous reprendrez le serveur HTTP de l'exercice précédent.
  
  Votre serveur HTTP doit gérer différents Mime Types. Vous devez faire en sorte que
  le Mime Type soit conforme à l'extension obtenue à partir de la ressource dans l'URL.

  Par exemple :
  - Si l'URL est http://10.2.1.0:4321/photo.jpeg (et que le fichier photo.jpeg existe)
  - Alors l'en-tête de la réponse HTTP doit contenir Content-Type : image/jpeg
  
  Vous devez gérer les Mime Types des formats de fichier suivant : css, js, jpeg, png, pdf, gif.

  La liste des Mime Types autorisés est disponible ici : http://www.iana.org/assignments/media-types/media-types.xhtml
**/

/**
  2. Utiliser votre serveur HTTP pour "servir" votre projet Front End (sur le réseau local).

  Pensez à utiliser l'onglet réseau des outils de développement de votre navigateur Internet pour
  vérifier que vous arrivez bien à télécharger toutes les ressources exigées par votre projet.

  Ajoutez la gestion des Mime Types manquants si nécessaire...
**/

const http = require("http"); // Importe le module http
const fs = require("fs"); // Importe le module fs
const path = require("path"); // Importe le module path

const server = http.createServer((req, res) => {
  // Crée le serveur HTTP
  const filePath = `.${req.url}`; // Récupère le chemin du fichier demandé à partir de l'URL
  console.log(filePath);
  const extname = path.extname(filePath); // Récupère l'extension du fichier demandé
  console.log(extname)
  let contentType = "text/html"; // Initialise le type de contenu par défaut

  // Détermine le type de contenu en fonction de l'extension du fichier
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
    case ".jpeg":
      contentType = "image/jpeg";
      break;
    case ".gif":
      contentType = "image/gif";
      break;
    case ".pdf":
      contentType = "application/pdf";
      break;
  }

  // Lit le contenu du fichier demandé
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // Si une erreur se produit
      if (err.code == "ENOENT") {
        // Si le fichier n'existe pas
        fs.readFile("404.html", (err, content) => {
          // Lit le fichier 404.html
          res.writeHead(404, { "Content-Type": "text/html" }); // Définit l'en-tête de la réponse HTTP
          res.end(content, "utf-8"); // Envoie la réponse HTTP avec le contenu du fichier 404.html
        });
      } else {
        // Si une autre erreur se produit
        res.writeHead(500); // Définit l'en-tête de la réponse HTTP avec une erreur 500
        res.end(`Server Error: ${err.code}`); // Envoie la réponse HTTP avec le message d'erreur
      }
    } else {
      // Si le fichier est lu avec succès
      res.writeHead(200, { "Content-Type": contentType }); // Définit l'en-tête de la réponse HTTP avec le type de contenu approprié
      res.end(content, "utf-8"); // Envoie la réponse HTTP avec le contenu du fichier demandé
    }
  });
});

const port = 3000; // Définit le port d'écoute du serveur HTTP
server.listen(port, () => {
  // Lance le serveur HTTP
  console.log(`Server listening on port ${port}`); // Affiche un message sur la console indiquant que le serveur est en écoute
});
