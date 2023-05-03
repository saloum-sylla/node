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

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // Récupération de l'URL demandée
  const requestedUrl = req.url;
  console.log(requestedUrl);

  // Construction du chemin absolu vers le fichier demandé en utilisant la méthode path.join()
//   const filePath = path.join(__dirname, requestedUrl);
  const filePath =`.${req.url}`;
  console.log(filePath);

  // Vérification si le fichier existe
  fs.access(filePath, fs.constants.F_OK, (err) => {
    // console.log(fs.constants.F_OK);
    if (err) {
      // Si le fichier n'existe pas, renvoyer une réponse 404 avec le contenu de 404.html
      fs.readFile("404.html",  (err, data) => {
        if (err) {
          console.error(err);
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal server error");
        } else {
          res.writeHead(404, { "Content-Type": "image/jpeg" });
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
          // console.log(contentType)
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
    case ".jpg":
      return "image/jpg";
    default:
      return "text/plain";
  }
}

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
