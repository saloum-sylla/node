/**
  Exercices :

  1. Pour cet exercice vous reprendrez le serveur HTTP de l'exercice précédent.

  Créez un fichier HTML dans lequel vous positionnerez une chaîne de caractères 
  facilement reconnaissable. Par exemple : 
  - ##dateDuJour##
  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date.

  Après avoir lu et obtenu le contenu d'un fichier et avant de retourner sa réponse HTTP,
  votre serveur HTTP doit remplacer dans le contenu du fichier la chaîne de caractères par
  la date du jour.
 .toString().replace()
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Obje
**/

/**
  2. Pour cet exercice vous reprendrez le serveur HTTP de l'exercice précédent.

  Créez un fichier HTML dans lequel vous positionnerez deux autres chaînes de caractères 
  facilement reconnaissable. Par exemple :
  - {{ nom }}
  - {{ prenom }}

  Après avoir lu et obtenu le contenu d'un fichier et avant de retourner sa réponse HTTP,
  votre serveur HTTP doit remplacer dans le contenu du fichier les deux chaînes de caractères
  par respectivement votre nom et votre prénom.
**/
const http = require("http"); // Importe le module http
const fs = require("fs"); // Importe le module fs
const path = require("path"); // Importe le module path

const server = http.createServer((req, res) => {
  // Crée le serveur HTTP
  const filePath = `.${req.url}`; // Récupère le chemin du fichier demandé à partir de l'URL
  const extname = path.extname(filePath); // Récupère l'extension du fichier demandé
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

      // Remplace la chaîne de caractères ##dateDuJour## par la date du jour
      const date = new Date().toLocaleDateString();
      console.log(content);
      content = content.toString().replace("##dateDuJour##", date);
      // .replace("{{ nom }}", "jackson")
      // .replace("{{ prenom }}", "michael");

      // Remplace les chaînes de caractères {{ nom }} et {{ prenom }} par votre nom et votre prénom
      content = content.toString().replace("{{ nom }}", "jackson");
      content = content.toString().replace("{{ prenom }}", "michael");

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
